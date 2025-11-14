// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#access_control_list ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#access_control_list}
  */
  readonly accessControlList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#action ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#adom ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#comment ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#dstaddr ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#dstport ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#id ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#protocol ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#rule_id ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#rule_id}
  */
  readonly ruleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#scopetype ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#srcaddr ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#srcaddr}
  */
  readonly srcaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#srcport ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA#srcport}
  */
  readonly srcport?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules fortimanager_object_wirelesscontroller_accesscontrollist_layer3ipv4rules}
*/
export class ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_accesscontrollist_layer3ipv4rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_accesscontrollist_layer3ipv4rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_accesscontrollist_layer3ipv4rules fortimanager_object_wirelesscontroller_accesscontrollist_layer3ipv4rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerAccesscontrollistLayer3Ipv4RulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_accesscontrollist_layer3ipv4rules',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlList = config.accessControlList;
    this._action = config.action;
    this._adom = config.adom;
    this._comment = config.comment;
    this._dstaddr = config.dstaddr;
    this._dstport = config.dstport;
    this._id = config.id;
    this._protocol = config.protocol;
    this._ruleId = config.ruleId;
    this._scopetype = config.scopetype;
    this._srcaddr = config.srcaddr;
    this._srcport = config.srcport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_list - computed: false, optional: false, required: true
  private _accessControlList?: string; 
  public get accessControlList() {
    return this.getStringAttribute('access_control_list');
  }
  public set accessControlList(value: string) {
    this._accessControlList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlListInput() {
    return this._accessControlList;
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dstaddr - computed: true, optional: true, required: false
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

  // dstport - computed: false, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
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

  // srcaddr - computed: true, optional: true, required: false
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

  // srcport - computed: false, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_list: cdktf.stringToTerraform(this._accessControlList),
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      dstaddr: cdktf.stringToTerraform(this._dstaddr),
      dstport: cdktf.numberToTerraform(this._dstport),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.numberToTerraform(this._protocol),
      rule_id: cdktf.numberToTerraform(this._ruleId),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      srcaddr: cdktf.stringToTerraform(this._srcaddr),
      srcport: cdktf.numberToTerraform(this._srcport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_list: {
        value: cdktf.stringToHclTerraform(this._accessControlList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      dstport: {
        value: cdktf.numberToHclTerraform(this._dstport),
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
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_id: {
        value: cdktf.numberToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      srcport: {
        value: cdktf.numberToHclTerraform(this._srcport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
