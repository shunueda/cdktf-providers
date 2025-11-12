// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterinstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#backplanebasedview Clusterinstance#backplanebasedview}
  */
  readonly backplanebasedview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#clid Clusterinstance#clid}
  */
  readonly clid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#clusterproxyarp Clusterinstance#clusterproxyarp}
  */
  readonly clusterproxyarp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#deadinterval Clusterinstance#deadinterval}
  */
  readonly deadinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#dfdretainl2params Clusterinstance#dfdretainl2params}
  */
  readonly dfdretainl2Params?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#hellointerval Clusterinstance#hellointerval}
  */
  readonly hellointerval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#id Clusterinstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#inc Clusterinstance#inc}
  */
  readonly inc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#nodegroup Clusterinstance#nodegroup}
  */
  readonly nodegroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#preemption Clusterinstance#preemption}
  */
  readonly preemption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#processlocal Clusterinstance#processlocal}
  */
  readonly processlocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#quorumtype Clusterinstance#quorumtype}
  */
  readonly quorumtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#retainconnectionsoncluster Clusterinstance#retainconnectionsoncluster}
  */
  readonly retainconnectionsoncluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#secureheartbeats Clusterinstance#secureheartbeats}
  */
  readonly secureheartbeats?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#syncstatusstrictmode Clusterinstance#syncstatusstrictmode}
  */
  readonly syncstatusstrictmode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance citrixadc_clusterinstance}
*/
export class Clusterinstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_clusterinstance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clusterinstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clusterinstance to import
  * @param importFromId The id of the existing Clusterinstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clusterinstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_clusterinstance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusterinstance citrixadc_clusterinstance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterinstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterinstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_clusterinstance',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backplanebasedview = config.backplanebasedview;
    this._clid = config.clid;
    this._clusterproxyarp = config.clusterproxyarp;
    this._deadinterval = config.deadinterval;
    this._dfdretainl2Params = config.dfdretainl2Params;
    this._hellointerval = config.hellointerval;
    this._id = config.id;
    this._inc = config.inc;
    this._nodegroup = config.nodegroup;
    this._preemption = config.preemption;
    this._processlocal = config.processlocal;
    this._quorumtype = config.quorumtype;
    this._retainconnectionsoncluster = config.retainconnectionsoncluster;
    this._secureheartbeats = config.secureheartbeats;
    this._syncstatusstrictmode = config.syncstatusstrictmode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backplanebasedview - computed: true, optional: true, required: false
  private _backplanebasedview?: string; 
  public get backplanebasedview() {
    return this.getStringAttribute('backplanebasedview');
  }
  public set backplanebasedview(value: string) {
    this._backplanebasedview = value;
  }
  public resetBackplanebasedview() {
    this._backplanebasedview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backplanebasedviewInput() {
    return this._backplanebasedview;
  }

  // clid - computed: false, optional: false, required: true
  private _clid?: number; 
  public get clid() {
    return this.getNumberAttribute('clid');
  }
  public set clid(value: number) {
    this._clid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clidInput() {
    return this._clid;
  }

  // clusterproxyarp - computed: true, optional: true, required: false
  private _clusterproxyarp?: string; 
  public get clusterproxyarp() {
    return this.getStringAttribute('clusterproxyarp');
  }
  public set clusterproxyarp(value: string) {
    this._clusterproxyarp = value;
  }
  public resetClusterproxyarp() {
    this._clusterproxyarp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterproxyarpInput() {
    return this._clusterproxyarp;
  }

  // deadinterval - computed: true, optional: true, required: false
  private _deadinterval?: number; 
  public get deadinterval() {
    return this.getNumberAttribute('deadinterval');
  }
  public set deadinterval(value: number) {
    this._deadinterval = value;
  }
  public resetDeadinterval() {
    this._deadinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadintervalInput() {
    return this._deadinterval;
  }

  // dfdretainl2params - computed: true, optional: true, required: false
  private _dfdretainl2Params?: string; 
  public get dfdretainl2Params() {
    return this.getStringAttribute('dfdretainl2params');
  }
  public set dfdretainl2Params(value: string) {
    this._dfdretainl2Params = value;
  }
  public resetDfdretainl2Params() {
    this._dfdretainl2Params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfdretainl2ParamsInput() {
    return this._dfdretainl2Params;
  }

  // hellointerval - computed: true, optional: true, required: false
  private _hellointerval?: number; 
  public get hellointerval() {
    return this.getNumberAttribute('hellointerval');
  }
  public set hellointerval(value: number) {
    this._hellointerval = value;
  }
  public resetHellointerval() {
    this._hellointerval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hellointervalInput() {
    return this._hellointerval;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inc - computed: true, optional: true, required: false
  private _inc?: string; 
  public get inc() {
    return this.getStringAttribute('inc');
  }
  public set inc(value: string) {
    this._inc = value;
  }
  public resetInc() {
    this._inc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incInput() {
    return this._inc;
  }

  // nodegroup - computed: true, optional: true, required: false
  private _nodegroup?: string; 
  public get nodegroup() {
    return this.getStringAttribute('nodegroup');
  }
  public set nodegroup(value: string) {
    this._nodegroup = value;
  }
  public resetNodegroup() {
    this._nodegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodegroupInput() {
    return this._nodegroup;
  }

  // preemption - computed: true, optional: true, required: false
  private _preemption?: string; 
  public get preemption() {
    return this.getStringAttribute('preemption');
  }
  public set preemption(value: string) {
    this._preemption = value;
  }
  public resetPreemption() {
    this._preemption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionInput() {
    return this._preemption;
  }

  // processlocal - computed: true, optional: true, required: false
  private _processlocal?: string; 
  public get processlocal() {
    return this.getStringAttribute('processlocal');
  }
  public set processlocal(value: string) {
    this._processlocal = value;
  }
  public resetProcesslocal() {
    this._processlocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processlocalInput() {
    return this._processlocal;
  }

  // quorumtype - computed: true, optional: true, required: false
  private _quorumtype?: string; 
  public get quorumtype() {
    return this.getStringAttribute('quorumtype');
  }
  public set quorumtype(value: string) {
    this._quorumtype = value;
  }
  public resetQuorumtype() {
    this._quorumtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quorumtypeInput() {
    return this._quorumtype;
  }

  // retainconnectionsoncluster - computed: true, optional: true, required: false
  private _retainconnectionsoncluster?: string; 
  public get retainconnectionsoncluster() {
    return this.getStringAttribute('retainconnectionsoncluster');
  }
  public set retainconnectionsoncluster(value: string) {
    this._retainconnectionsoncluster = value;
  }
  public resetRetainconnectionsoncluster() {
    this._retainconnectionsoncluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainconnectionsonclusterInput() {
    return this._retainconnectionsoncluster;
  }

  // secureheartbeats - computed: true, optional: true, required: false
  private _secureheartbeats?: string; 
  public get secureheartbeats() {
    return this.getStringAttribute('secureheartbeats');
  }
  public set secureheartbeats(value: string) {
    this._secureheartbeats = value;
  }
  public resetSecureheartbeats() {
    this._secureheartbeats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureheartbeatsInput() {
    return this._secureheartbeats;
  }

  // syncstatusstrictmode - computed: true, optional: true, required: false
  private _syncstatusstrictmode?: string; 
  public get syncstatusstrictmode() {
    return this.getStringAttribute('syncstatusstrictmode');
  }
  public set syncstatusstrictmode(value: string) {
    this._syncstatusstrictmode = value;
  }
  public resetSyncstatusstrictmode() {
    this._syncstatusstrictmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncstatusstrictmodeInput() {
    return this._syncstatusstrictmode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backplanebasedview: cdktf.stringToTerraform(this._backplanebasedview),
      clid: cdktf.numberToTerraform(this._clid),
      clusterproxyarp: cdktf.stringToTerraform(this._clusterproxyarp),
      deadinterval: cdktf.numberToTerraform(this._deadinterval),
      dfdretainl2params: cdktf.stringToTerraform(this._dfdretainl2Params),
      hellointerval: cdktf.numberToTerraform(this._hellointerval),
      id: cdktf.stringToTerraform(this._id),
      inc: cdktf.stringToTerraform(this._inc),
      nodegroup: cdktf.stringToTerraform(this._nodegroup),
      preemption: cdktf.stringToTerraform(this._preemption),
      processlocal: cdktf.stringToTerraform(this._processlocal),
      quorumtype: cdktf.stringToTerraform(this._quorumtype),
      retainconnectionsoncluster: cdktf.stringToTerraform(this._retainconnectionsoncluster),
      secureheartbeats: cdktf.stringToTerraform(this._secureheartbeats),
      syncstatusstrictmode: cdktf.stringToTerraform(this._syncstatusstrictmode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backplanebasedview: {
        value: cdktf.stringToHclTerraform(this._backplanebasedview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clid: {
        value: cdktf.numberToHclTerraform(this._clid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clusterproxyarp: {
        value: cdktf.stringToHclTerraform(this._clusterproxyarp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deadinterval: {
        value: cdktf.numberToHclTerraform(this._deadinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dfdretainl2params: {
        value: cdktf.stringToHclTerraform(this._dfdretainl2Params),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hellointerval: {
        value: cdktf.numberToHclTerraform(this._hellointerval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inc: {
        value: cdktf.stringToHclTerraform(this._inc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodegroup: {
        value: cdktf.stringToHclTerraform(this._nodegroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preemption: {
        value: cdktf.stringToHclTerraform(this._preemption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processlocal: {
        value: cdktf.stringToHclTerraform(this._processlocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quorumtype: {
        value: cdktf.stringToHclTerraform(this._quorumtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retainconnectionsoncluster: {
        value: cdktf.stringToHclTerraform(this._retainconnectionsoncluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secureheartbeats: {
        value: cdktf.stringToHclTerraform(this._secureheartbeats),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syncstatusstrictmode: {
        value: cdktf.stringToHclTerraform(this._syncstatusstrictmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
