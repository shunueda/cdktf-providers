// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerPtpProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#adom ObjectSwitchcontrollerPtpProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#description ObjectSwitchcontrollerPtpProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#domain ObjectSwitchcontrollerPtpProfile#domain}
  */
  readonly domain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#id ObjectSwitchcontrollerPtpProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#mode ObjectSwitchcontrollerPtpProfile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#name ObjectSwitchcontrollerPtpProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#pdelay_req_interval ObjectSwitchcontrollerPtpProfile#pdelay_req_interval}
  */
  readonly pdelayReqInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#ptp_profile ObjectSwitchcontrollerPtpProfile#ptp_profile}
  */
  readonly ptpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#scopetype ObjectSwitchcontrollerPtpProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#transport ObjectSwitchcontrollerPtpProfile#transport}
  */
  readonly transport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile fortimanager_object_switchcontroller_ptp_profile}
*/
export class ObjectSwitchcontrollerPtpProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_ptp_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerPtpProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerPtpProfile to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerPtpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerPtpProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_ptp_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_ptp_profile fortimanager_object_switchcontroller_ptp_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerPtpProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerPtpProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_ptp_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._description = config.description;
    this._domain = config.domain;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._pdelayReqInterval = config.pdelayReqInterval;
    this._ptpProfile = config.ptpProfile;
    this._scopetype = config.scopetype;
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: number; 
  public get domain() {
    return this.getNumberAttribute('domain');
  }
  public set domain(value: number) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pdelay_req_interval - computed: true, optional: true, required: false
  private _pdelayReqInterval?: string; 
  public get pdelayReqInterval() {
    return this.getStringAttribute('pdelay_req_interval');
  }
  public set pdelayReqInterval(value: string) {
    this._pdelayReqInterval = value;
  }
  public resetPdelayReqInterval() {
    this._pdelayReqInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdelayReqIntervalInput() {
    return this._pdelayReqInterval;
  }

  // ptp_profile - computed: true, optional: true, required: false
  private _ptpProfile?: string; 
  public get ptpProfile() {
    return this.getStringAttribute('ptp_profile');
  }
  public set ptpProfile(value: string) {
    this._ptpProfile = value;
  }
  public resetPtpProfile() {
    this._ptpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpProfileInput() {
    return this._ptpProfile;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.numberToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      pdelay_req_interval: cdktf.stringToTerraform(this._pdelayReqInterval),
      ptp_profile: cdktf.stringToTerraform(this._ptpProfile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      transport: cdktf.stringToTerraform(this._transport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.numberToHclTerraform(this._domain),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdelay_req_interval: {
        value: cdktf.stringToHclTerraform(this._pdelayReqInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ptp_profile: {
        value: cdktf.stringToHclTerraform(this._ptpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
