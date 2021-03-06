import React from 'react'
import Layout from '../components/Layout/Layout'
import Doenerstag from '../components/Layout/Doenerstag/Doenerstag'
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher'

const locale = require('../locales/en.json')

export default function index() {
  return (
    <Layout switchLabel={locale.switchLabel}>
        <Doenerstag doener={locale.doener} noDoener={locale.noDoener} />
    </Layout>
  )
}
