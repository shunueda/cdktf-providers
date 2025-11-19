// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ownership_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OwnershipConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ownership_config#id OwnershipConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ownership_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ownership_config#ownership_identifiers OwnershipConfig#ownership_identifiers}
  */
  readonly ownershipIdentifiers: OwnershipConfigOwnershipIdentifiers;
}
export interface OwnershipConfigOwnershipIdentifiersOwnershipIdentifier {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ownership_config#enabled OwnershipConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Key for ownership metadata and tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ownership_config#key OwnershipConfig#key}
  */
  readonly key: string;
}

export function ownershipConfigOwnershipIdentifiersOwnershipIdentifierToTerraform(struct?: OwnershipConfigOwnershipIdentifiersOwnershipIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ownershipConfigOwnershipIdentifiersOwnershipIdentifierToHclTerraform(struct?: OwnershipConfigOwnershipIdentifiersOwnershipIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipConfigOwnershipIdentifiersOwnershipIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OwnershipConfigOwnershipIdentifiersOwnershipIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipConfigOwnershipIdentifiersOwnershipIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._key = value.key;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class OwnershipConfigOwnershipIdentifiersOwnershipIdentifierList extends cdktf.ComplexList {
  public internalValue? : OwnershipConfigOwnershipIdentifiersOwnershipIdentifier[] | cdktf.IResolvable

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
  public get(index: number): OwnershipConfigOwnershipIdentifiersOwnershipIdentifierOutputReference {
    return new OwnershipConfigOwnershipIdentifiersOwnershipIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OwnershipConfigOwnershipIdentifiers {
  /**
  * ownership_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ownership_config#ownership_identifier OwnershipConfig#ownership_identifier}
  */
  readonly ownershipIdentifier: OwnershipConfigOwnershipIdentifiersOwnershipIdentifier[] | cdktf.IResolvable;
}

export function ownershipConfigOwnershipIdentifiersToTerraform(struct?: OwnershipConfigOwnershipIdentifiersOutputReference | OwnershipConfigOwnershipIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ownership_identifier: cdktf.listMapper(ownershipConfigOwnershipIdentifiersOwnershipIdentifierToTerraform, true)(struct!.ownershipIdentifier),
  }
}


export function ownershipConfigOwnershipIdentifiersToHclTerraform(struct?: OwnershipConfigOwnershipIdentifiersOutputReference | OwnershipConfigOwnershipIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ownership_identifier: {
      value: cdktf.listMapperHcl(ownershipConfigOwnershipIdentifiersOwnershipIdentifierToHclTerraform, true)(struct!.ownershipIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "OwnershipConfigOwnershipIdentifiersOwnershipIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipConfigOwnershipIdentifiersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OwnershipConfigOwnershipIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownershipIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownershipIdentifier = this._ownershipIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipConfigOwnershipIdentifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ownershipIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ownershipIdentifier.internalValue = value.ownershipIdentifier;
    }
  }

  // ownership_identifier - computed: false, optional: false, required: true
  private _ownershipIdentifier = new OwnershipConfigOwnershipIdentifiersOwnershipIdentifierList(this, "ownership_identifier", false);
  public get ownershipIdentifier() {
    return this._ownershipIdentifier;
  }
  public putOwnershipIdentifier(value: OwnershipConfigOwnershipIdentifiersOwnershipIdentifier[] | cdktf.IResolvable) {
    this._ownershipIdentifier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipIdentifierInput() {
    return this._ownershipIdentifier.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ownership_config dynatrace_ownership_config}
*/
export class OwnershipConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_ownership_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OwnershipConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OwnershipConfig to import
  * @param importFromId The id of the existing OwnershipConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ownership_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OwnershipConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_ownership_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ownership_config dynatrace_ownership_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OwnershipConfigConfig
  */
  public constructor(scope: Construct, id: string, config: OwnershipConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_ownership_config',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ownershipIdentifiers.internalValue = config.ownershipIdentifiers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ownership_identifiers - computed: false, optional: false, required: true
  private _ownershipIdentifiers = new OwnershipConfigOwnershipIdentifiersOutputReference(this, "ownership_identifiers");
  public get ownershipIdentifiers() {
    return this._ownershipIdentifiers;
  }
  public putOwnershipIdentifiers(value: OwnershipConfigOwnershipIdentifiers) {
    this._ownershipIdentifiers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipIdentifiersInput() {
    return this._ownershipIdentifiers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ownership_identifiers: ownershipConfigOwnershipIdentifiersToTerraform(this._ownershipIdentifiers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownership_identifiers: {
        value: ownershipConfigOwnershipIdentifiersToHclTerraform(this._ownershipIdentifiers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OwnershipConfigOwnershipIdentifiersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
