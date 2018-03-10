// set up test environment 
// set up enzyme work with adapter
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DotEnv from 'dotenv'

Enzyme.configure({
    adapter: new Adapter()
})

// path to test environment 
DotEnv.config({ path: '.env.test' })
