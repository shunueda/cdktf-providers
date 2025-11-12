// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntitlementResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access type or permission level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#access EntitlementResource#access}
  */
  readonly access?: string;
  /**
  * Confidentiality classification level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#confidentiality EntitlementResource#confidentiality}
  */
  readonly confidentiality?: number;
  /**
  * Custom property 1 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty1 EntitlementResource#customproperty1}
  */
  readonly customproperty1?: string;
  /**
  * Custom property 10 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty10 EntitlementResource#customproperty10}
  */
  readonly customproperty10?: string;
  /**
  * Custom property 11 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty11 EntitlementResource#customproperty11}
  */
  readonly customproperty11?: string;
  /**
  * Custom property 12 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty12 EntitlementResource#customproperty12}
  */
  readonly customproperty12?: string;
  /**
  * Custom property 13 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty13 EntitlementResource#customproperty13}
  */
  readonly customproperty13?: string;
  /**
  * Custom property 14 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty14 EntitlementResource#customproperty14}
  */
  readonly customproperty14?: string;
  /**
  * Custom property 15 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty15 EntitlementResource#customproperty15}
  */
  readonly customproperty15?: string;
  /**
  * Custom property 16 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty16 EntitlementResource#customproperty16}
  */
  readonly customproperty16?: string;
  /**
  * Custom property 17 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty17 EntitlementResource#customproperty17}
  */
  readonly customproperty17?: string;
  /**
  * Custom property 18 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty18 EntitlementResource#customproperty18}
  */
  readonly customproperty18?: string;
  /**
  * Custom property 19 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty19 EntitlementResource#customproperty19}
  */
  readonly customproperty19?: string;
  /**
  * Custom property 2 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty2 EntitlementResource#customproperty2}
  */
  readonly customproperty2?: string;
  /**
  * Custom property 20 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty20 EntitlementResource#customproperty20}
  */
  readonly customproperty20?: string;
  /**
  * Custom property 21 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty21 EntitlementResource#customproperty21}
  */
  readonly customproperty21?: string;
  /**
  * Custom property 22 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty22 EntitlementResource#customproperty22}
  */
  readonly customproperty22?: string;
  /**
  * Custom property 23 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty23 EntitlementResource#customproperty23}
  */
  readonly customproperty23?: string;
  /**
  * Custom property 24 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty24 EntitlementResource#customproperty24}
  */
  readonly customproperty24?: string;
  /**
  * Custom property 25 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty25 EntitlementResource#customproperty25}
  */
  readonly customproperty25?: string;
  /**
  * Custom property 26 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty26 EntitlementResource#customproperty26}
  */
  readonly customproperty26?: string;
  /**
  * Custom property 27 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty27 EntitlementResource#customproperty27}
  */
  readonly customproperty27?: string;
  /**
  * Custom property 28 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty28 EntitlementResource#customproperty28}
  */
  readonly customproperty28?: string;
  /**
  * Custom property 29 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty29 EntitlementResource#customproperty29}
  */
  readonly customproperty29?: string;
  /**
  * Custom property 3 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty3 EntitlementResource#customproperty3}
  */
  readonly customproperty3?: string;
  /**
  * Custom property 30 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty30 EntitlementResource#customproperty30}
  */
  readonly customproperty30?: string;
  /**
  * Custom property 31 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty31 EntitlementResource#customproperty31}
  */
  readonly customproperty31?: string;
  /**
  * Custom property 32 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty32 EntitlementResource#customproperty32}
  */
  readonly customproperty32?: string;
  /**
  * Custom property 33 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty33 EntitlementResource#customproperty33}
  */
  readonly customproperty33?: string;
  /**
  * Custom property 34 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty34 EntitlementResource#customproperty34}
  */
  readonly customproperty34?: string;
  /**
  * Custom property 35 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty35 EntitlementResource#customproperty35}
  */
  readonly customproperty35?: string;
  /**
  * Custom property 36 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty36 EntitlementResource#customproperty36}
  */
  readonly customproperty36?: string;
  /**
  * Custom property 37 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty37 EntitlementResource#customproperty37}
  */
  readonly customproperty37?: string;
  /**
  * Custom property 38 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty38 EntitlementResource#customproperty38}
  */
  readonly customproperty38?: string;
  /**
  * Custom property 39 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty39 EntitlementResource#customproperty39}
  */
  readonly customproperty39?: string;
  /**
  * Custom property 4 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty4 EntitlementResource#customproperty4}
  */
  readonly customproperty4?: string;
  /**
  * Custom property 40 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty40 EntitlementResource#customproperty40}
  */
  readonly customproperty40?: string;
  /**
  * Custom property 5 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty5 EntitlementResource#customproperty5}
  */
  readonly customproperty5?: string;
  /**
  * Custom property 6 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty6 EntitlementResource#customproperty6}
  */
  readonly customproperty6?: string;
  /**
  * Custom property 7 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty7 EntitlementResource#customproperty7}
  */
  readonly customproperty7?: string;
  /**
  * Custom property 8 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty8 EntitlementResource#customproperty8}
  */
  readonly customproperty8?: string;
  /**
  * Custom property 9 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#customproperty9 EntitlementResource#customproperty9}
  */
  readonly customproperty9?: string;
  /**
  * Description of the entitlement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#description EntitlementResource#description}
  */
  readonly description?: string;
  /**
  * Display name of the entitlement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#displayname EntitlementResource#displayname}
  */
  readonly displayname?: string;
  /**
  * Name of the endpoint for the entitlement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#endpoint EntitlementResource#endpoint}
  */
  readonly endpoint: string;
  /**
  * Glossary term or explanation for the entitlement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#entitlement_glossary EntitlementResource#entitlement_glossary}
  */
  readonly entitlementGlossary?: string;
  /**
  * Set of entitlement mappings for hierarchical relationships
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#entitlement_map EntitlementResource#entitlement_map}
  */
  readonly entitlementMap?: EntitlementResourceEntitlementMap[] | cdktf.IResolvable;
  /**
  * Map of owner ranks to list of usernames. Use 'rank_1', 'rank_2' etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#entitlement_owners EntitlementResource#entitlement_owners}
  */
  readonly entitlementOwners?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Entitlement type for the entitlement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#entitlement_type EntitlementResource#entitlement_type}
  */
  readonly entitlementType: string;
  /**
  * Value of the entitlement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#entitlement_value EntitlementResource#entitlement_value}
  */
  readonly entitlementValue: string;
  /**
  * Key for the entitlement value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#entitlement_valuekey EntitlementResource#entitlement_valuekey}
  */
  readonly entitlementValuekey?: string;
  /**
  * Functional module the entitlement belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#module EntitlementResource#module}
  */
  readonly module?: string;
  /**
  * Priority level of the entitlement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#priority EntitlementResource#priority}
  */
  readonly priority?: number;
  /**
  * Indicates if the entitlement is privileged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#privileged EntitlementResource#privileged}
  */
  readonly privileged?: number;
  /**
  * Indicates the risk score or level of the entitlement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#risk EntitlementResource#risk}
  */
  readonly risk?: number;
  /**
  * SOX criticality flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#soxcritical EntitlementResource#soxcritical}
  */
  readonly soxcritical?: number;
  /**
  * Status of the entitlement (e.g., active/inactive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#status EntitlementResource#status}
  */
  readonly status?: number;
  /**
  * System criticality flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#syscritical EntitlementResource#syscritical}
  */
  readonly syscritical?: number;
}
export interface EntitlementResourceEntitlementMap {
  /**
  * The endpoint for this mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#endpoint EntitlementResource#endpoint}
  */
  readonly endpoint: string;
  /**
  * The entitlement type to map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#entitlement_type EntitlementResource#entitlement_type}
  */
  readonly entitlementType: string;
  /**
  * The entitlement value to map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#entitlement_value EntitlementResource#entitlement_value}
  */
  readonly entitlementValue: string;
}

export function entitlementResourceEntitlementMapToTerraform(struct?: EntitlementResourceEntitlementMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    entitlement_type: cdktf.stringToTerraform(struct!.entitlementType),
    entitlement_value: cdktf.stringToTerraform(struct!.entitlementValue),
  }
}


export function entitlementResourceEntitlementMapToHclTerraform(struct?: EntitlementResourceEntitlementMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entitlement_type: {
      value: cdktf.stringToHclTerraform(struct!.entitlementType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entitlement_value: {
      value: cdktf.stringToHclTerraform(struct!.entitlementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntitlementResourceEntitlementMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EntitlementResourceEntitlementMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._entitlementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitlementType = this._entitlementType;
    }
    if (this._entitlementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitlementValue = this._entitlementValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntitlementResourceEntitlementMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._entitlementType = undefined;
      this._entitlementValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._entitlementType = value.entitlementType;
      this._entitlementValue = value.entitlementValue;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // entitlement_key - computed: true, optional: false, required: false
  public get entitlementKey() {
    return this.getStringAttribute('entitlement_key');
  }

  // entitlement_type - computed: false, optional: false, required: true
  private _entitlementType?: string; 
  public get entitlementType() {
    return this.getStringAttribute('entitlement_type');
  }
  public set entitlementType(value: string) {
    this._entitlementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementTypeInput() {
    return this._entitlementType;
  }

  // entitlement_value - computed: false, optional: false, required: true
  private _entitlementValue?: string; 
  public get entitlementValue() {
    return this.getStringAttribute('entitlement_value');
  }
  public set entitlementValue(value: string) {
    this._entitlementValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementValueInput() {
    return this._entitlementValue;
  }
}

export class EntitlementResourceEntitlementMapList extends cdktf.ComplexList {
  public internalValue? : EntitlementResourceEntitlementMap[] | cdktf.IResolvable

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
  public get(index: number): EntitlementResourceEntitlementMapOutputReference {
    return new EntitlementResourceEntitlementMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource saviynt_entitlement_resource}
*/
export class EntitlementResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_entitlement_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EntitlementResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntitlementResource to import
  * @param importFromId The id of the existing EntitlementResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntitlementResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_entitlement_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entitlement_resource saviynt_entitlement_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntitlementResourceConfig
  */
  public constructor(scope: Construct, id: string, config: EntitlementResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_entitlement_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
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
    this._access = config.access;
    this._confidentiality = config.confidentiality;
    this._customproperty1 = config.customproperty1;
    this._customproperty10 = config.customproperty10;
    this._customproperty11 = config.customproperty11;
    this._customproperty12 = config.customproperty12;
    this._customproperty13 = config.customproperty13;
    this._customproperty14 = config.customproperty14;
    this._customproperty15 = config.customproperty15;
    this._customproperty16 = config.customproperty16;
    this._customproperty17 = config.customproperty17;
    this._customproperty18 = config.customproperty18;
    this._customproperty19 = config.customproperty19;
    this._customproperty2 = config.customproperty2;
    this._customproperty20 = config.customproperty20;
    this._customproperty21 = config.customproperty21;
    this._customproperty22 = config.customproperty22;
    this._customproperty23 = config.customproperty23;
    this._customproperty24 = config.customproperty24;
    this._customproperty25 = config.customproperty25;
    this._customproperty26 = config.customproperty26;
    this._customproperty27 = config.customproperty27;
    this._customproperty28 = config.customproperty28;
    this._customproperty29 = config.customproperty29;
    this._customproperty3 = config.customproperty3;
    this._customproperty30 = config.customproperty30;
    this._customproperty31 = config.customproperty31;
    this._customproperty32 = config.customproperty32;
    this._customproperty33 = config.customproperty33;
    this._customproperty34 = config.customproperty34;
    this._customproperty35 = config.customproperty35;
    this._customproperty36 = config.customproperty36;
    this._customproperty37 = config.customproperty37;
    this._customproperty38 = config.customproperty38;
    this._customproperty39 = config.customproperty39;
    this._customproperty4 = config.customproperty4;
    this._customproperty40 = config.customproperty40;
    this._customproperty5 = config.customproperty5;
    this._customproperty6 = config.customproperty6;
    this._customproperty7 = config.customproperty7;
    this._customproperty8 = config.customproperty8;
    this._customproperty9 = config.customproperty9;
    this._description = config.description;
    this._displayname = config.displayname;
    this._endpoint = config.endpoint;
    this._entitlementGlossary = config.entitlementGlossary;
    this._entitlementMap.internalValue = config.entitlementMap;
    this._entitlementOwners = config.entitlementOwners;
    this._entitlementType = config.entitlementType;
    this._entitlementValue = config.entitlementValue;
    this._entitlementValuekey = config.entitlementValuekey;
    this._module = config.module;
    this._priority = config.priority;
    this._privileged = config.privileged;
    this._risk = config.risk;
    this._soxcritical = config.soxcritical;
    this._status = config.status;
    this._syscritical = config.syscritical;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // confidentiality - computed: true, optional: true, required: false
  private _confidentiality?: number; 
  public get confidentiality() {
    return this.getNumberAttribute('confidentiality');
  }
  public set confidentiality(value: number) {
    this._confidentiality = value;
  }
  public resetConfidentiality() {
    this._confidentiality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialityInput() {
    return this._confidentiality;
  }

  // customproperty1 - computed: true, optional: true, required: false
  private _customproperty1?: string; 
  public get customproperty1() {
    return this.getStringAttribute('customproperty1');
  }
  public set customproperty1(value: string) {
    this._customproperty1 = value;
  }
  public resetCustomproperty1() {
    this._customproperty1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty1Input() {
    return this._customproperty1;
  }

  // customproperty10 - computed: true, optional: true, required: false
  private _customproperty10?: string; 
  public get customproperty10() {
    return this.getStringAttribute('customproperty10');
  }
  public set customproperty10(value: string) {
    this._customproperty10 = value;
  }
  public resetCustomproperty10() {
    this._customproperty10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty10Input() {
    return this._customproperty10;
  }

  // customproperty11 - computed: true, optional: true, required: false
  private _customproperty11?: string; 
  public get customproperty11() {
    return this.getStringAttribute('customproperty11');
  }
  public set customproperty11(value: string) {
    this._customproperty11 = value;
  }
  public resetCustomproperty11() {
    this._customproperty11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty11Input() {
    return this._customproperty11;
  }

  // customproperty12 - computed: true, optional: true, required: false
  private _customproperty12?: string; 
  public get customproperty12() {
    return this.getStringAttribute('customproperty12');
  }
  public set customproperty12(value: string) {
    this._customproperty12 = value;
  }
  public resetCustomproperty12() {
    this._customproperty12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty12Input() {
    return this._customproperty12;
  }

  // customproperty13 - computed: true, optional: true, required: false
  private _customproperty13?: string; 
  public get customproperty13() {
    return this.getStringAttribute('customproperty13');
  }
  public set customproperty13(value: string) {
    this._customproperty13 = value;
  }
  public resetCustomproperty13() {
    this._customproperty13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty13Input() {
    return this._customproperty13;
  }

  // customproperty14 - computed: true, optional: true, required: false
  private _customproperty14?: string; 
  public get customproperty14() {
    return this.getStringAttribute('customproperty14');
  }
  public set customproperty14(value: string) {
    this._customproperty14 = value;
  }
  public resetCustomproperty14() {
    this._customproperty14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty14Input() {
    return this._customproperty14;
  }

  // customproperty15 - computed: true, optional: true, required: false
  private _customproperty15?: string; 
  public get customproperty15() {
    return this.getStringAttribute('customproperty15');
  }
  public set customproperty15(value: string) {
    this._customproperty15 = value;
  }
  public resetCustomproperty15() {
    this._customproperty15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty15Input() {
    return this._customproperty15;
  }

  // customproperty16 - computed: true, optional: true, required: false
  private _customproperty16?: string; 
  public get customproperty16() {
    return this.getStringAttribute('customproperty16');
  }
  public set customproperty16(value: string) {
    this._customproperty16 = value;
  }
  public resetCustomproperty16() {
    this._customproperty16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty16Input() {
    return this._customproperty16;
  }

  // customproperty17 - computed: true, optional: true, required: false
  private _customproperty17?: string; 
  public get customproperty17() {
    return this.getStringAttribute('customproperty17');
  }
  public set customproperty17(value: string) {
    this._customproperty17 = value;
  }
  public resetCustomproperty17() {
    this._customproperty17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty17Input() {
    return this._customproperty17;
  }

  // customproperty18 - computed: true, optional: true, required: false
  private _customproperty18?: string; 
  public get customproperty18() {
    return this.getStringAttribute('customproperty18');
  }
  public set customproperty18(value: string) {
    this._customproperty18 = value;
  }
  public resetCustomproperty18() {
    this._customproperty18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty18Input() {
    return this._customproperty18;
  }

  // customproperty19 - computed: true, optional: true, required: false
  private _customproperty19?: string; 
  public get customproperty19() {
    return this.getStringAttribute('customproperty19');
  }
  public set customproperty19(value: string) {
    this._customproperty19 = value;
  }
  public resetCustomproperty19() {
    this._customproperty19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty19Input() {
    return this._customproperty19;
  }

  // customproperty2 - computed: true, optional: true, required: false
  private _customproperty2?: string; 
  public get customproperty2() {
    return this.getStringAttribute('customproperty2');
  }
  public set customproperty2(value: string) {
    this._customproperty2 = value;
  }
  public resetCustomproperty2() {
    this._customproperty2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty2Input() {
    return this._customproperty2;
  }

  // customproperty20 - computed: true, optional: true, required: false
  private _customproperty20?: string; 
  public get customproperty20() {
    return this.getStringAttribute('customproperty20');
  }
  public set customproperty20(value: string) {
    this._customproperty20 = value;
  }
  public resetCustomproperty20() {
    this._customproperty20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty20Input() {
    return this._customproperty20;
  }

  // customproperty21 - computed: true, optional: true, required: false
  private _customproperty21?: string; 
  public get customproperty21() {
    return this.getStringAttribute('customproperty21');
  }
  public set customproperty21(value: string) {
    this._customproperty21 = value;
  }
  public resetCustomproperty21() {
    this._customproperty21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty21Input() {
    return this._customproperty21;
  }

  // customproperty22 - computed: true, optional: true, required: false
  private _customproperty22?: string; 
  public get customproperty22() {
    return this.getStringAttribute('customproperty22');
  }
  public set customproperty22(value: string) {
    this._customproperty22 = value;
  }
  public resetCustomproperty22() {
    this._customproperty22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty22Input() {
    return this._customproperty22;
  }

  // customproperty23 - computed: true, optional: true, required: false
  private _customproperty23?: string; 
  public get customproperty23() {
    return this.getStringAttribute('customproperty23');
  }
  public set customproperty23(value: string) {
    this._customproperty23 = value;
  }
  public resetCustomproperty23() {
    this._customproperty23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty23Input() {
    return this._customproperty23;
  }

  // customproperty24 - computed: true, optional: true, required: false
  private _customproperty24?: string; 
  public get customproperty24() {
    return this.getStringAttribute('customproperty24');
  }
  public set customproperty24(value: string) {
    this._customproperty24 = value;
  }
  public resetCustomproperty24() {
    this._customproperty24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty24Input() {
    return this._customproperty24;
  }

  // customproperty25 - computed: true, optional: true, required: false
  private _customproperty25?: string; 
  public get customproperty25() {
    return this.getStringAttribute('customproperty25');
  }
  public set customproperty25(value: string) {
    this._customproperty25 = value;
  }
  public resetCustomproperty25() {
    this._customproperty25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty25Input() {
    return this._customproperty25;
  }

  // customproperty26 - computed: true, optional: true, required: false
  private _customproperty26?: string; 
  public get customproperty26() {
    return this.getStringAttribute('customproperty26');
  }
  public set customproperty26(value: string) {
    this._customproperty26 = value;
  }
  public resetCustomproperty26() {
    this._customproperty26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty26Input() {
    return this._customproperty26;
  }

  // customproperty27 - computed: true, optional: true, required: false
  private _customproperty27?: string; 
  public get customproperty27() {
    return this.getStringAttribute('customproperty27');
  }
  public set customproperty27(value: string) {
    this._customproperty27 = value;
  }
  public resetCustomproperty27() {
    this._customproperty27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty27Input() {
    return this._customproperty27;
  }

  // customproperty28 - computed: true, optional: true, required: false
  private _customproperty28?: string; 
  public get customproperty28() {
    return this.getStringAttribute('customproperty28');
  }
  public set customproperty28(value: string) {
    this._customproperty28 = value;
  }
  public resetCustomproperty28() {
    this._customproperty28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty28Input() {
    return this._customproperty28;
  }

  // customproperty29 - computed: true, optional: true, required: false
  private _customproperty29?: string; 
  public get customproperty29() {
    return this.getStringAttribute('customproperty29');
  }
  public set customproperty29(value: string) {
    this._customproperty29 = value;
  }
  public resetCustomproperty29() {
    this._customproperty29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty29Input() {
    return this._customproperty29;
  }

  // customproperty3 - computed: true, optional: true, required: false
  private _customproperty3?: string; 
  public get customproperty3() {
    return this.getStringAttribute('customproperty3');
  }
  public set customproperty3(value: string) {
    this._customproperty3 = value;
  }
  public resetCustomproperty3() {
    this._customproperty3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty3Input() {
    return this._customproperty3;
  }

  // customproperty30 - computed: true, optional: true, required: false
  private _customproperty30?: string; 
  public get customproperty30() {
    return this.getStringAttribute('customproperty30');
  }
  public set customproperty30(value: string) {
    this._customproperty30 = value;
  }
  public resetCustomproperty30() {
    this._customproperty30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty30Input() {
    return this._customproperty30;
  }

  // customproperty31 - computed: true, optional: true, required: false
  private _customproperty31?: string; 
  public get customproperty31() {
    return this.getStringAttribute('customproperty31');
  }
  public set customproperty31(value: string) {
    this._customproperty31 = value;
  }
  public resetCustomproperty31() {
    this._customproperty31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty31Input() {
    return this._customproperty31;
  }

  // customproperty32 - computed: true, optional: true, required: false
  private _customproperty32?: string; 
  public get customproperty32() {
    return this.getStringAttribute('customproperty32');
  }
  public set customproperty32(value: string) {
    this._customproperty32 = value;
  }
  public resetCustomproperty32() {
    this._customproperty32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty32Input() {
    return this._customproperty32;
  }

  // customproperty33 - computed: true, optional: true, required: false
  private _customproperty33?: string; 
  public get customproperty33() {
    return this.getStringAttribute('customproperty33');
  }
  public set customproperty33(value: string) {
    this._customproperty33 = value;
  }
  public resetCustomproperty33() {
    this._customproperty33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty33Input() {
    return this._customproperty33;
  }

  // customproperty34 - computed: true, optional: true, required: false
  private _customproperty34?: string; 
  public get customproperty34() {
    return this.getStringAttribute('customproperty34');
  }
  public set customproperty34(value: string) {
    this._customproperty34 = value;
  }
  public resetCustomproperty34() {
    this._customproperty34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty34Input() {
    return this._customproperty34;
  }

  // customproperty35 - computed: true, optional: true, required: false
  private _customproperty35?: string; 
  public get customproperty35() {
    return this.getStringAttribute('customproperty35');
  }
  public set customproperty35(value: string) {
    this._customproperty35 = value;
  }
  public resetCustomproperty35() {
    this._customproperty35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty35Input() {
    return this._customproperty35;
  }

  // customproperty36 - computed: true, optional: true, required: false
  private _customproperty36?: string; 
  public get customproperty36() {
    return this.getStringAttribute('customproperty36');
  }
  public set customproperty36(value: string) {
    this._customproperty36 = value;
  }
  public resetCustomproperty36() {
    this._customproperty36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty36Input() {
    return this._customproperty36;
  }

  // customproperty37 - computed: true, optional: true, required: false
  private _customproperty37?: string; 
  public get customproperty37() {
    return this.getStringAttribute('customproperty37');
  }
  public set customproperty37(value: string) {
    this._customproperty37 = value;
  }
  public resetCustomproperty37() {
    this._customproperty37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty37Input() {
    return this._customproperty37;
  }

  // customproperty38 - computed: true, optional: true, required: false
  private _customproperty38?: string; 
  public get customproperty38() {
    return this.getStringAttribute('customproperty38');
  }
  public set customproperty38(value: string) {
    this._customproperty38 = value;
  }
  public resetCustomproperty38() {
    this._customproperty38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty38Input() {
    return this._customproperty38;
  }

  // customproperty39 - computed: true, optional: true, required: false
  private _customproperty39?: string; 
  public get customproperty39() {
    return this.getStringAttribute('customproperty39');
  }
  public set customproperty39(value: string) {
    this._customproperty39 = value;
  }
  public resetCustomproperty39() {
    this._customproperty39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty39Input() {
    return this._customproperty39;
  }

  // customproperty4 - computed: true, optional: true, required: false
  private _customproperty4?: string; 
  public get customproperty4() {
    return this.getStringAttribute('customproperty4');
  }
  public set customproperty4(value: string) {
    this._customproperty4 = value;
  }
  public resetCustomproperty4() {
    this._customproperty4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty4Input() {
    return this._customproperty4;
  }

  // customproperty40 - computed: true, optional: true, required: false
  private _customproperty40?: string; 
  public get customproperty40() {
    return this.getStringAttribute('customproperty40');
  }
  public set customproperty40(value: string) {
    this._customproperty40 = value;
  }
  public resetCustomproperty40() {
    this._customproperty40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty40Input() {
    return this._customproperty40;
  }

  // customproperty5 - computed: true, optional: true, required: false
  private _customproperty5?: string; 
  public get customproperty5() {
    return this.getStringAttribute('customproperty5');
  }
  public set customproperty5(value: string) {
    this._customproperty5 = value;
  }
  public resetCustomproperty5() {
    this._customproperty5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty5Input() {
    return this._customproperty5;
  }

  // customproperty6 - computed: true, optional: true, required: false
  private _customproperty6?: string; 
  public get customproperty6() {
    return this.getStringAttribute('customproperty6');
  }
  public set customproperty6(value: string) {
    this._customproperty6 = value;
  }
  public resetCustomproperty6() {
    this._customproperty6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty6Input() {
    return this._customproperty6;
  }

  // customproperty7 - computed: true, optional: true, required: false
  private _customproperty7?: string; 
  public get customproperty7() {
    return this.getStringAttribute('customproperty7');
  }
  public set customproperty7(value: string) {
    this._customproperty7 = value;
  }
  public resetCustomproperty7() {
    this._customproperty7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty7Input() {
    return this._customproperty7;
  }

  // customproperty8 - computed: true, optional: true, required: false
  private _customproperty8?: string; 
  public get customproperty8() {
    return this.getStringAttribute('customproperty8');
  }
  public set customproperty8(value: string) {
    this._customproperty8 = value;
  }
  public resetCustomproperty8() {
    this._customproperty8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty8Input() {
    return this._customproperty8;
  }

  // customproperty9 - computed: true, optional: true, required: false
  private _customproperty9?: string; 
  public get customproperty9() {
    return this.getStringAttribute('customproperty9');
  }
  public set customproperty9(value: string) {
    this._customproperty9 = value;
  }
  public resetCustomproperty9() {
    this._customproperty9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customproperty9Input() {
    return this._customproperty9;
  }

  // description - computed: true, optional: true, required: false
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

  // displayname - computed: true, optional: true, required: false
  private _displayname?: string; 
  public get displayname() {
    return this.getStringAttribute('displayname');
  }
  public set displayname(value: string) {
    this._displayname = value;
  }
  public resetDisplayname() {
    this._displayname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaynameInput() {
    return this._displayname;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // entitlement_glossary - computed: true, optional: true, required: false
  private _entitlementGlossary?: string; 
  public get entitlementGlossary() {
    return this.getStringAttribute('entitlement_glossary');
  }
  public set entitlementGlossary(value: string) {
    this._entitlementGlossary = value;
  }
  public resetEntitlementGlossary() {
    this._entitlementGlossary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementGlossaryInput() {
    return this._entitlementGlossary;
  }

  // entitlement_map - computed: false, optional: true, required: false
  private _entitlementMap = new EntitlementResourceEntitlementMapList(this, "entitlement_map", true);
  public get entitlementMap() {
    return this._entitlementMap;
  }
  public putEntitlementMap(value: EntitlementResourceEntitlementMap[] | cdktf.IResolvable) {
    this._entitlementMap.internalValue = value;
  }
  public resetEntitlementMap() {
    this._entitlementMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementMapInput() {
    return this._entitlementMap.internalValue;
  }

  // entitlement_owners - computed: false, optional: true, required: false
  private _entitlementOwners?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get entitlementOwners() {
    return this.interpolationForAttribute('entitlement_owners');
  }
  public set entitlementOwners(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._entitlementOwners = value;
  }
  public resetEntitlementOwners() {
    this._entitlementOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementOwnersInput() {
    return this._entitlementOwners;
  }

  // entitlement_type - computed: false, optional: false, required: true
  private _entitlementType?: string; 
  public get entitlementType() {
    return this.getStringAttribute('entitlement_type');
  }
  public set entitlementType(value: string) {
    this._entitlementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementTypeInput() {
    return this._entitlementType;
  }

  // entitlement_value - computed: false, optional: false, required: true
  private _entitlementValue?: string; 
  public get entitlementValue() {
    return this.getStringAttribute('entitlement_value');
  }
  public set entitlementValue(value: string) {
    this._entitlementValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementValueInput() {
    return this._entitlementValue;
  }

  // entitlement_valuekey - computed: true, optional: true, required: false
  private _entitlementValuekey?: string; 
  public get entitlementValuekey() {
    return this.getStringAttribute('entitlement_valuekey');
  }
  public set entitlementValuekey(value: string) {
    this._entitlementValuekey = value;
  }
  public resetEntitlementValuekey() {
    this._entitlementValuekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementValuekeyInput() {
    return this._entitlementValuekey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // module - computed: true, optional: true, required: false
  private _module?: string; 
  public get module() {
    return this.getStringAttribute('module');
  }
  public set module(value: string) {
    this._module = value;
  }
  public resetModule() {
    this._module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // priority - computed: true, optional: true, required: false
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

  // privileged - computed: true, optional: true, required: false
  private _privileged?: number; 
  public get privileged() {
    return this.getNumberAttribute('privileged');
  }
  public set privileged(value: number) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // risk - computed: true, optional: true, required: false
  private _risk?: number; 
  public get risk() {
    return this.getNumberAttribute('risk');
  }
  public set risk(value: number) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // soxcritical - computed: true, optional: true, required: false
  private _soxcritical?: number; 
  public get soxcritical() {
    return this.getNumberAttribute('soxcritical');
  }
  public set soxcritical(value: number) {
    this._soxcritical = value;
  }
  public resetSoxcritical() {
    this._soxcritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soxcriticalInput() {
    return this._soxcritical;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // syscritical - computed: true, optional: true, required: false
  private _syscritical?: number; 
  public get syscritical() {
    return this.getNumberAttribute('syscritical');
  }
  public set syscritical(value: number) {
    this._syscritical = value;
  }
  public resetSyscritical() {
    this._syscritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syscriticalInput() {
    return this._syscritical;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      confidentiality: cdktf.numberToTerraform(this._confidentiality),
      customproperty1: cdktf.stringToTerraform(this._customproperty1),
      customproperty10: cdktf.stringToTerraform(this._customproperty10),
      customproperty11: cdktf.stringToTerraform(this._customproperty11),
      customproperty12: cdktf.stringToTerraform(this._customproperty12),
      customproperty13: cdktf.stringToTerraform(this._customproperty13),
      customproperty14: cdktf.stringToTerraform(this._customproperty14),
      customproperty15: cdktf.stringToTerraform(this._customproperty15),
      customproperty16: cdktf.stringToTerraform(this._customproperty16),
      customproperty17: cdktf.stringToTerraform(this._customproperty17),
      customproperty18: cdktf.stringToTerraform(this._customproperty18),
      customproperty19: cdktf.stringToTerraform(this._customproperty19),
      customproperty2: cdktf.stringToTerraform(this._customproperty2),
      customproperty20: cdktf.stringToTerraform(this._customproperty20),
      customproperty21: cdktf.stringToTerraform(this._customproperty21),
      customproperty22: cdktf.stringToTerraform(this._customproperty22),
      customproperty23: cdktf.stringToTerraform(this._customproperty23),
      customproperty24: cdktf.stringToTerraform(this._customproperty24),
      customproperty25: cdktf.stringToTerraform(this._customproperty25),
      customproperty26: cdktf.stringToTerraform(this._customproperty26),
      customproperty27: cdktf.stringToTerraform(this._customproperty27),
      customproperty28: cdktf.stringToTerraform(this._customproperty28),
      customproperty29: cdktf.stringToTerraform(this._customproperty29),
      customproperty3: cdktf.stringToTerraform(this._customproperty3),
      customproperty30: cdktf.stringToTerraform(this._customproperty30),
      customproperty31: cdktf.stringToTerraform(this._customproperty31),
      customproperty32: cdktf.stringToTerraform(this._customproperty32),
      customproperty33: cdktf.stringToTerraform(this._customproperty33),
      customproperty34: cdktf.stringToTerraform(this._customproperty34),
      customproperty35: cdktf.stringToTerraform(this._customproperty35),
      customproperty36: cdktf.stringToTerraform(this._customproperty36),
      customproperty37: cdktf.stringToTerraform(this._customproperty37),
      customproperty38: cdktf.stringToTerraform(this._customproperty38),
      customproperty39: cdktf.stringToTerraform(this._customproperty39),
      customproperty4: cdktf.stringToTerraform(this._customproperty4),
      customproperty40: cdktf.stringToTerraform(this._customproperty40),
      customproperty5: cdktf.stringToTerraform(this._customproperty5),
      customproperty6: cdktf.stringToTerraform(this._customproperty6),
      customproperty7: cdktf.stringToTerraform(this._customproperty7),
      customproperty8: cdktf.stringToTerraform(this._customproperty8),
      customproperty9: cdktf.stringToTerraform(this._customproperty9),
      description: cdktf.stringToTerraform(this._description),
      displayname: cdktf.stringToTerraform(this._displayname),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      entitlement_glossary: cdktf.stringToTerraform(this._entitlementGlossary),
      entitlement_map: cdktf.listMapper(entitlementResourceEntitlementMapToTerraform, false)(this._entitlementMap.internalValue),
      entitlement_owners: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._entitlementOwners),
      entitlement_type: cdktf.stringToTerraform(this._entitlementType),
      entitlement_value: cdktf.stringToTerraform(this._entitlementValue),
      entitlement_valuekey: cdktf.stringToTerraform(this._entitlementValuekey),
      module: cdktf.stringToTerraform(this._module),
      priority: cdktf.numberToTerraform(this._priority),
      privileged: cdktf.numberToTerraform(this._privileged),
      risk: cdktf.numberToTerraform(this._risk),
      soxcritical: cdktf.numberToTerraform(this._soxcritical),
      status: cdktf.numberToTerraform(this._status),
      syscritical: cdktf.numberToTerraform(this._syscritical),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidentiality: {
        value: cdktf.numberToHclTerraform(this._confidentiality),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      customproperty1: {
        value: cdktf.stringToHclTerraform(this._customproperty1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty10: {
        value: cdktf.stringToHclTerraform(this._customproperty10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty11: {
        value: cdktf.stringToHclTerraform(this._customproperty11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty12: {
        value: cdktf.stringToHclTerraform(this._customproperty12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty13: {
        value: cdktf.stringToHclTerraform(this._customproperty13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty14: {
        value: cdktf.stringToHclTerraform(this._customproperty14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty15: {
        value: cdktf.stringToHclTerraform(this._customproperty15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty16: {
        value: cdktf.stringToHclTerraform(this._customproperty16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty17: {
        value: cdktf.stringToHclTerraform(this._customproperty17),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty18: {
        value: cdktf.stringToHclTerraform(this._customproperty18),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty19: {
        value: cdktf.stringToHclTerraform(this._customproperty19),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty2: {
        value: cdktf.stringToHclTerraform(this._customproperty2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty20: {
        value: cdktf.stringToHclTerraform(this._customproperty20),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty21: {
        value: cdktf.stringToHclTerraform(this._customproperty21),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty22: {
        value: cdktf.stringToHclTerraform(this._customproperty22),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty23: {
        value: cdktf.stringToHclTerraform(this._customproperty23),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty24: {
        value: cdktf.stringToHclTerraform(this._customproperty24),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty25: {
        value: cdktf.stringToHclTerraform(this._customproperty25),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty26: {
        value: cdktf.stringToHclTerraform(this._customproperty26),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty27: {
        value: cdktf.stringToHclTerraform(this._customproperty27),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty28: {
        value: cdktf.stringToHclTerraform(this._customproperty28),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty29: {
        value: cdktf.stringToHclTerraform(this._customproperty29),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty3: {
        value: cdktf.stringToHclTerraform(this._customproperty3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty30: {
        value: cdktf.stringToHclTerraform(this._customproperty30),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty31: {
        value: cdktf.stringToHclTerraform(this._customproperty31),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty32: {
        value: cdktf.stringToHclTerraform(this._customproperty32),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty33: {
        value: cdktf.stringToHclTerraform(this._customproperty33),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty34: {
        value: cdktf.stringToHclTerraform(this._customproperty34),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty35: {
        value: cdktf.stringToHclTerraform(this._customproperty35),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty36: {
        value: cdktf.stringToHclTerraform(this._customproperty36),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty37: {
        value: cdktf.stringToHclTerraform(this._customproperty37),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty38: {
        value: cdktf.stringToHclTerraform(this._customproperty38),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty39: {
        value: cdktf.stringToHclTerraform(this._customproperty39),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty4: {
        value: cdktf.stringToHclTerraform(this._customproperty4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty40: {
        value: cdktf.stringToHclTerraform(this._customproperty40),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty5: {
        value: cdktf.stringToHclTerraform(this._customproperty5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty6: {
        value: cdktf.stringToHclTerraform(this._customproperty6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty7: {
        value: cdktf.stringToHclTerraform(this._customproperty7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty8: {
        value: cdktf.stringToHclTerraform(this._customproperty8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customproperty9: {
        value: cdktf.stringToHclTerraform(this._customproperty9),
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
      displayname: {
        value: cdktf.stringToHclTerraform(this._displayname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_glossary: {
        value: cdktf.stringToHclTerraform(this._entitlementGlossary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_map: {
        value: cdktf.listMapperHcl(entitlementResourceEntitlementMapToHclTerraform, false)(this._entitlementMap.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EntitlementResourceEntitlementMapList",
      },
      entitlement_owners: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._entitlementOwners),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      entitlement_type: {
        value: cdktf.stringToHclTerraform(this._entitlementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_value: {
        value: cdktf.stringToHclTerraform(this._entitlementValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_valuekey: {
        value: cdktf.stringToHclTerraform(this._entitlementValuekey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module: {
        value: cdktf.stringToHclTerraform(this._module),
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
      privileged: {
        value: cdktf.numberToHclTerraform(this._privileged),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      risk: {
        value: cdktf.numberToHclTerraform(this._risk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soxcritical: {
        value: cdktf.numberToHclTerraform(this._soxcritical),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syscritical: {
        value: cdktf.numberToHclTerraform(this._syscritical),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
