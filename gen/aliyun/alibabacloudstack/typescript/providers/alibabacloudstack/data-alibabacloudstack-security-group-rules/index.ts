// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackSecurityGroupRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules#direction DataAlibabacloudstackSecurityGroupRules#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules#group_id DataAlibabacloudstackSecurityGroupRules#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules#id DataAlibabacloudstackSecurityGroupRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules#ip_protocol DataAlibabacloudstackSecurityGroupRules#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules#nic_type DataAlibabacloudstackSecurityGroupRules#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules#output_file DataAlibabacloudstackSecurityGroupRules#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules#policy DataAlibabacloudstackSecurityGroupRules#policy}
  */
  readonly policy?: string;
}
export interface DataAlibabacloudstackSecurityGroupRulesRules {
}

export function dataAlibabacloudstackSecurityGroupRulesRulesToTerraform(struct?: DataAlibabacloudstackSecurityGroupRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackSecurityGroupRulesRulesToHclTerraform(struct?: DataAlibabacloudstackSecurityGroupRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackSecurityGroupRulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlibabacloudstackSecurityGroupRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackSecurityGroupRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_cidr_ip - computed: true, optional: false, required: false
  public get destCidrIp() {
    return this.getStringAttribute('dest_cidr_ip');
  }

  // dest_group_id - computed: true, optional: false, required: false
  public get destGroupId() {
    return this.getStringAttribute('dest_group_id');
  }

  // dest_group_owner_account - computed: true, optional: false, required: false
  public get destGroupOwnerAccount() {
    return this.getStringAttribute('dest_group_owner_account');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // nic_type - computed: true, optional: false, required: false
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.getStringAttribute('port_range');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // source_cidr_ip - computed: true, optional: false, required: false
  public get sourceCidrIp() {
    return this.getStringAttribute('source_cidr_ip');
  }

  // source_group_id - computed: true, optional: false, required: false
  public get sourceGroupId() {
    return this.getStringAttribute('source_group_id');
  }

  // source_group_owner_account - computed: true, optional: false, required: false
  public get sourceGroupOwnerAccount() {
    return this.getStringAttribute('source_group_owner_account');
  }
}

export class DataAlibabacloudstackSecurityGroupRulesRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlibabacloudstackSecurityGroupRulesRulesOutputReference {
    return new DataAlibabacloudstackSecurityGroupRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules alibabacloudstack_security_group_rules}
*/
export class DataAlibabacloudstackSecurityGroupRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_security_group_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackSecurityGroupRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackSecurityGroupRules to import
  * @param importFromId The id of the existing DataAlibabacloudstackSecurityGroupRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackSecurityGroupRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_security_group_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/security_group_rules alibabacloudstack_security_group_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackSecurityGroupRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackSecurityGroupRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_security_group_rules',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._direction = config.direction;
    this._groupId = config.groupId;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._nicType = config.nicType;
    this._outputFile = config.outputFile;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // group_desc - computed: true, optional: false, required: false
  public get groupDesc() {
    return this.getStringAttribute('group_desc');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
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

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // nic_type - computed: false, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAlibabacloudstackSecurityGroupRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      nic_type: cdktf.stringToTerraform(this._nicType),
      output_file: cdktf.stringToTerraform(this._outputFile),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nic_type: {
        value: cdktf.stringToHclTerraform(this._nicType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
