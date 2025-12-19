// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NasAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#access_group_name NasAccessRule#access_group_name}
  */
  readonly accessGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#file_system_type NasAccessRule#file_system_type}
  */
  readonly fileSystemType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#id NasAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#ipv6_source_cidr_ip NasAccessRule#ipv6_source_cidr_ip}
  */
  readonly ipv6SourceCidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#priority NasAccessRule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#rw_access_type NasAccessRule#rw_access_type}
  */
  readonly rwAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#source_cidr_ip NasAccessRule#source_cidr_ip}
  */
  readonly sourceCidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#user_access_type NasAccessRule#user_access_type}
  */
  readonly userAccessType?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#timeouts NasAccessRule#timeouts}
  */
  readonly timeouts?: NasAccessRuleTimeouts;
}
export interface NasAccessRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#create NasAccessRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#delete NasAccessRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#update NasAccessRule#update}
  */
  readonly update?: string;
}

export function nasAccessRuleTimeoutsToTerraform(struct?: NasAccessRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function nasAccessRuleTimeoutsToHclTerraform(struct?: NasAccessRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NasAccessRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NasAccessRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NasAccessRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule alicloud_nas_access_rule}
*/
export class NasAccessRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nas_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NasAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NasAccessRule to import
  * @param importFromId The id of the existing NasAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NasAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nas_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/nas_access_rule alicloud_nas_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NasAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NasAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nas_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroupName = config.accessGroupName;
    this._fileSystemType = config.fileSystemType;
    this._id = config.id;
    this._ipv6SourceCidrIp = config.ipv6SourceCidrIp;
    this._priority = config.priority;
    this._rwAccessType = config.rwAccessType;
    this._sourceCidrIp = config.sourceCidrIp;
    this._userAccessType = config.userAccessType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_name - computed: false, optional: false, required: true
  private _accessGroupName?: string; 
  public get accessGroupName() {
    return this.getStringAttribute('access_group_name');
  }
  public set accessGroupName(value: string) {
    this._accessGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupNameInput() {
    return this._accessGroupName;
  }

  // access_rule_id - computed: true, optional: false, required: false
  public get accessRuleId() {
    return this.getStringAttribute('access_rule_id');
  }

  // file_system_type - computed: true, optional: true, required: false
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  public resetFileSystemType() {
    this._fileSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
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

  // ipv6_source_cidr_ip - computed: false, optional: true, required: false
  private _ipv6SourceCidrIp?: string; 
  public get ipv6SourceCidrIp() {
    return this.getStringAttribute('ipv6_source_cidr_ip');
  }
  public set ipv6SourceCidrIp(value: string) {
    this._ipv6SourceCidrIp = value;
  }
  public resetIpv6SourceCidrIp() {
    this._ipv6SourceCidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SourceCidrIpInput() {
    return this._ipv6SourceCidrIp;
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // rw_access_type - computed: true, optional: true, required: false
  private _rwAccessType?: string; 
  public get rwAccessType() {
    return this.getStringAttribute('rw_access_type');
  }
  public set rwAccessType(value: string) {
    this._rwAccessType = value;
  }
  public resetRwAccessType() {
    this._rwAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwAccessTypeInput() {
    return this._rwAccessType;
  }

  // source_cidr_ip - computed: false, optional: true, required: false
  private _sourceCidrIp?: string; 
  public get sourceCidrIp() {
    return this.getStringAttribute('source_cidr_ip');
  }
  public set sourceCidrIp(value: string) {
    this._sourceCidrIp = value;
  }
  public resetSourceCidrIp() {
    this._sourceCidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrIpInput() {
    return this._sourceCidrIp;
  }

  // user_access_type - computed: true, optional: true, required: false
  private _userAccessType?: string; 
  public get userAccessType() {
    return this.getStringAttribute('user_access_type');
  }
  public set userAccessType(value: string) {
    this._userAccessType = value;
  }
  public resetUserAccessType() {
    this._userAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessTypeInput() {
    return this._userAccessType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NasAccessRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NasAccessRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_name: cdktf.stringToTerraform(this._accessGroupName),
      file_system_type: cdktf.stringToTerraform(this._fileSystemType),
      id: cdktf.stringToTerraform(this._id),
      ipv6_source_cidr_ip: cdktf.stringToTerraform(this._ipv6SourceCidrIp),
      priority: cdktf.numberToTerraform(this._priority),
      rw_access_type: cdktf.stringToTerraform(this._rwAccessType),
      source_cidr_ip: cdktf.stringToTerraform(this._sourceCidrIp),
      user_access_type: cdktf.stringToTerraform(this._userAccessType),
      timeouts: nasAccessRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_name: {
        value: cdktf.stringToHclTerraform(this._accessGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_type: {
        value: cdktf.stringToHclTerraform(this._fileSystemType),
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
      ipv6_source_cidr_ip: {
        value: cdktf.stringToHclTerraform(this._ipv6SourceCidrIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rw_access_type: {
        value: cdktf.stringToHclTerraform(this._rwAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_cidr_ip: {
        value: cdktf.stringToHclTerraform(this._sourceCidrIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_access_type: {
        value: cdktf.stringToHclTerraform(this._userAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: nasAccessRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NasAccessRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
