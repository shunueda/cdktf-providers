// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserSecurityexemptlistRuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#adom ObjectUserSecurityexemptlistRuleA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#devices ObjectUserSecurityexemptlistRuleA#devices}
  */
  readonly devices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#dstaddr ObjectUserSecurityexemptlistRuleA#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#fosid ObjectUserSecurityexemptlistRuleA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#id ObjectUserSecurityexemptlistRuleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#scopetype ObjectUserSecurityexemptlistRuleA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#security_exempt_list ObjectUserSecurityexemptlistRuleA#security_exempt_list}
  */
  readonly securityExemptList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#service ObjectUserSecurityexemptlistRuleA#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#srcaddr ObjectUserSecurityexemptlistRuleA#srcaddr}
  */
  readonly srcaddr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule fortimanager_object_user_securityexemptlist_rule}
*/
export class ObjectUserSecurityexemptlistRuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_securityexemptlist_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserSecurityexemptlistRuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserSecurityexemptlistRuleA to import
  * @param importFromId The id of the existing ObjectUserSecurityexemptlistRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserSecurityexemptlistRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_securityexemptlist_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_securityexemptlist_rule fortimanager_object_user_securityexemptlist_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserSecurityexemptlistRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectUserSecurityexemptlistRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_securityexemptlist_rule',
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
    this._devices = config.devices;
    this._dstaddr = config.dstaddr;
    this._fosid = config.fosid;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._securityExemptList = config.securityExemptList;
    this._service = config.service;
    this._srcaddr = config.srcaddr;
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

  // devices - computed: false, optional: true, required: false
  private _devices?: string; 
  public get devices() {
    return this.getStringAttribute('devices');
  }
  public set devices(value: string) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // dstaddr - computed: false, optional: true, required: false
  private _dstaddr?: string; 
  public get dstaddr() {
    return this.getStringAttribute('dstaddr');
  }
  public set dstaddr(value: string) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // security_exempt_list - computed: false, optional: false, required: true
  private _securityExemptList?: string; 
  public get securityExemptList() {
    return this.getStringAttribute('security_exempt_list');
  }
  public set securityExemptList(value: string) {
    this._securityExemptList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityExemptListInput() {
    return this._securityExemptList;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // srcaddr - computed: false, optional: true, required: false
  private _srcaddr?: string; 
  public get srcaddr() {
    return this.getStringAttribute('srcaddr');
  }
  public set srcaddr(value: string) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      devices: cdktf.stringToTerraform(this._devices),
      dstaddr: cdktf.stringToTerraform(this._dstaddr),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      security_exempt_list: cdktf.stringToTerraform(this._securityExemptList),
      service: cdktf.stringToTerraform(this._service),
      srcaddr: cdktf.stringToTerraform(this._srcaddr),
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
      devices: {
        value: cdktf.stringToHclTerraform(this._devices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.stringToHclTerraform(this._dstaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_exempt_list: {
        value: cdktf.stringToHclTerraform(this._securityExemptList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr: {
        value: cdktf.stringToHclTerraform(this._srcaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
