// https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface McafProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#alias McafProvider#alias}
  */
  readonly alias?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#aws McafProvider#aws}
  */
  readonly aws?: McafProviderAws;
}
export interface McafProviderAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#access_key McafProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#max_retries McafProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#profile McafProvider#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#region McafProvider#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#secret_key McafProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#shared_credentials_file McafProvider#shared_credentials_file}
  */
  readonly sharedCredentialsFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#skip_credentials_validation McafProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#skip_metadata_api_check McafProvider#skip_metadata_api_check}
  */
  readonly skipMetadataApiCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#skip_region_validation McafProvider#skip_region_validation}
  */
  readonly skipRegionValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#skip_requesting_account_id McafProvider#skip_requesting_account_id}
  */
  readonly skipRequestingAccountId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#token McafProvider#token}
  */
  readonly token?: string;
}

export function mcafProviderAwsToTerraform(struct?: McafProviderAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    profile: cdktf.stringToTerraform(struct!.profile),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    shared_credentials_file: cdktf.stringToTerraform(struct!.sharedCredentialsFile),
    skip_credentials_validation: cdktf.booleanToTerraform(struct!.skipCredentialsValidation),
    skip_metadata_api_check: cdktf.booleanToTerraform(struct!.skipMetadataApiCheck),
    skip_region_validation: cdktf.booleanToTerraform(struct!.skipRegionValidation),
    skip_requesting_account_id: cdktf.booleanToTerraform(struct!.skipRequestingAccountId),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function mcafProviderAwsToHclTerraform(struct?: McafProviderAws): any {
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
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
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
    shared_credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.sharedCredentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_credentials_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipCredentialsValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_metadata_api_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipMetadataApiCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_region_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipRegionValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_requesting_account_id: {
      value: cdktf.booleanToHclTerraform(struct!.skipRequestingAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs mcaf}
*/
export class McafProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mcaf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a McafProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the McafProvider to import
  * @param importFromId The id of the existing McafProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the McafProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mcaf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs mcaf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options McafProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: McafProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mcaf',
      terraformGeneratorMetadata: {
        providerName: 'mcaf',
        providerVersion: '0.4.3'
      },
      terraformProviderSource: 'schubergphilis/mcaf'
    });
    this._alias = config.alias;
    this._aws = config.aws;
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
  private _aws?: McafProviderAws; 
  public get aws() {
    return this._aws;
  }
  public set aws(value: McafProviderAws | undefined) {
    this._aws = value;
  }
  public resetAws() {
    this._aws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      aws: mcafProviderAwsToTerraform(this._aws),
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
        value: mcafProviderAwsToHclTerraform(this._aws),
        isBlock: true,
        type: "list",
        storageClassType: "McafProviderAwsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
