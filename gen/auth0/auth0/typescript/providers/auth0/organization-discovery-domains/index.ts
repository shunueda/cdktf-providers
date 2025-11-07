// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationDiscoveryDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domains#id OrganizationDiscoveryDomains#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the organization on which to manage the discovery domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domains#organization_id OrganizationDiscoveryDomains#organization_id}
  */
  readonly organizationId: string;
  /**
  * discovery_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domains#discovery_domains OrganizationDiscoveryDomains#discovery_domains}
  */
  readonly discoveryDomains: OrganizationDiscoveryDomainsDiscoveryDomains[] | cdktf.IResolvable;
}
export interface OrganizationDiscoveryDomainsDiscoveryDomains {
  /**
  * The domain name for organization discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domains#domain OrganizationDiscoveryDomains#domain}
  */
  readonly domain: string;
  /**
  * Verification status. Must be either 'pending' or 'verified'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domains#status OrganizationDiscoveryDomains#status}
  */
  readonly status: string;
}

export function organizationDiscoveryDomainsDiscoveryDomainsToTerraform(struct?: OrganizationDiscoveryDomainsDiscoveryDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function organizationDiscoveryDomainsDiscoveryDomainsToHclTerraform(struct?: OrganizationDiscoveryDomainsDiscoveryDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationDiscoveryDomainsDiscoveryDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationDiscoveryDomainsDiscoveryDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationDiscoveryDomainsDiscoveryDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._status = value.status;
    }
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // verification_host - computed: true, optional: false, required: false
  public get verificationHost() {
    return this.getStringAttribute('verification_host');
  }

  // verification_txt - computed: true, optional: false, required: false
  public get verificationTxt() {
    return this.getStringAttribute('verification_txt');
  }
}

export class OrganizationDiscoveryDomainsDiscoveryDomainsList extends cdktf.ComplexList {
  public internalValue? : OrganizationDiscoveryDomainsDiscoveryDomains[] | cdktf.IResolvable

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
  public get(index: number): OrganizationDiscoveryDomainsDiscoveryDomainsOutputReference {
    return new OrganizationDiscoveryDomainsDiscoveryDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domains auth0_organization_discovery_domains}
*/
export class OrganizationDiscoveryDomains extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_organization_discovery_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationDiscoveryDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationDiscoveryDomains to import
  * @param importFromId The id of the existing OrganizationDiscoveryDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationDiscoveryDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_organization_discovery_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domains auth0_organization_discovery_domains} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationDiscoveryDomainsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationDiscoveryDomainsConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_organization_discovery_domains',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
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
    this._organizationId = config.organizationId;
    this._discoveryDomains.internalValue = config.discoveryDomains;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // discovery_domains - computed: false, optional: false, required: true
  private _discoveryDomains = new OrganizationDiscoveryDomainsDiscoveryDomainsList(this, "discovery_domains", true);
  public get discoveryDomains() {
    return this._discoveryDomains;
  }
  public putDiscoveryDomains(value: OrganizationDiscoveryDomainsDiscoveryDomains[] | cdktf.IResolvable) {
    this._discoveryDomains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryDomainsInput() {
    return this._discoveryDomains.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      discovery_domains: cdktf.listMapper(organizationDiscoveryDomainsDiscoveryDomainsToTerraform, true)(this._discoveryDomains.internalValue),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_domains: {
        value: cdktf.listMapperHcl(organizationDiscoveryDomainsDiscoveryDomainsToHclTerraform, true)(this._discoveryDomains.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrganizationDiscoveryDomainsDiscoveryDomainsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
