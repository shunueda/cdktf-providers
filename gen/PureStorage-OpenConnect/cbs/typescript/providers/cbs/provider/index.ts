// https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbsProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs#alias CbsProvider#alias}
  */
  readonly alias?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs#aws CbsProvider#aws}
  */
  readonly aws?: CbsProviderAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs#azure CbsProvider#azure}
  */
  readonly azure?: CbsProviderAzure;
}
export interface CbsProviderAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs#region CbsProvider#region}
  */
  readonly region?: string;
}

export function cbsProviderAwsToTerraform(struct?: CbsProviderAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function cbsProviderAwsToHclTerraform(struct?: CbsProviderAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface CbsProviderAzure {
  /**
  * The Client ID which should be used for service principal authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs#client_id CbsProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs#client_secret CbsProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The Subscription ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs#subscription_id CbsProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The Tenant ID which should be used for service principal authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs#tenant_id CbsProvider#tenant_id}
  */
  readonly tenantId?: string;
}

export function cbsProviderAzureToTerraform(struct?: CbsProviderAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function cbsProviderAzureToHclTerraform(struct?: CbsProviderAzure): any {
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
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs cbs}
*/
export class CbsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cbs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CbsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CbsProvider to import
  * @param importFromId The id of the existing CbsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CbsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cbs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs cbs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CbsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cbs',
      terraformGeneratorMetadata: {
        providerName: 'cbs',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
      },
      terraformProviderSource: 'PureStorage-OpenConnect/cbs'
    });
    this._alias = config.alias;
    this._aws = config.aws;
    this._azure = config.azure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // aws - computed: false, optional: true, required: false
  private _aws?: CbsProviderAws; 
  public get aws() {
    return this._aws;
  }
  public set aws(value: CbsProviderAws | undefined) {
    this._aws = value;
  }
  public resetAws() {
    this._aws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws;
  }

  // azure - computed: false, optional: true, required: false
  private _azure?: CbsProviderAzure; 
  public get azure() {
    return this._azure;
  }
  public set azure(value: CbsProviderAzure | undefined) {
    this._azure = value;
  }
  public resetAzure() {
    this._azure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      aws: cbsProviderAwsToTerraform(this._aws),
      azure: cbsProviderAzureToTerraform(this._azure),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws: {
        value: cbsProviderAwsToHclTerraform(this._aws),
        isBlock: true,
        type: "list",
        storageClassType: "CbsProviderAwsList",
      },
      azure: {
        value: cbsProviderAzureToHclTerraform(this._azure),
        isBlock: true,
        type: "list",
        storageClassType: "CbsProviderAzureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
