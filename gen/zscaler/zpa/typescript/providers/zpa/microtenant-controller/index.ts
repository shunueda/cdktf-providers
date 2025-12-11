// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MicrotenantControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The criteria attribute for the Microtenant. The supported value is AuthDomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller#criteria_attribute MicrotenantController#criteria_attribute}
  */
  readonly criteriaAttribute?: string;
  /**
  * The value for the criteria attribute. This is the valid authentication domains configured for a customer (e.g., ExampleAuthDomain.com).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller#criteria_attribute_values MicrotenantController#criteria_attribute_values}
  */
  readonly criteriaAttributeValues?: string[];
  /**
  * The description of the Microtenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller#description MicrotenantController#description}
  */
  readonly description?: string;
  /**
  * Whether or not the Microtenant is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller#enabled MicrotenantController#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the microtenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller#name MicrotenantController#name}
  */
  readonly name: string;
  /**
  * Indicates if Privileged Approvals is enabled (true) for the Microtenant. This allows approval-based access even if no Authentication Domain is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller#privileged_approvals_enabled MicrotenantController#privileged_approvals_enabled}
  */
  readonly privilegedApprovalsEnabled?: boolean | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller#user MicrotenantController#user}
  */
  readonly user?: MicrotenantControllerUser[] | cdktf.IResolvable;
}
export interface MicrotenantControllerUser {
}

export function microtenantControllerUserToTerraform(struct?: MicrotenantControllerUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function microtenantControllerUserToHclTerraform(struct?: MicrotenantControllerUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MicrotenantControllerUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MicrotenantControllerUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MicrotenantControllerUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // microtenant_id - computed: true, optional: false, required: false
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class MicrotenantControllerUserList extends cdktf.ComplexList {
  public internalValue? : MicrotenantControllerUser[] | cdktf.IResolvable

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
  public get(index: number): MicrotenantControllerUserOutputReference {
    return new MicrotenantControllerUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller zpa_microtenant_controller}
*/
export class MicrotenantController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_microtenant_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MicrotenantController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MicrotenantController to import
  * @param importFromId The id of the existing MicrotenantController that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MicrotenantController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_microtenant_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/microtenant_controller zpa_microtenant_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MicrotenantControllerConfig
  */
  public constructor(scope: Construct, id: string, config: MicrotenantControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_microtenant_controller',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._criteriaAttribute = config.criteriaAttribute;
    this._criteriaAttributeValues = config.criteriaAttributeValues;
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._privilegedApprovalsEnabled = config.privilegedApprovalsEnabled;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // criteria_attribute - computed: false, optional: true, required: false
  private _criteriaAttribute?: string; 
  public get criteriaAttribute() {
    return this.getStringAttribute('criteria_attribute');
  }
  public set criteriaAttribute(value: string) {
    this._criteriaAttribute = value;
  }
  public resetCriteriaAttribute() {
    this._criteriaAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaAttributeInput() {
    return this._criteriaAttribute;
  }

  // criteria_attribute_values - computed: true, optional: true, required: false
  private _criteriaAttributeValues?: string[]; 
  public get criteriaAttributeValues() {
    return cdktf.Fn.tolist(this.getListAttribute('criteria_attribute_values'));
  }
  public set criteriaAttributeValues(value: string[]) {
    this._criteriaAttributeValues = value;
  }
  public resetCriteriaAttributeValues() {
    this._criteriaAttributeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaAttributeValuesInput() {
    return this._criteriaAttributeValues;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // privileged_approvals_enabled - computed: false, optional: true, required: false
  private _privilegedApprovalsEnabled?: boolean | cdktf.IResolvable; 
  public get privilegedApprovalsEnabled() {
    return this.getBooleanAttribute('privileged_approvals_enabled');
  }
  public set privilegedApprovalsEnabled(value: boolean | cdktf.IResolvable) {
    this._privilegedApprovalsEnabled = value;
  }
  public resetPrivilegedApprovalsEnabled() {
    this._privilegedApprovalsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedApprovalsEnabledInput() {
    return this._privilegedApprovalsEnabled;
  }

  // user - computed: false, optional: true, required: false
  private _user = new MicrotenantControllerUserList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: MicrotenantControllerUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      criteria_attribute: cdktf.stringToTerraform(this._criteriaAttribute),
      criteria_attribute_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._criteriaAttributeValues),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      privileged_approvals_enabled: cdktf.booleanToTerraform(this._privilegedApprovalsEnabled),
      user: cdktf.listMapper(microtenantControllerUserToTerraform, true)(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      criteria_attribute: {
        value: cdktf.stringToHclTerraform(this._criteriaAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      criteria_attribute_values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._criteriaAttributeValues),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileged_approvals_enabled: {
        value: cdktf.booleanToHclTerraform(this._privilegedApprovalsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user: {
        value: cdktf.listMapperHcl(microtenantControllerUserToHclTerraform, true)(this._user.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MicrotenantControllerUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
