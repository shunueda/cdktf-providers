// https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReservedDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of a user-uploaded TLS certificate to use for connections to targeting this domain. Optional, mutually exclusive with `certificate_management_policy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#certificate_id ReservedDomain#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * human-readable description of what this reserved domain will be used for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#description ReservedDomain#description}
  */
  readonly description?: string;
  /**
  * hostname of the reserved domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#domain ReservedDomain#domain}
  */
  readonly domain?: string;
  /**
  * Custom URL with CEL Expression Variable support for redirecting when an ngrok error occurs. Max 10000 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#error_redirect_url ReservedDomain#error_redirect_url}
  */
  readonly errorRedirectUrl?: string;
  /**
  * ID of an endpoint configuration of type http that will be used to handle inbound http traffic to this domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#http_endpoint_configuration_id ReservedDomain#http_endpoint_configuration_id}
  */
  readonly httpEndpointConfigurationId?: string;
  /**
  * ID of an endpoint configuration of type https that will be used to handle inbound https traffic to this domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#https_endpoint_configuration_id ReservedDomain#https_endpoint_configuration_id}
  */
  readonly httpsEndpointConfigurationId?: string;
  /**
  * arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#metadata ReservedDomain#metadata}
  */
  readonly metadata?: string;
  /**
  * the domain name to reserve. It may be a full domain name like app.example.com. If the name does not contain a '.' it will reserve that subdomain on ngrok.io.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#name ReservedDomain#name}
  */
  readonly name?: string;
  /**
  * deprecated: With the launch of the ngrok Global Network domains traffic is now handled globally. This field applied only to endpoints. Note that agents may still connect to specific regions. Optional, null by default. (au, eu, ap, us, jp, in, sa)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#region ReservedDomain#region}
  */
  readonly region?: string;
  /**
  * certificate_management_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#certificate_management_policy ReservedDomain#certificate_management_policy}
  */
  readonly certificateManagementPolicy?: ReservedDomainCertificateManagementPolicy[] | cdktf.IResolvable;
}
export interface ReservedDomainCertificateManagementPolicy {
  /**
  * certificate authority to request certificates from. The only supported value is letsencrypt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#authority ReservedDomain#authority}
  */
  readonly authority?: string;
  /**
  * type of private key to use when requesting certificates. Defaults to ecdsa, can be either rsa or ecdsa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#private_key_type ReservedDomain#private_key_type}
  */
  readonly privateKeyType?: string;
}

export function reservedDomainCertificateManagementPolicyToTerraform(struct?: ReservedDomainCertificateManagementPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    private_key_type: cdktf.stringToTerraform(struct!.privateKeyType),
  }
}


export function reservedDomainCertificateManagementPolicyToHclTerraform(struct?: ReservedDomainCertificateManagementPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: cdktf.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_type: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReservedDomainCertificateManagementPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReservedDomainCertificateManagementPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._privateKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyType = this._privateKeyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReservedDomainCertificateManagementPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._privateKeyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._privateKeyType = value.privateKeyType;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // private_key_type - computed: false, optional: true, required: false
  private _privateKeyType?: string; 
  public get privateKeyType() {
    return this.getStringAttribute('private_key_type');
  }
  public set privateKeyType(value: string) {
    this._privateKeyType = value;
  }
  public resetPrivateKeyType() {
    this._privateKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyTypeInput() {
    return this._privateKeyType;
  }
}

export class ReservedDomainCertificateManagementPolicyList extends cdktf.ComplexList {
  public internalValue? : ReservedDomainCertificateManagementPolicy[] | cdktf.IResolvable

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
  public get(index: number): ReservedDomainCertificateManagementPolicyOutputReference {
    return new ReservedDomainCertificateManagementPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain ngrok_reserved_domain}
*/
export class ReservedDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok_reserved_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReservedDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReservedDomain to import
  * @param importFromId The id of the existing ReservedDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReservedDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok_reserved_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/reserved_domain ngrok_reserved_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReservedDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReservedDomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ngrok_reserved_domain',
      terraformGeneratorMetadata: {
        providerName: 'ngrok',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._description = config.description;
    this._domain = config.domain;
    this._errorRedirectUrl = config.errorRedirectUrl;
    this._httpEndpointConfigurationId = config.httpEndpointConfigurationId;
    this._httpsEndpointConfigurationId = config.httpsEndpointConfigurationId;
    this._metadata = config.metadata;
    this._name = config.name;
    this._region = config.region;
    this._certificateManagementPolicy.internalValue = config.certificateManagementPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acme_challenge_cname_target - computed: true, optional: false, required: false
  public get acmeChallengeCnameTarget() {
    return this.getStringAttribute('acme_challenge_cname_target');
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // cname_target - computed: true, optional: false, required: false
  public get cnameTarget() {
    return this.getStringAttribute('cname_target');
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

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // error_redirect_url - computed: false, optional: true, required: false
  private _errorRedirectUrl?: string; 
  public get errorRedirectUrl() {
    return this.getStringAttribute('error_redirect_url');
  }
  public set errorRedirectUrl(value: string) {
    this._errorRedirectUrl = value;
  }
  public resetErrorRedirectUrl() {
    this._errorRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRedirectUrlInput() {
    return this._errorRedirectUrl;
  }

  // http_endpoint_configuration_id - computed: false, optional: true, required: false
  private _httpEndpointConfigurationId?: string; 
  public get httpEndpointConfigurationId() {
    return this.getStringAttribute('http_endpoint_configuration_id');
  }
  public set httpEndpointConfigurationId(value: string) {
    this._httpEndpointConfigurationId = value;
  }
  public resetHttpEndpointConfigurationId() {
    this._httpEndpointConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointConfigurationIdInput() {
    return this._httpEndpointConfigurationId;
  }

  // https_endpoint_configuration_id - computed: false, optional: true, required: false
  private _httpsEndpointConfigurationId?: string; 
  public get httpsEndpointConfigurationId() {
    return this.getStringAttribute('https_endpoint_configuration_id');
  }
  public set httpsEndpointConfigurationId(value: string) {
    this._httpsEndpointConfigurationId = value;
  }
  public resetHttpsEndpointConfigurationId() {
    this._httpsEndpointConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsEndpointConfigurationIdInput() {
    return this._httpsEndpointConfigurationId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_dev - computed: true, optional: false, required: false
  public get isDev() {
    return this.getBooleanAttribute('is_dev');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // certificate_management_policy - computed: false, optional: true, required: false
  private _certificateManagementPolicy = new ReservedDomainCertificateManagementPolicyList(this, "certificate_management_policy", true);
  public get certificateManagementPolicy() {
    return this._certificateManagementPolicy;
  }
  public putCertificateManagementPolicy(value: ReservedDomainCertificateManagementPolicy[] | cdktf.IResolvable) {
    this._certificateManagementPolicy.internalValue = value;
  }
  public resetCertificateManagementPolicy() {
    this._certificateManagementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagementPolicyInput() {
    return this._certificateManagementPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      error_redirect_url: cdktf.stringToTerraform(this._errorRedirectUrl),
      http_endpoint_configuration_id: cdktf.stringToTerraform(this._httpEndpointConfigurationId),
      https_endpoint_configuration_id: cdktf.stringToTerraform(this._httpsEndpointConfigurationId),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      certificate_management_policy: cdktf.listMapper(reservedDomainCertificateManagementPolicyToTerraform, true)(this._certificateManagementPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_redirect_url: {
        value: cdktf.stringToHclTerraform(this._errorRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_endpoint_configuration_id: {
        value: cdktf.stringToHclTerraform(this._httpEndpointConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_endpoint_configuration_id: {
        value: cdktf.stringToHclTerraform(this._httpsEndpointConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_management_policy: {
        value: cdktf.listMapperHcl(reservedDomainCertificateManagementPolicyToHclTerraform, true)(this._certificateManagementPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReservedDomainCertificateManagementPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
