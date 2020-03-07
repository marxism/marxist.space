import React from 'react'
import getQueryParams from 'get-query-params'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'
import { setTag, clearTags } from '../../actions/filter-search'

const Item = styled.span`
  padding: 6px;
  font-size: 15px;
  text-decoration: none;
  color: ${(props) => props.theme.normalText};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  cursor: pointer;
  text-decoration: underline;

  ::after {
    left: -1px;
    top: 0;
    bottom: 0;
    border-left: 3px solid ${(props) => props.theme.accent};
  }
`

type TagItemProps = {
  tag: string
  set: (tag: string) => void
  clear: () => void
  currentTags: string[]
  history: {
    push: (item: string) => void
  }
  location: {
    search?: string
  }
}

type MaybeParams = {
  tags?: string
}

export const TagItem = ({
  tag,
  set,
  clear,
  currentTags,
  history: { push },
  location: { search },
}: TagItemProps) => {
  const isActive = currentTags.includes(tag)

  const handleClick = () => {
    if (tag === 'all') {
      clear()
      push('/')
    } else {
      const params = getQueryParams(search) as MaybeParams
      const paramTags = (params.tags || '').split(',')
      const newParamTags = (paramTags.includes(tag)
        ? paramTags.filter((t) => t !== tag)
        : [...paramTags, tag]
      ).filter(Boolean)

      if (newParamTags.length) {
        push(`?tags=${newParamTags.join(',')}`)
      } else {
        push('/')
      }

      set(tag)
    }
  }

  return (
    <Item isActive={isActive} onClick={handleClick}>
      {tag}
    </Item>
  )
}

const mapStateToProps = (state) => ({
  currentTags: state.filterSearch.tags,
})

const mapDispatchToProps = { set: setTag, clear: clearTags }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TagItem))
