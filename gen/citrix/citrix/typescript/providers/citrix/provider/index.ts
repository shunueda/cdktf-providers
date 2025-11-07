// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CitrixProviderConfig {
  /**
  * Configuration for CVAD service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#cvad_config CitrixProvider#cvad_config}
  */
  readonly cvadConfig?: CitrixProviderCvadConfig;
  /**
  * StoreFront Remote Host for Citrix DaaS service. <br />Only applicable for Citrix on-premises StoreFront. Use this to specify StoreFront Remote Host. <br />
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#storefront_remote_host CitrixProvider#storefront_remote_host}
  */
  readonly storefrontRemoteHost?: CitrixProviderStorefrontRemoteHost;
  /**
  * Configuration for WEM on-premises service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#wem_on_prem_config CitrixProvider#wem_on_prem_config}
  */
  readonly wemOnPremConfig?: CitrixProviderWemOnPremConfig;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#alias CitrixProvider#alias}
  */
  readonly alias?: string;
}
export interface CitrixProviderCvadConfig {
  /**
  * Client Id for Citrix DaaS service authentication. 
  * For Citrix On-Premises customers: Use this to specify a DDC administrator username. 
  * For Citrix Cloud customers: Use this to specify Cloud API Key Client Id.
  * 
  * -> **Note** Can be set via Environment Variable **CITRIX_CLIENT_ID**.
  * 
  * ~> **Please Note** This parameter is required to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#client_id CitrixProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Client Secret for Citrix DaaS service authentication. 
  * For Citrix on-premises customers: Use this to specify a DDC administrator password. 
  * For Citrix Cloud customers: Use this to specify Cloud API Key Client Secret.
  * 
  * -> **Note** Can be set via Environment Variable **CITRIX_CLIENT_SECRET**.
  * 
  * ~> **Please Note** This parameter is required to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#client_secret CitrixProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The Citrix Cloud customer ID.
  * 
  * -> **Note** Can be set via Environment Variable **CITRIX_CUSTOMER_ID**.
  * 
  * ~> **Please Note** This parameter is required for Citrix Cloud customers to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#customer_id CitrixProvider#customer_id}
  */
  readonly customerId?: string;
  /**
  * Disable Citrix DaaS client setup. 
  * Set to true to skip Citrix DaaS client setup. 
  * 
  * -> **Note** Can be set via Environment Variable **CITRIX_DISABLE_DAAS_CLIENT**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#disable_daas_client CitrixProvider#disable_daas_client}
  */
  readonly disableDaasClient?: boolean | cdktf.IResolvable;
  /**
  * Disable SSL verification against the target DDC. 
  * Set to true to skip SSL verification only when the target DDC does not have a valid SSL certificate issued by a trusted CA. 
  * When set to true, please make sure that your provider config is set for a known DDC hostname. 
  * 
  * -> **Note** Can be set via Environment Variable **CITRIX_DISABLE_SSL_VERIFICATION**.
  * 
  * ~> **Please Note** [It is recommended to configure a valid certificate for the target DDC](https://docs.citrix.com/en-us/citrix-virtual-apps-desktops/install-configure/install-core/secure-web-studio-deployment) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#disable_ssl_verification CitrixProvider#disable_ssl_verification}
  */
  readonly disableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Citrix Cloud environment of the customer. Available options: `Production`, `Staging`, `Japan`, `JapanStaging`, `Gov`, `GovStaging`. 
  * 
  * -> **Note** Can be set via Environment Variable **CITRIX_ENVIRONMENT**.
  * 
  * ~> **Please Note** Only applicable for Citrix Cloud customers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#environment CitrixProvider#environment}
  */
  readonly environment?: string;
  /**
  * Host name / base URL of Citrix DaaS service. 
  * For Citrix on-premises customers: Use this to specify Delivery Controller hostname. 
  * For Citrix Cloud customers: Use this to force override the Citrix DaaS service hostname.
  * 
  * -> **Note** Can be set via Environment Variable **CITRIX_HOSTNAME**.
  * 
  * ~> **Please Note** This parameter is required for on-premises customers to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#hostname CitrixProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * WEM Hosting Region of the Citrix Cloud customer. Available values are `US`, `EU`, and `APS`.
  * 
  * -> **Note** Can be set via Environment Variable **CITRIX_WEM_REGION**.
  * 
  * ~> **Please Note** Only applicable for Citrix Workspace Environment Management (WEM) Cloud customers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#wem_region CitrixProvider#wem_region}
  */
  readonly wemRegion?: string;
}

export function citrixProviderCvadConfigToTerraform(struct?: CitrixProviderCvadConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    customer_id: cdktf.stringToTerraform(struct!.customerId),
    disable_daas_client: cdktf.booleanToTerraform(struct!.disableDaasClient),
    disable_ssl_verification: cdktf.booleanToTerraform(struct!.disableSslVerification),
    environment: cdktf.stringToTerraform(struct!.environment),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    wem_region: cdktf.stringToTerraform(struct!.wemRegion),
  }
}


export function citrixProviderCvadConfigToHclTerraform(struct?: CitrixProviderCvadConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_id: {
      value: cdktf.stringToHclTerraform(struct!.customerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_daas_client: {
      value: cdktf.booleanToHclTerraform(struct!.disableDaasClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_ssl_verification: {
      value: cdktf.booleanToHclTerraform(struct!.disableSslVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wem_region: {
      value: cdktf.stringToHclTerraform(struct!.wemRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface CitrixProviderStorefrontRemoteHost {
  /**
  * Active Directory Admin Password to connect to storefront server <br />Use this to specify AD admin password<br />Can be set via Environment Variable **SF_AD_ADMIN_PASSWORD**.<br />This parameter is **required** to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#ad_admin_password CitrixProvider#ad_admin_password}
  */
  readonly adAdminPassword?: string;
  /**
  * Active Directory Admin Username to connect to storefront server <br />Use this to specify AD admin username <br />Can be set via Environment Variable **SF_AD_ADMIN_USERNAME**.<br />This parameter is **required** to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#ad_admin_username CitrixProvider#ad_admin_username}
  */
  readonly adAdminUsername?: string;
  /**
  * StoreFront server computer Name <br />Use this to specify StoreFront server computer name <br />Can be set via Environment Variable **SF_COMPUTER_NAME**.<br />This parameter is **required** to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#computer_name CitrixProvider#computer_name}
  */
  readonly computerName?: string;
  /**
  * Disable SSL verification against the target storefront server. <br />Only applicable to customers connecting to storefront server remotely. Customers should omit this option when running storefront provider locally. Set to true to skip SSL verification only when the target DDC does not have a valid SSL certificate issued by a trusted CA. <br />When set to true, please make sure that your provider storefront_remote_host is set for a known storefront hostname. <br />Can be set via Environment Variable **SF_DISABLE_SSL_VERIFICATION**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#disable_ssl_verification CitrixProvider#disable_ssl_verification}
  */
  readonly disableSslVerification?: boolean | cdktf.IResolvable;
}

export function citrixProviderStorefrontRemoteHostToTerraform(struct?: CitrixProviderStorefrontRemoteHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_admin_password: cdktf.stringToTerraform(struct!.adAdminPassword),
    ad_admin_username: cdktf.stringToTerraform(struct!.adAdminUsername),
    computer_name: cdktf.stringToTerraform(struct!.computerName),
    disable_ssl_verification: cdktf.booleanToTerraform(struct!.disableSslVerification),
  }
}


export function citrixProviderStorefrontRemoteHostToHclTerraform(struct?: CitrixProviderStorefrontRemoteHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adAdminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ad_admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adAdminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    computer_name: {
      value: cdktf.stringToHclTerraform(struct!.computerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_ssl_verification: {
      value: cdktf.booleanToHclTerraform(struct!.disableSslVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface CitrixProviderWemOnPremConfig {
  /**
  * WEM Admin Password to connect to WEM service <br />Use this to specify WEM admin password<br />Can be set via Environment Variable **WEM_ADMIN_PASSWORD**.<br />This parameter is **required** to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#admin_password CitrixProvider#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * WEM Admin Username to connect to WEM service <br />Use this to specify WEM admin username <br />Can be set via Environment Variable **WEM_ADMIN_USERNAME**.<br />This parameter is **required** to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#admin_username CitrixProvider#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Disable SSL verification against the target WEM service. <br />Set to true to skip SSL verification only when the target WEM service does not have a valid SSL certificate issued by a trusted CA. <br />When set to true, please make sure that your provider config is set for a known WEM hostname. <br />Can be set via Environment Variable **WEM_DISABLE_SSL_VERIFICATION**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#disable_ssl_verification CitrixProvider#disable_ssl_verification}
  */
  readonly disableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Name of server hosting Citrix WEM service. <br />Use this to specify WEM service hostname. <br />Can be set via Environment Variable **WEM_HOSTNAME**.<br />This parameter is **required** to be specified in the provider configuration or via environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#hostname CitrixProvider#hostname}
  */
  readonly hostname?: string;
}

export function citrixProviderWemOnPremConfigToTerraform(struct?: CitrixProviderWemOnPremConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    disable_ssl_verification: cdktf.booleanToTerraform(struct!.disableSslVerification),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function citrixProviderWemOnPremConfigToHclTerraform(struct?: CitrixProviderWemOnPremConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_ssl_verification: {
      value: cdktf.booleanToHclTerraform(struct!.disableSslVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs citrix}
*/
export class CitrixProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CitrixProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CitrixProvider to import
  * @param importFromId The id of the existing CitrixProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CitrixProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs citrix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CitrixProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CitrixProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      terraformProviderSource: 'citrix/citrix'
    });
    this._cvadConfig = config.cvadConfig;
    this._storefrontRemoteHost = config.storefrontRemoteHost;
    this._wemOnPremConfig = config.wemOnPremConfig;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cvad_config - computed: false, optional: true, required: false
  private _cvadConfig?: CitrixProviderCvadConfig; 
  public get cvadConfig() {
    return this._cvadConfig;
  }
  public set cvadConfig(value: CitrixProviderCvadConfig | undefined) {
    this._cvadConfig = value;
  }
  public resetCvadConfig() {
    this._cvadConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvadConfigInput() {
    return this._cvadConfig;
  }

  // storefront_remote_host - computed: false, optional: true, required: false
  private _storefrontRemoteHost?: CitrixProviderStorefrontRemoteHost; 
  public get storefrontRemoteHost() {
    return this._storefrontRemoteHost;
  }
  public set storefrontRemoteHost(value: CitrixProviderStorefrontRemoteHost | undefined) {
    this._storefrontRemoteHost = value;
  }
  public resetStorefrontRemoteHost() {
    this._storefrontRemoteHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storefrontRemoteHostInput() {
    return this._storefrontRemoteHost;
  }

  // wem_on_prem_config - computed: false, optional: true, required: false
  private _wemOnPremConfig?: CitrixProviderWemOnPremConfig; 
  public get wemOnPremConfig() {
    return this._wemOnPremConfig;
  }
  public set wemOnPremConfig(value: CitrixProviderWemOnPremConfig | undefined) {
    this._wemOnPremConfig = value;
  }
  public resetWemOnPremConfig() {
    this._wemOnPremConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wemOnPremConfigInput() {
    return this._wemOnPremConfig;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cvad_config: citrixProviderCvadConfigToTerraform(this._cvadConfig),
      storefront_remote_host: citrixProviderStorefrontRemoteHostToTerraform(this._storefrontRemoteHost),
      wem_on_prem_config: citrixProviderWemOnPremConfigToTerraform(this._wemOnPremConfig),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cvad_config: {
        value: citrixProviderCvadConfigToHclTerraform(this._cvadConfig),
        isBlock: true,
        type: "struct",
        storageClassType: "CitrixProviderCvadConfig",
      },
      storefront_remote_host: {
        value: citrixProviderStorefrontRemoteHostToHclTerraform(this._storefrontRemoteHost),
        isBlock: true,
        type: "struct",
        storageClassType: "CitrixProviderStorefrontRemoteHost",
      },
      wem_on_prem_config: {
        value: citrixProviderWemOnPremConfigToHclTerraform(this._wemOnPremConfig),
        isBlock: true,
        type: "struct",
        storageClassType: "CitrixProviderWemOnPremConfig",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
