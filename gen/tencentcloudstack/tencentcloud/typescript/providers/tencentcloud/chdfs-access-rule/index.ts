// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChdfsAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * access group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule#access_group_id ChdfsAccessRule#access_group_id}
  */
  readonly accessGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule#id ChdfsAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * access_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule#access_rule ChdfsAccessRule#access_rule}
  */
  readonly accessRule: ChdfsAccessRuleAccessRule;
}
export interface ChdfsAccessRuleAccessRule {
  /**
  * rule access mode, 1: read only, 2: read &amp; wirte.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule#access_mode ChdfsAccessRule#access_mode}
  */
  readonly accessMode?: number;
  /**
  * rule address, IP OR IP SEG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule#address ChdfsAccessRule#address}
  */
  readonly address?: string;
  /**
  * rule priority, range 1 - 100, value less higher priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule#priority ChdfsAccessRule#priority}
  */
  readonly priority?: number;
}

export function chdfsAccessRuleAccessRuleToTerraform(struct?: ChdfsAccessRuleAccessRuleOutputReference | ChdfsAccessRuleAccessRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.numberToTerraform(struct!.accessMode),
    address: cdktf.stringToTerraform(struct!.address),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function chdfsAccessRuleAccessRuleToHclTerraform(struct?: ChdfsAccessRuleAccessRuleOutputReference | ChdfsAccessRuleAccessRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.numberToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChdfsAccessRuleAccessRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChdfsAccessRuleAccessRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChdfsAccessRuleAccessRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessMode = undefined;
      this._address = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessMode = value.accessMode;
      this._address = value.address;
      this._priority = value.priority;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: number; 
  public get accessMode() {
    return this.getNumberAttribute('access_mode');
  }
  public set accessMode(value: number) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // access_rule_id - computed: true, optional: false, required: false
  public get accessRuleId() {
    return this.getNumberAttribute('access_rule_id');
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // priority - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule tencentcloud_chdfs_access_rule}
*/
export class ChdfsAccessRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_chdfs_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChdfsAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChdfsAccessRule to import
  * @param importFromId The id of the existing ChdfsAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChdfsAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_chdfs_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/chdfs_access_rule tencentcloud_chdfs_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChdfsAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ChdfsAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_chdfs_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroupId = config.accessGroupId;
    this._id = config.id;
    this._accessRule.internalValue = config.accessRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_id - computed: false, optional: false, required: true
  private _accessGroupId?: string; 
  public get accessGroupId() {
    return this.getStringAttribute('access_group_id');
  }
  public set accessGroupId(value: string) {
    this._accessGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIdInput() {
    return this._accessGroupId;
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

  // access_rule - computed: false, optional: false, required: true
  private _accessRule = new ChdfsAccessRuleAccessRuleOutputReference(this, "access_rule");
  public get accessRule() {
    return this._accessRule;
  }
  public putAccessRule(value: ChdfsAccessRuleAccessRule) {
    this._accessRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_id: cdktf.stringToTerraform(this._accessGroupId),
      id: cdktf.stringToTerraform(this._id),
      access_rule: chdfsAccessRuleAccessRuleToTerraform(this._accessRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_id: {
        value: cdktf.stringToHclTerraform(this._accessGroupId),
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
      access_rule: {
        value: chdfsAccessRuleAccessRuleToHclTerraform(this._accessRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChdfsAccessRuleAccessRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
