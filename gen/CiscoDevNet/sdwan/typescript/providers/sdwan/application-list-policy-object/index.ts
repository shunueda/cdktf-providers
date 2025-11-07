// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_list_policy_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationListPolicyObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_list_policy_object#entries ApplicationListPolicyObject#entries}
  */
  readonly entries: ApplicationListPolicyObjectEntries[] | cdktf.IResolvable;
  /**
  * The name of the policy object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_list_policy_object#name ApplicationListPolicyObject#name}
  */
  readonly name: string;
}
export interface ApplicationListPolicyObjectEntries {
  /**
  * Application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_list_policy_object#application ApplicationListPolicyObject#application}
  */
  readonly application?: string;
  /**
  * Application family name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_list_policy_object#application_family ApplicationListPolicyObject#application_family}
  */
  readonly applicationFamily?: string;
}

export function applicationListPolicyObjectEntriesToTerraform(struct?: ApplicationListPolicyObjectEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    application_family: cdktf.stringToTerraform(struct!.applicationFamily),
  }
}


export function applicationListPolicyObjectEntriesToHclTerraform(struct?: ApplicationListPolicyObjectEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_family: {
      value: cdktf.stringToHclTerraform(struct!.applicationFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationListPolicyObjectEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationListPolicyObjectEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._applicationFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationFamily = this._applicationFamily;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationListPolicyObjectEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._applicationFamily = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._applicationFamily = value.applicationFamily;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // application_family - computed: false, optional: true, required: false
  private _applicationFamily?: string; 
  public get applicationFamily() {
    return this.getStringAttribute('application_family');
  }
  public set applicationFamily(value: string) {
    this._applicationFamily = value;
  }
  public resetApplicationFamily() {
    this._applicationFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFamilyInput() {
    return this._applicationFamily;
  }
}

export class ApplicationListPolicyObjectEntriesList extends cdktf.ComplexList {
  public internalValue? : ApplicationListPolicyObjectEntries[] | cdktf.IResolvable

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
  public get(index: number): ApplicationListPolicyObjectEntriesOutputReference {
    return new ApplicationListPolicyObjectEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_list_policy_object sdwan_application_list_policy_object}
*/
export class ApplicationListPolicyObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_application_list_policy_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationListPolicyObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationListPolicyObject to import
  * @param importFromId The id of the existing ApplicationListPolicyObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_list_policy_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationListPolicyObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_application_list_policy_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_list_policy_object sdwan_application_list_policy_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationListPolicyObjectConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationListPolicyObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_application_list_policy_object',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entries.internalValue = config.entries;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: false, optional: false, required: true
  private _entries = new ApplicationListPolicyObjectEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ApplicationListPolicyObjectEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entries: cdktf.listMapper(applicationListPolicyObjectEntriesToTerraform, false)(this._entries.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entries: {
        value: cdktf.listMapperHcl(applicationListPolicyObjectEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationListPolicyObjectEntriesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
