// https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LyvecloudProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#alias LyvecloudProvider#alias}
  */
  readonly alias?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#account LyvecloudProvider#account}
  */
  readonly account?: LyvecloudProviderAccount;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#s3 LyvecloudProvider#s3}
  */
  readonly s3?: LyvecloudProviderS3;
}
export interface LyvecloudProviderAccount {
  /**
  * The access key is generated when you generate Account API credentails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#access_key LyvecloudProvider#access_key}
  */
  readonly accessKey: string;
  /**
  * Unique identifier of the Lyve Cloud Account API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#account_id LyvecloudProvider#account_id}
  */
  readonly accountId: string;
  /**
  * The secret key is generated when you generate Account API credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#secret LyvecloudProvider#secret}
  */
  readonly secret: string;
}

export function lyvecloudProviderAccountToTerraform(struct?: LyvecloudProviderAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function lyvecloudProviderAccountToHclTerraform(struct?: LyvecloudProviderAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface LyvecloudProviderS3 {
  /**
  * The access key for S3 API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#access_key LyvecloudProvider#access_key}
  */
  readonly accessKey: string;
  /**
  * Lyve Cloud endpoint URL for S3 API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#endpoint_url LyvecloudProvider#endpoint_url}
  */
  readonly endpointUrl: string;
  /**
  * Lyve Cloud region for S3 API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#region LyvecloudProvider#region}
  */
  readonly region: string;
  /**
  * The secret key for S3 API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#secret_key LyvecloudProvider#secret_key}
  */
  readonly secretKey: string;
}

export function lyvecloudProviderS3ToTerraform(struct?: LyvecloudProviderS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function lyvecloudProviderS3ToHclTerraform(struct?: LyvecloudProviderS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs lyvecloud}
*/
export class LyvecloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lyvecloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LyvecloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LyvecloudProvider to import
  * @param importFromId The id of the existing LyvecloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LyvecloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lyvecloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs lyvecloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LyvecloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LyvecloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'lyvecloud',
      terraformGeneratorMetadata: {
        providerName: 'lyvecloud',
        providerVersion: '0.2.2'
      },
      terraformProviderSource: 'Seagate/lyvecloud'
    });
    this._alias = config.alias;
    this._account = config.account;
    this._s3 = config.s3;
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

  // account - computed: false, optional: true, required: false
  private _account?: LyvecloudProviderAccount; 
  public get account() {
    return this._account;
  }
  public set account(value: LyvecloudProviderAccount | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: LyvecloudProviderS3; 
  public get s3() {
    return this._s3;
  }
  public set s3(value: LyvecloudProviderS3 | undefined) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      account: lyvecloudProviderAccountToTerraform(this._account),
      s3: lyvecloudProviderS3ToTerraform(this._s3),
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
      account: {
        value: lyvecloudProviderAccountToHclTerraform(this._account),
        isBlock: true,
        type: "list",
        storageClassType: "LyvecloudProviderAccountList",
      },
      s3: {
        value: lyvecloudProviderS3ToHclTerraform(this._s3),
        isBlock: true,
        type: "list",
        storageClassType: "LyvecloudProviderS3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
