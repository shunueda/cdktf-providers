// https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentIngressConfig extends cdktf.TerraformMetaArguments {
  /**
  * human-readable description of the use of this Agent Ingress. optional, max 255 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress#description AgentIngress#description}
  */
  readonly description?: string;
  /**
  * the domain that you own to be used as the base domain name to generate regional agent ingress domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress#domain AgentIngress#domain}
  */
  readonly domain: string;
  /**
  * arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress#metadata AgentIngress#metadata}
  */
  readonly metadata?: string;
  /**
  * certificate_management_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress#certificate_management_policy AgentIngress#certificate_management_policy}
  */
  readonly certificateManagementPolicy?: AgentIngressCertificateManagementPolicy[] | cdktf.IResolvable;
}
export interface AgentIngressCertificateManagementPolicy {
  /**
  * certificate authority to request certificates from. The only supported value is letsencrypt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress#authority AgentIngress#authority}
  */
  readonly authority?: string;
  /**
  * type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress#private_key_type AgentIngress#private_key_type}
  */
  readonly privateKeyType?: string;
}

export function agentIngressCertificateManagementPolicyToTerraform(struct?: AgentIngressCertificateManagementPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    private_key_type: cdktf.stringToTerraform(struct!.privateKeyType),
  }
}


export function agentIngressCertificateManagementPolicyToHclTerraform(struct?: AgentIngressCertificateManagementPolicy | cdktf.IResolvable): any {
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

export class AgentIngressCertificateManagementPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AgentIngressCertificateManagementPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AgentIngressCertificateManagementPolicy | cdktf.IResolvable | undefined) {
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

export class AgentIngressCertificateManagementPolicyList extends cdktf.ComplexList {
  public internalValue? : AgentIngressCertificateManagementPolicy[] | cdktf.IResolvable

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
  public get(index: number): AgentIngressCertificateManagementPolicyOutputReference {
    return new AgentIngressCertificateManagementPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress ngrok_agent_ingress}
*/
export class AgentIngress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok_agent_ingress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentIngress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentIngress to import
  * @param importFromId The id of the existing AgentIngress that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentIngress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok_agent_ingress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/agent_ingress ngrok_agent_ingress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentIngressConfig
  */
  public constructor(scope: Construct, id: string, config: AgentIngressConfig) {
    super(scope, id, {
      terraformResourceType: 'ngrok_agent_ingress',
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
    this._description = config.description;
    this._domain = config.domain;
    this._metadata = config.metadata;
    this._certificateManagementPolicy.internalValue = config.certificateManagementPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ns_targets - computed: true, optional: false, required: false
  public get nsTargets() {
    return this.getListAttribute('ns_targets');
  }

  // region_domains - computed: true, optional: false, required: false
  public get regionDomains() {
    return this.getListAttribute('region_domains');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // certificate_management_policy - computed: false, optional: true, required: false
  private _certificateManagementPolicy = new AgentIngressCertificateManagementPolicyList(this, "certificate_management_policy", true);
  public get certificateManagementPolicy() {
    return this._certificateManagementPolicy;
  }
  public putCertificateManagementPolicy(value: AgentIngressCertificateManagementPolicy[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      metadata: cdktf.stringToTerraform(this._metadata),
      certificate_management_policy: cdktf.listMapper(agentIngressCertificateManagementPolicyToTerraform, true)(this._certificateManagementPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_management_policy: {
        value: cdktf.listMapperHcl(agentIngressCertificateManagementPolicyToHclTerraform, true)(this._certificateManagementPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentIngressCertificateManagementPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
