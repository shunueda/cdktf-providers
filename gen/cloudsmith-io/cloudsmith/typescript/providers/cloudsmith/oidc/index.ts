// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * The claims associated with these provider settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#claims Oidc#claims}
  */
  readonly claims: { [key: string]: string };
  /**
  * Whether the provider settings should be used for incoming OIDC requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#enabled Oidc#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#id Oidc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The claim key whose values dynamically map to service accounts (dynamic providers only). Mutually exclusive with service_accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#mapping_claim Oidc#mapping_claim}
  */
  readonly mappingClaim?: string;
  /**
  * The name of the provider settings are being configured for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#name Oidc#name}
  */
  readonly name: string;
  /**
  * Namespace to which this OIDC config belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#namespace Oidc#namespace}
  */
  readonly namespace: string;
  /**
  * The URL from the provider that serves as the base for the OpenID configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#provider_url Oidc#provider_url}
  */
  readonly providerUrl: string;
  /**
  * The service accounts associated with these provider settings (static providers only). Mutually exclusive with mapping_claim/dynamic_mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#service_accounts Oidc#service_accounts}
  */
  readonly serviceAccounts?: string[];
  /**
  * dynamic_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#dynamic_mappings Oidc#dynamic_mappings}
  */
  readonly dynamicMappings?: OidcDynamicMappings[] | cdktf.IResolvable;
}
export interface OidcDynamicMappings {
  /**
  * The value of the mapping claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#claim_value Oidc#claim_value}
  */
  readonly claimValue: string;
  /**
  * Service account slug mapped to the claim value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#service_account Oidc#service_account}
  */
  readonly serviceAccount: string;
}

export function oidcDynamicMappingsToTerraform(struct?: OidcDynamicMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_value: cdktf.stringToTerraform(struct!.claimValue),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function oidcDynamicMappingsToHclTerraform(struct?: OidcDynamicMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_value: {
      value: cdktf.stringToHclTerraform(struct!.claimValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OidcDynamicMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OidcDynamicMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimValue = this._claimValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OidcDynamicMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimValue = value.claimValue;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // claim_value - computed: false, optional: false, required: true
  private _claimValue?: string; 
  public get claimValue() {
    return this.getStringAttribute('claim_value');
  }
  public set claimValue(value: string) {
    this._claimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValueInput() {
    return this._claimValue;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}

export class OidcDynamicMappingsList extends cdktf.ComplexList {
  public internalValue? : OidcDynamicMappings[] | cdktf.IResolvable

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
  public get(index: number): OidcDynamicMappingsOutputReference {
    return new OidcDynamicMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc cloudsmith_oidc}
*/
export class Oidc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_oidc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Oidc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Oidc to import
  * @param importFromId The id of the existing Oidc that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Oidc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_oidc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/oidc cloudsmith_oidc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OidcConfig
  */
  public constructor(scope: Construct, id: string, config: OidcConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_oidc',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._claims = config.claims;
    this._enabled = config.enabled;
    this._id = config.id;
    this._mappingClaim = config.mappingClaim;
    this._name = config.name;
    this._namespace = config.namespace;
    this._providerUrl = config.providerUrl;
    this._serviceAccounts = config.serviceAccounts;
    this._dynamicMappings.internalValue = config.dynamicMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claims - computed: false, optional: false, required: true
  private _claims?: { [key: string]: string }; 
  public get claims() {
    return this.getStringMapAttribute('claims');
  }
  public set claims(value: { [key: string]: string }) {
    this._claims = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims;
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

  // mapping_claim - computed: false, optional: true, required: false
  private _mappingClaim?: string; 
  public get mappingClaim() {
    return this.getStringAttribute('mapping_claim');
  }
  public set mappingClaim(value: string) {
    this._mappingClaim = value;
  }
  public resetMappingClaim() {
    this._mappingClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingClaimInput() {
    return this._mappingClaim;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // provider_url - computed: false, optional: false, required: true
  private _providerUrl?: string; 
  public get providerUrl() {
    return this.getStringAttribute('provider_url');
  }
  public set providerUrl(value: string) {
    this._providerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerUrlInput() {
    return this._providerUrl;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts?: string[]; 
  public get serviceAccounts() {
    return this.getListAttribute('service_accounts');
  }
  public set serviceAccounts(value: string[]) {
    this._serviceAccounts = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // dynamic_mappings - computed: false, optional: true, required: false
  private _dynamicMappings = new OidcDynamicMappingsList(this, "dynamic_mappings", true);
  public get dynamicMappings() {
    return this._dynamicMappings;
  }
  public putDynamicMappings(value: OidcDynamicMappings[] | cdktf.IResolvable) {
    this._dynamicMappings.internalValue = value;
  }
  public resetDynamicMappings() {
    this._dynamicMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingsInput() {
    return this._dynamicMappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._claims),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      mapping_claim: cdktf.stringToTerraform(this._mappingClaim),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      provider_url: cdktf.stringToTerraform(this._providerUrl),
      service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccounts),
      dynamic_mappings: cdktf.listMapper(oidcDynamicMappingsToTerraform, true)(this._dynamicMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claims: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._claims),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      mapping_claim: {
        value: cdktf.stringToHclTerraform(this._mappingClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_url: {
        value: cdktf.stringToHclTerraform(this._providerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dynamic_mappings: {
        value: cdktf.listMapperHcl(oidcDynamicMappingsToHclTerraform, true)(this._dynamicMappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OidcDynamicMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
