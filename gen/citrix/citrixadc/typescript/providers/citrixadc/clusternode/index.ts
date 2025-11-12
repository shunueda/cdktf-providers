// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusternodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#backplane Clusternode#backplane}
  */
  readonly backplane?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#clearnodegroupconfig Clusternode#clearnodegroupconfig}
  */
  readonly clearnodegroupconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#delay Clusternode#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#force Clusternode#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#id Clusternode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#ipaddress Clusternode#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#nodegroup Clusternode#nodegroup}
  */
  readonly nodegroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#nodeid Clusternode#nodeid}
  */
  readonly nodeid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#priority Clusternode#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#state Clusternode#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#tunnelmode Clusternode#tunnelmode}
  */
  readonly tunnelmode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode citrixadc_clusternode}
*/
export class Clusternode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_clusternode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clusternode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clusternode to import
  * @param importFromId The id of the existing Clusternode that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clusternode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_clusternode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/clusternode citrixadc_clusternode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusternodeConfig
  */
  public constructor(scope: Construct, id: string, config: ClusternodeConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_clusternode',
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
    this._backplane = config.backplane;
    this._clearnodegroupconfig = config.clearnodegroupconfig;
    this._delay = config.delay;
    this._force = config.force;
    this._id = config.id;
    this._ipaddress = config.ipaddress;
    this._nodegroup = config.nodegroup;
    this._nodeid = config.nodeid;
    this._priority = config.priority;
    this._state = config.state;
    this._tunnelmode = config.tunnelmode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backplane - computed: true, optional: true, required: false
  private _backplane?: string; 
  public get backplane() {
    return this.getStringAttribute('backplane');
  }
  public set backplane(value: string) {
    this._backplane = value;
  }
  public resetBackplane() {
    this._backplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backplaneInput() {
    return this._backplane;
  }

  // clearnodegroupconfig - computed: true, optional: true, required: false
  private _clearnodegroupconfig?: string; 
  public get clearnodegroupconfig() {
    return this.getStringAttribute('clearnodegroupconfig');
  }
  public set clearnodegroupconfig(value: string) {
    this._clearnodegroupconfig = value;
  }
  public resetClearnodegroupconfig() {
    this._clearnodegroupconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearnodegroupconfigInput() {
    return this._clearnodegroupconfig;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // ipaddress - computed: false, optional: false, required: true
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
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

  // nodeid - computed: false, optional: false, required: true
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tunnelmode - computed: true, optional: true, required: false
  private _tunnelmode?: string; 
  public get tunnelmode() {
    return this.getStringAttribute('tunnelmode');
  }
  public set tunnelmode(value: string) {
    this._tunnelmode = value;
  }
  public resetTunnelmode() {
    this._tunnelmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelmodeInput() {
    return this._tunnelmode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backplane: cdktf.stringToTerraform(this._backplane),
      clearnodegroupconfig: cdktf.stringToTerraform(this._clearnodegroupconfig),
      delay: cdktf.numberToTerraform(this._delay),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      nodegroup: cdktf.stringToTerraform(this._nodegroup),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      priority: cdktf.numberToTerraform(this._priority),
      state: cdktf.stringToTerraform(this._state),
      tunnelmode: cdktf.stringToTerraform(this._tunnelmode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backplane: {
        value: cdktf.stringToHclTerraform(this._backplane),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clearnodegroupconfig: {
        value: cdktf.stringToHclTerraform(this._clearnodegroupconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
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
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnelmode: {
        value: cdktf.stringToHclTerraform(this._tunnelmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
