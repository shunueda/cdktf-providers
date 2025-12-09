// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbL7RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The comparison type for the L7 rule. Available comparison types: "CONTAINS", "STARTS_WITH", "ENDS_WITH", "EQUAL_TO", "REGEX".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#compare_type LbL7Rule#compare_type}
  */
  readonly compareType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#id LbL7Rule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When `true` the logic of the rule is inverted.
  * 
  * For example, with `true`, equal to would become not equal to. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#invert LbL7Rule#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * The key to use for the comparison. For example, the name of the cookie to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#key LbL7Rule#key}
  */
  readonly key?: string;
  /**
  * The ID of the L7 policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#l7policy_id LbL7Rule#l7policy_id}
  */
  readonly l7PolicyId: string;
  /**
  * The uuid of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#project_id LbL7Rule#project_id}
  */
  readonly projectId?: number;
  /**
  * The name of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#project_name LbL7Rule#project_name}
  */
  readonly projectName?: string;
  /**
  * The uuid of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#region_id LbL7Rule#region_id}
  */
  readonly regionId?: number;
  /**
  * The name of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#region_name LbL7Rule#region_name}
  */
  readonly regionName?: string;
  /**
  * A list of simple strings assigned to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#tags LbL7Rule#tags}
  */
  readonly tags?: string[];
  /**
  * The type of the L7 rule. Available types: "COOKIE", "FILE_TYPE", "HEADER", "HOST_NAME", "PATH", "SSL_CONN_HAS_CERT", "SSL_VERIFY_RESULT", "SSL_DN_FIELD".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#type LbL7Rule#type}
  */
  readonly type: string;
  /**
  * The value to use for the comparison. For example, the file type to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#value LbL7Rule#value}
  */
  readonly value: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#timeouts LbL7Rule#timeouts}
  */
  readonly timeouts?: LbL7RuleTimeouts;
}
export interface LbL7RuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#create LbL7Rule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#delete LbL7Rule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#update LbL7Rule#update}
  */
  readonly update?: string;
}

export function lbL7RuleTimeoutsToTerraform(struct?: LbL7RuleTimeouts | cdktf.IResolvable): any {
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


export function lbL7RuleTimeoutsToHclTerraform(struct?: LbL7RuleTimeouts | cdktf.IResolvable): any {
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

export class LbL7RuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbL7RuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbL7RuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule edgecenter_lb_l7rule}
*/
export class LbL7Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_lb_l7rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbL7Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbL7Rule to import
  * @param importFromId The id of the existing LbL7Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbL7Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_lb_l7rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/lb_l7rule edgecenter_lb_l7rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbL7RuleConfig
  */
  public constructor(scope: Construct, id: string, config: LbL7RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_lb_l7rule',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.6',
        providerVersionConstraint: '0.10.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compareType = config.compareType;
    this._id = config.id;
    this._invert = config.invert;
    this._key = config.key;
    this._l7PolicyId = config.l7PolicyId;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._tags = config.tags;
    this._type = config.type;
    this._value = config.value;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compare_type - computed: false, optional: false, required: true
  private _compareType?: string; 
  public get compareType() {
    return this.getStringAttribute('compare_type');
  }
  public set compareType(value: string) {
    this._compareType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareTypeInput() {
    return this._compareType;
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

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // l7policy_id - computed: false, optional: false, required: true
  private _l7PolicyId?: string; 
  public get l7PolicyId() {
    return this.getStringAttribute('l7policy_id');
  }
  public set l7PolicyId(value: string) {
    this._l7PolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l7PolicyIdInput() {
    return this._l7PolicyId;
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // operating_status - computed: true, optional: false, required: false
  public get operatingStatus() {
    return this.getStringAttribute('operating_status');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // region_id - computed: true, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbL7RuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbL7RuleTimeouts) {
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
      compare_type: cdktf.stringToTerraform(this._compareType),
      id: cdktf.stringToTerraform(this._id),
      invert: cdktf.booleanToTerraform(this._invert),
      key: cdktf.stringToTerraform(this._key),
      l7policy_id: cdktf.stringToTerraform(this._l7PolicyId),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      timeouts: lbL7RuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compare_type: {
        value: cdktf.stringToHclTerraform(this._compareType),
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
      invert: {
        value: cdktf.booleanToHclTerraform(this._invert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7policy_id: {
        value: cdktf.stringToHclTerraform(this._l7PolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lbL7RuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbL7RuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
