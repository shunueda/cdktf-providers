// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappOntapProviderConfig {
  /**
  * Define connection and credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#connection_profiles NetappOntapProvider#connection_profiles}
  */
  readonly connectionProfiles: NetappOntapProviderConnectionProfiles[] | cdktf.IResolvable;
  /**
  * Example provider attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#endpoint NetappOntapProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Time in seconds to wait for completion. Default to 600 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#job_completion_timeout NetappOntapProvider#job_completion_timeout}
  */
  readonly jobCompletionTimeout?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#alias NetappOntapProvider#alias}
  */
  readonly alias?: string;
}
export interface NetappOntapProviderConnectionProfilesAwsLambda {
  /**
  * AWS Lambda function name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#function_name NetappOntapProvider#function_name}
  */
  readonly functionName: string;
  /**
  * AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#region NetappOntapProvider#region}
  */
  readonly region?: string;
  /**
  * AWS shared config profile. Region set in the profile will be ignored it it's different from the region set in Terraform. aws_access_key_id and aws_secret_access_key are required to be set in credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#shared_config_profile NetappOntapProvider#shared_config_profile}
  */
  readonly sharedConfigProfile: string;
}

export function netappOntapProviderConnectionProfilesAwsLambdaToTerraform(struct?: NetappOntapProviderConnectionProfilesAwsLambda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    region: cdktf.stringToTerraform(struct!.region),
    shared_config_profile: cdktf.stringToTerraform(struct!.sharedConfigProfile),
  }
}


export function netappOntapProviderConnectionProfilesAwsLambdaToHclTerraform(struct?: NetappOntapProviderConnectionProfilesAwsLambda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
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
    shared_config_profile: {
      value: cdktf.stringToHclTerraform(struct!.sharedConfigProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface NetappOntapProviderConnectionProfiles {
  /**
  * AWS configuration for Lambda
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#aws_lambda NetappOntapProvider#aws_lambda}
  */
  readonly awsLambda?: NetappOntapProviderConnectionProfilesAwsLambda;
  /**
  * ONTAP management interface IP address or name. For AWS Lambda, the management endpoints for the FSxN system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#hostname NetappOntapProvider#hostname}
  */
  readonly hostname: string;
  /**
  * Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#name NetappOntapProvider#name}
  */
  readonly name: string;
  /**
  * ONTAP management password for username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#password NetappOntapProvider#password}
  */
  readonly password: string;
  /**
  * ONTAP management user name (cluster or svm)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#username NetappOntapProvider#username}
  */
  readonly username: string;
  /**
  * Whether to enforce SSL certificate validation, defaults to true. Not applicable for AWS Lambda
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#validate_certs NetappOntapProvider#validate_certs}
  */
  readonly validateCerts?: boolean | cdktf.IResolvable;
}

export function netappOntapProviderConnectionProfilesToTerraform(struct?: NetappOntapProviderConnectionProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_lambda: netappOntapProviderConnectionProfilesAwsLambdaToTerraform(struct!.awsLambda),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    validate_certs: cdktf.booleanToTerraform(struct!.validateCerts),
  }
}


export function netappOntapProviderConnectionProfilesToHclTerraform(struct?: NetappOntapProviderConnectionProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_lambda: {
      value: netappOntapProviderConnectionProfilesAwsLambdaToHclTerraform(struct!.awsLambda),
      isBlock: true,
      type: "struct",
      storageClassType: "NetappOntapProviderConnectionProfilesAwsLambda",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_certs: {
      value: cdktf.booleanToHclTerraform(struct!.validateCerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs netapp-ontap}
*/
export class NetappOntapProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappOntapProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappOntapProvider to import
  * @param importFromId The id of the existing NetappOntapProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappOntapProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs netapp-ontap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappOntapProviderConfig
  */
  public constructor(scope: Construct, id: string, config: NetappOntapProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      terraformProviderSource: 'NetApp/netapp-ontap'
    });
    this._connectionProfiles = config.connectionProfiles;
    this._endpoint = config.endpoint;
    this._jobCompletionTimeout = config.jobCompletionTimeout;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_profiles - computed: false, optional: false, required: true
  private _connectionProfiles?: NetappOntapProviderConnectionProfiles[] | cdktf.IResolvable; 
  public get connectionProfiles() {
    return this._connectionProfiles;
  }
  public set connectionProfiles(value: NetappOntapProviderConnectionProfiles[] | cdktf.IResolvable | undefined) {
    this._connectionProfiles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionProfilesInput() {
    return this._connectionProfiles;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // job_completion_timeout - computed: false, optional: true, required: false
  private _jobCompletionTimeout?: number; 
  public get jobCompletionTimeout() {
    return this._jobCompletionTimeout;
  }
  public set jobCompletionTimeout(value: number | undefined) {
    this._jobCompletionTimeout = value;
  }
  public resetJobCompletionTimeout() {
    this._jobCompletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCompletionTimeoutInput() {
    return this._jobCompletionTimeout;
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
      connection_profiles: cdktf.listMapper(netappOntapProviderConnectionProfilesToTerraform, false)(this._connectionProfiles),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      job_completion_timeout: cdktf.numberToTerraform(this._jobCompletionTimeout),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_profiles: {
        value: cdktf.listMapperHcl(netappOntapProviderConnectionProfilesToHclTerraform, false)(this._connectionProfiles),
        isBlock: true,
        type: "list",
        storageClassType: "NetappOntapProviderConnectionProfilesList",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_completion_timeout: {
        value: cdktf.numberToHclTerraform(this._jobCompletionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
