// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsElasticContainerRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS access key to use when authenticating against Amazon Web Services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#access_key AwsElasticContainerRegistry#access_key}
  */
  readonly accessKey?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#name AwsElasticContainerRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#oidc_authentication AwsElasticContainerRegistry#oidc_authentication}
  */
  readonly oidcAuthentication?: AwsElasticContainerRegistryOidcAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#package_acquisition_location_options AwsElasticContainerRegistry#package_acquisition_location_options}
  */
  readonly packageAcquisitionLocationOptions?: string[];
  /**
  * The AWS region where the registry resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#region AwsElasticContainerRegistry#region}
  */
  readonly region: string;
  /**
  * The AWS secret key to use when authenticating against Amazon Web Services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#secret_key AwsElasticContainerRegistry#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The space ID associated with this aws elastic container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#space_id AwsElasticContainerRegistry#space_id}
  */
  readonly spaceId?: string;
}
export interface AwsElasticContainerRegistryOidcAuthentication {
  /**
  * Audience to use when authenticating against Amazon Web Services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#audience AwsElasticContainerRegistry#audience}
  */
  readonly audience?: string;
  /**
  * The Amazon Resource Name (ARN) of the role that the caller is assuming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#role_arn AwsElasticContainerRegistry#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Assumed role session duration (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#session_duration AwsElasticContainerRegistry#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * Keys to include in a deployment or runbook. Valid options are `space`, `feed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#subject_keys AwsElasticContainerRegistry#subject_keys}
  */
  readonly subjectKeys?: string[];
}

export function awsElasticContainerRegistryOidcAuthenticationToTerraform(struct?: AwsElasticContainerRegistryOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_duration: cdktf.stringToTerraform(struct!.sessionDuration),
    subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectKeys),
  }
}


export function awsElasticContainerRegistryOidcAuthenticationToHclTerraform(struct?: AwsElasticContainerRegistryOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_duration: {
      value: cdktf.stringToHclTerraform(struct!.sessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsElasticContainerRegistryOidcAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsElasticContainerRegistryOidcAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sessionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionDuration = this._sessionDuration;
    }
    if (this._subjectKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKeys = this._subjectKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsElasticContainerRegistryOidcAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._roleArn = undefined;
      this._sessionDuration = undefined;
      this._subjectKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._roleArn = value.roleArn;
      this._sessionDuration = value.sessionDuration;
      this._subjectKeys = value.subjectKeys;
    }
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // session_duration - computed: true, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // subject_keys - computed: false, optional: true, required: false
  private _subjectKeys?: string[]; 
  public get subjectKeys() {
    return this.getListAttribute('subject_keys');
  }
  public set subjectKeys(value: string[]) {
    this._subjectKeys = value;
  }
  public resetSubjectKeys() {
    this._subjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeysInput() {
    return this._subjectKeys;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry octopusdeploy_aws_elastic_container_registry}
*/
export class AwsElasticContainerRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_aws_elastic_container_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsElasticContainerRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsElasticContainerRegistry to import
  * @param importFromId The id of the existing AwsElasticContainerRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsElasticContainerRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_aws_elastic_container_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_elastic_container_registry octopusdeploy_aws_elastic_container_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsElasticContainerRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: AwsElasticContainerRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_aws_elastic_container_registry',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._name = config.name;
    this._oidcAuthentication.internalValue = config.oidcAuthentication;
    this._packageAcquisitionLocationOptions = config.packageAcquisitionLocationOptions;
    this._region = config.region;
    this._secretKey = config.secretKey;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // oidc_authentication - computed: false, optional: true, required: false
  private _oidcAuthentication = new AwsElasticContainerRegistryOidcAuthenticationOutputReference(this, "oidc_authentication");
  public get oidcAuthentication() {
    return this._oidcAuthentication;
  }
  public putOidcAuthentication(value: AwsElasticContainerRegistryOidcAuthentication) {
    this._oidcAuthentication.internalValue = value;
  }
  public resetOidcAuthentication() {
    this._oidcAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAuthenticationInput() {
    return this._oidcAuthentication.internalValue;
  }

  // package_acquisition_location_options - computed: true, optional: true, required: false
  private _packageAcquisitionLocationOptions?: string[]; 
  public get packageAcquisitionLocationOptions() {
    return this.getListAttribute('package_acquisition_location_options');
  }
  public set packageAcquisitionLocationOptions(value: string[]) {
    this._packageAcquisitionLocationOptions = value;
  }
  public resetPackageAcquisitionLocationOptions() {
    this._packageAcquisitionLocationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageAcquisitionLocationOptionsInput() {
    return this._packageAcquisitionLocationOptions;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      name: cdktf.stringToTerraform(this._name),
      oidc_authentication: awsElasticContainerRegistryOidcAuthenticationToTerraform(this._oidcAuthentication.internalValue),
      package_acquisition_location_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packageAcquisitionLocationOptions),
      region: cdktf.stringToTerraform(this._region),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
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
      oidc_authentication: {
        value: awsElasticContainerRegistryOidcAuthenticationToHclTerraform(this._oidcAuthentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsElasticContainerRegistryOidcAuthentication",
      },
      package_acquisition_location_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packageAcquisitionLocationOptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
