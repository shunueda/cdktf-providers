// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether apply the changes to all users with this profile after updating or creating the these mappings. 
  * 	~> **WARNING:**: 'always_apply' is incompatible with OAuth 2.0 authentication and will be ignored when using that type of authentication.
  * 	~> **WARNING:** 'always_apply' makes use of an internal/private Okta API endpoint that could change without notice rendering this resource inoperable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#always_apply ProfileMapping#always_apply}
  */
  readonly alwaysApply?: boolean | cdktf.IResolvable;
  /**
  * When turned on this flag will trigger the provider to delete mapping properties that are not defined in config. By default, we do not delete missing properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#delete_when_absent ProfileMapping#delete_when_absent}
  */
  readonly deleteWhenAbsent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#id ProfileMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source id of the mapping to manage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#source_id ProfileMapping#source_id}
  */
  readonly sourceId: string;
  /**
  * The target id of the mapping to manage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#target_id ProfileMapping#target_id}
  */
  readonly targetId: string;
  /**
  * mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#mappings ProfileMapping#mappings}
  */
  readonly mappings?: ProfileMappingMappings[] | cdktf.IResolvable;
}
export interface ProfileMappingMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#expression ProfileMapping#expression}
  */
  readonly expression: string;
  /**
  * The mapping property key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#id ProfileMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#push_status ProfileMapping#push_status}
  */
  readonly pushStatus?: string;
}

export function profileMappingMappingsToTerraform(struct?: ProfileMappingMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    push_status: cdktf.stringToTerraform(struct!.pushStatus),
  }
}


export function profileMappingMappingsToHclTerraform(struct?: ProfileMappingMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    push_status: {
      value: cdktf.stringToHclTerraform(struct!.pushStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileMappingMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProfileMappingMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._pushStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushStatus = this._pushStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileMappingMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._pushStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._id = value.id;
      this._pushStatus = value.pushStatus;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // push_status - computed: false, optional: true, required: false
  private _pushStatus?: string; 
  public get pushStatus() {
    return this.getStringAttribute('push_status');
  }
  public set pushStatus(value: string) {
    this._pushStatus = value;
  }
  public resetPushStatus() {
    this._pushStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushStatusInput() {
    return this._pushStatus;
  }
}

export class ProfileMappingMappingsList extends cdktf.ComplexList {
  public internalValue? : ProfileMappingMappings[] | cdktf.IResolvable

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
  public get(index: number): ProfileMappingMappingsOutputReference {
    return new ProfileMappingMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping okta_profile_mapping}
*/
export class ProfileMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_profile_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileMapping to import
  * @param importFromId The id of the existing ProfileMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_profile_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/profile_mapping okta_profile_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileMappingConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_profile_mapping',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysApply = config.alwaysApply;
    this._deleteWhenAbsent = config.deleteWhenAbsent;
    this._id = config.id;
    this._sourceId = config.sourceId;
    this._targetId = config.targetId;
    this._mappings.internalValue = config.mappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_apply - computed: false, optional: true, required: false
  private _alwaysApply?: boolean | cdktf.IResolvable; 
  public get alwaysApply() {
    return this.getBooleanAttribute('always_apply');
  }
  public set alwaysApply(value: boolean | cdktf.IResolvable) {
    this._alwaysApply = value;
  }
  public resetAlwaysApply() {
    this._alwaysApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysApplyInput() {
    return this._alwaysApply;
  }

  // delete_when_absent - computed: false, optional: true, required: false
  private _deleteWhenAbsent?: boolean | cdktf.IResolvable; 
  public get deleteWhenAbsent() {
    return this.getBooleanAttribute('delete_when_absent');
  }
  public set deleteWhenAbsent(value: boolean | cdktf.IResolvable) {
    this._deleteWhenAbsent = value;
  }
  public resetDeleteWhenAbsent() {
    this._deleteWhenAbsent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWhenAbsentInput() {
    return this._deleteWhenAbsent;
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

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new ProfileMappingMappingsList(this, "mappings", true);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: ProfileMappingMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_apply: cdktf.booleanToTerraform(this._alwaysApply),
      delete_when_absent: cdktf.booleanToTerraform(this._deleteWhenAbsent),
      id: cdktf.stringToTerraform(this._id),
      source_id: cdktf.stringToTerraform(this._sourceId),
      target_id: cdktf.stringToTerraform(this._targetId),
      mappings: cdktf.listMapper(profileMappingMappingsToTerraform, true)(this._mappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_apply: {
        value: cdktf.booleanToHclTerraform(this._alwaysApply),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_when_absent: {
        value: cdktf.booleanToHclTerraform(this._deleteWhenAbsent),
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
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappings: {
        value: cdktf.listMapperHcl(profileMappingMappingsToHclTerraform, true)(this._mappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProfileMappingMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
