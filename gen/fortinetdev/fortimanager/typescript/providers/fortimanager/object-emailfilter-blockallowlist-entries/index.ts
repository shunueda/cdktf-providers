// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectEmailfilterBlockallowlistEntriesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#action ObjectEmailfilterBlockallowlistEntriesA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#addr_type ObjectEmailfilterBlockallowlistEntriesA#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#adom ObjectEmailfilterBlockallowlistEntriesA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#block_allow_list ObjectEmailfilterBlockallowlistEntriesA#block_allow_list}
  */
  readonly blockAllowList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#email_pattern ObjectEmailfilterBlockallowlistEntriesA#email_pattern}
  */
  readonly emailPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#fosid ObjectEmailfilterBlockallowlistEntriesA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#id ObjectEmailfilterBlockallowlistEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#ip4_subnet ObjectEmailfilterBlockallowlistEntriesA#ip4_subnet}
  */
  readonly ip4Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#ip6_subnet ObjectEmailfilterBlockallowlistEntriesA#ip6_subnet}
  */
  readonly ip6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#pattern ObjectEmailfilterBlockallowlistEntriesA#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#pattern_type ObjectEmailfilterBlockallowlistEntriesA#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#scopetype ObjectEmailfilterBlockallowlistEntriesA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#status ObjectEmailfilterBlockallowlistEntriesA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#type ObjectEmailfilterBlockallowlistEntriesA#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries fortimanager_object_emailfilter_blockallowlist_entries}
*/
export class ObjectEmailfilterBlockallowlistEntriesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_emailfilter_blockallowlist_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectEmailfilterBlockallowlistEntriesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectEmailfilterBlockallowlistEntriesA to import
  * @param importFromId The id of the existing ObjectEmailfilterBlockallowlistEntriesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectEmailfilterBlockallowlistEntriesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_emailfilter_blockallowlist_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_blockallowlist_entries fortimanager_object_emailfilter_blockallowlist_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectEmailfilterBlockallowlistEntriesAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectEmailfilterBlockallowlistEntriesAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_emailfilter_blockallowlist_entries',
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
    this._action = config.action;
    this._addrType = config.addrType;
    this._adom = config.adom;
    this._blockAllowList = config.blockAllowList;
    this._emailPattern = config.emailPattern;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ip4Subnet = config.ip4Subnet;
    this._ip6Subnet = config.ip6Subnet;
    this._pattern = config.pattern;
    this._patternType = config.patternType;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
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

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
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

  // block_allow_list - computed: false, optional: false, required: true
  private _blockAllowList?: string; 
  public get blockAllowList() {
    return this.getStringAttribute('block_allow_list');
  }
  public set blockAllowList(value: string) {
    this._blockAllowList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAllowListInput() {
    return this._blockAllowList;
  }

  // email_pattern - computed: false, optional: true, required: false
  private _emailPattern?: string; 
  public get emailPattern() {
    return this.getStringAttribute('email_pattern');
  }
  public set emailPattern(value: string) {
    this._emailPattern = value;
  }
  public resetEmailPattern() {
    this._emailPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPatternInput() {
    return this._emailPattern;
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

  // ip4_subnet - computed: true, optional: true, required: false
  private _ip4Subnet?: string; 
  public get ip4Subnet() {
    return this.getStringAttribute('ip4_subnet');
  }
  public set ip4Subnet(value: string) {
    this._ip4Subnet = value;
  }
  public resetIp4Subnet() {
    this._ip4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4SubnetInput() {
    return this._ip4Subnet;
  }

  // ip6_subnet - computed: false, optional: true, required: false
  private _ip6Subnet?: string; 
  public get ip6Subnet() {
    return this.getStringAttribute('ip6_subnet');
  }
  public set ip6Subnet(value: string) {
    this._ip6Subnet = value;
  }
  public resetIp6Subnet() {
    this._ip6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SubnetInput() {
    return this._ip6Subnet;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // pattern_type - computed: false, optional: true, required: false
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  public resetPatternType() {
    this._patternType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      addr_type: cdktf.stringToTerraform(this._addrType),
      adom: cdktf.stringToTerraform(this._adom),
      block_allow_list: cdktf.stringToTerraform(this._blockAllowList),
      email_pattern: cdktf.stringToTerraform(this._emailPattern),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ip4_subnet: cdktf.stringToTerraform(this._ip4Subnet),
      ip6_subnet: cdktf.stringToTerraform(this._ip6Subnet),
      pattern: cdktf.stringToTerraform(this._pattern),
      pattern_type: cdktf.stringToTerraform(this._patternType),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
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
      block_allow_list: {
        value: cdktf.stringToHclTerraform(this._blockAllowList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_pattern: {
        value: cdktf.stringToHclTerraform(this._emailPattern),
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
      ip4_subnet: {
        value: cdktf.stringToHclTerraform(this._ip4Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_subnet: {
        value: cdktf.stringToHclTerraform(this._ip6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern_type: {
        value: cdktf.stringToHclTerraform(this._patternType),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
