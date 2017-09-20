import createContainer from '@/utils/createContainer.js';
import  Clause from '@/pages/clause/clause.js';
import gloablActions from '@/actions/gloabl/gloabl.js'
import clauseAction from '@/actions/clause/index.js'

const connectComponent = createContainer(
  (state)=>{
  
    return {
     clause: state.clause,
     gloabl:state.gloabl
    }
  },
  Object.assign(gloablActions,clauseAction)
)
export default connectComponent(Clause)