// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentitySourceSequenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Do not access other stores in the sequence if a selected identity store cannot be accessed for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence#break_on_store_fail IdentitySourceSequence#break_on_store_fail}
  */
  readonly breakOnStoreFail: boolean | cdktf.IResolvable;
  /**
  * Certificate Authentication Profile, empty if doesn't exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence#certificate_authentication_profile IdentitySourceSequence#certificate_authentication_profile}
  */
  readonly certificateAuthenticationProfile: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence#description IdentitySourceSequence#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence#identity_sources IdentitySourceSequence#identity_sources}
  */
  readonly identitySources: IdentitySourceSequenceIdentitySources[] | cdktf.IResolvable;
  /**
  * The name of the identity source sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence#name IdentitySourceSequence#name}
  */
  readonly name: string;
}
export interface IdentitySourceSequenceIdentitySources {
  /**
  * Name of the identity source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence#name IdentitySourceSequence#name}
  */
  readonly name: string;
  /**
  * Order of the identity source in the sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence#order IdentitySourceSequence#order}
  */
  readonly order: number;
}

export function identitySourceSequenceIdentitySourcesToTerraform(struct?: IdentitySourceSequenceIdentitySources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function identitySourceSequenceIdentitySourcesToHclTerraform(struct?: IdentitySourceSequenceIdentitySources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentitySourceSequenceIdentitySourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentitySourceSequenceIdentitySources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentitySourceSequenceIdentitySources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._order = value.order;
    }
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class IdentitySourceSequenceIdentitySourcesList extends cdktf.ComplexList {
  public internalValue? : IdentitySourceSequenceIdentitySources[] | cdktf.IResolvable

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
  public get(index: number): IdentitySourceSequenceIdentitySourcesOutputReference {
    return new IdentitySourceSequenceIdentitySourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence ise_identity_source_sequence}
*/
export class IdentitySourceSequence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_identity_source_sequence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentitySourceSequence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentitySourceSequence to import
  * @param importFromId The id of the existing IdentitySourceSequence that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentitySourceSequence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_identity_source_sequence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/identity_source_sequence ise_identity_source_sequence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentitySourceSequenceConfig
  */
  public constructor(scope: Construct, id: string, config: IdentitySourceSequenceConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_identity_source_sequence',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._breakOnStoreFail = config.breakOnStoreFail;
    this._certificateAuthenticationProfile = config.certificateAuthenticationProfile;
    this._description = config.description;
    this._identitySources.internalValue = config.identitySources;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // break_on_store_fail - computed: false, optional: false, required: true
  private _breakOnStoreFail?: boolean | cdktf.IResolvable; 
  public get breakOnStoreFail() {
    return this.getBooleanAttribute('break_on_store_fail');
  }
  public set breakOnStoreFail(value: boolean | cdktf.IResolvable) {
    this._breakOnStoreFail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get breakOnStoreFailInput() {
    return this._breakOnStoreFail;
  }

  // certificate_authentication_profile - computed: false, optional: false, required: true
  private _certificateAuthenticationProfile?: string; 
  public get certificateAuthenticationProfile() {
    return this.getStringAttribute('certificate_authentication_profile');
  }
  public set certificateAuthenticationProfile(value: string) {
    this._certificateAuthenticationProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthenticationProfileInput() {
    return this._certificateAuthenticationProfile;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_sources - computed: false, optional: false, required: true
  private _identitySources = new IdentitySourceSequenceIdentitySourcesList(this, "identity_sources", false);
  public get identitySources() {
    return this._identitySources;
  }
  public putIdentitySources(value: IdentitySourceSequenceIdentitySources[] | cdktf.IResolvable) {
    this._identitySources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourcesInput() {
    return this._identitySources.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      break_on_store_fail: cdktf.booleanToTerraform(this._breakOnStoreFail),
      certificate_authentication_profile: cdktf.stringToTerraform(this._certificateAuthenticationProfile),
      description: cdktf.stringToTerraform(this._description),
      identity_sources: cdktf.listMapper(identitySourceSequenceIdentitySourcesToTerraform, false)(this._identitySources.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      break_on_store_fail: {
        value: cdktf.booleanToHclTerraform(this._breakOnStoreFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_authentication_profile: {
        value: cdktf.stringToHclTerraform(this._certificateAuthenticationProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_sources: {
        value: cdktf.listMapperHcl(identitySourceSequenceIdentitySourcesToHclTerraform, false)(this._identitySources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentitySourceSequenceIdentitySourcesList",
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
