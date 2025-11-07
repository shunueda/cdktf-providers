// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerAclIngressActionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action#device_name SwitchcontrollerAclIngressActionA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action#device_vdom SwitchcontrollerAclIngressActionA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action#drop SwitchcontrollerAclIngressActionA#drop}
  */
  readonly drop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action#fmgcount SwitchcontrollerAclIngressActionA#fmgcount}
  */
  readonly fmgcount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action#id SwitchcontrollerAclIngressActionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action#ingress SwitchcontrollerAclIngressActionA#ingress}
  */
  readonly ingress: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action fmgdevice_switchcontroller_acl_ingress_action}
*/
export class SwitchcontrollerAclIngressActionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_acl_ingress_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerAclIngressActionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerAclIngressActionA to import
  * @param importFromId The id of the existing SwitchcontrollerAclIngressActionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerAclIngressActionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_acl_ingress_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_acl_ingress_action fmgdevice_switchcontroller_acl_ingress_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerAclIngressActionAConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerAclIngressActionAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_acl_ingress_action',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._drop = config.drop;
    this._fmgcount = config.fmgcount;
    this._id = config.id;
    this._ingress = config.ingress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // drop - computed: true, optional: true, required: false
  private _drop?: string; 
  public get drop() {
    return this.getStringAttribute('drop');
  }
  public set drop(value: string) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // fmgcount - computed: true, optional: true, required: false
  private _fmgcount?: string; 
  public get fmgcount() {
    return this.getStringAttribute('fmgcount');
  }
  public set fmgcount(value: string) {
    this._fmgcount = value;
  }
  public resetFmgcount() {
    this._fmgcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgcountInput() {
    return this._fmgcount;
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

  // ingress - computed: false, optional: false, required: true
  private _ingress?: string; 
  public get ingress() {
    return this.getStringAttribute('ingress');
  }
  public set ingress(value: string) {
    this._ingress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      drop: cdktf.stringToTerraform(this._drop),
      fmgcount: cdktf.stringToTerraform(this._fmgcount),
      id: cdktf.stringToTerraform(this._id),
      ingress: cdktf.stringToTerraform(this._ingress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop: {
        value: cdktf.stringToHclTerraform(this._drop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmgcount: {
        value: cdktf.stringToHclTerraform(this._fmgcount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress: {
        value: cdktf.stringToHclTerraform(this._ingress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
