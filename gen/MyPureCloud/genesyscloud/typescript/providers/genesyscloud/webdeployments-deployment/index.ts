// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebdeploymentsDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether all domains are allowed or not. allowedDomains must be empty when this is true. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#allow_all_domains WebdeploymentsDeployment#allow_all_domains}
  */
  readonly allowAllDomains?: boolean | cdktf.IResolvable;
  /**
  * The list of domains that are approved to use this deployment; the list will be added to CORS headers for ease of web use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#allowed_domains WebdeploymentsDeployment#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Deployment description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#description WebdeploymentsDeployment#description}
  */
  readonly description?: string;
  /**
  * A reference to the inboundshortmessage flow used by this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#flow_id WebdeploymentsDeployment#flow_id}
  */
  readonly flowId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#id WebdeploymentsDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Deployment name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#name WebdeploymentsDeployment#name}
  */
  readonly name: string;
  /**
  * The current status of the deployment. Valid values: Pending, Active, Inactive, Error, Deleting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#status WebdeploymentsDeployment#status}
  */
  readonly status?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#configuration WebdeploymentsDeployment#configuration}
  */
  readonly configuration: WebdeploymentsDeploymentConfiguration;
}
export interface WebdeploymentsDeploymentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#id WebdeploymentsDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#version WebdeploymentsDeployment#version}
  */
  readonly version?: string;
}

export function webdeploymentsDeploymentConfigurationToTerraform(struct?: WebdeploymentsDeploymentConfigurationOutputReference | WebdeploymentsDeploymentConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function webdeploymentsDeploymentConfigurationToHclTerraform(struct?: WebdeploymentsDeploymentConfigurationOutputReference | WebdeploymentsDeploymentConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebdeploymentsDeploymentConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebdeploymentsDeploymentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebdeploymentsDeploymentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment genesyscloud_webdeployments_deployment}
*/
export class WebdeploymentsDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_webdeployments_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebdeploymentsDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebdeploymentsDeployment to import
  * @param importFromId The id of the existing WebdeploymentsDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebdeploymentsDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_webdeployments_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/webdeployments_deployment genesyscloud_webdeployments_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebdeploymentsDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: WebdeploymentsDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_webdeployments_deployment',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAllDomains = config.allowAllDomains;
    this._allowedDomains = config.allowedDomains;
    this._description = config.description;
    this._flowId = config.flowId;
    this._id = config.id;
    this._name = config.name;
    this._status = config.status;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_all_domains - computed: false, optional: true, required: false
  private _allowAllDomains?: boolean | cdktf.IResolvable; 
  public get allowAllDomains() {
    return this.getBooleanAttribute('allow_all_domains');
  }
  public set allowAllDomains(value: boolean | cdktf.IResolvable) {
    this._allowAllDomains = value;
  }
  public resetAllowAllDomains() {
    this._allowAllDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllDomainsInput() {
    return this._allowAllDomains;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
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

  // flow_id - computed: false, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new WebdeploymentsDeploymentConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: WebdeploymentsDeploymentConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_all_domains: cdktf.booleanToTerraform(this._allowAllDomains),
      allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDomains),
      description: cdktf.stringToTerraform(this._description),
      flow_id: cdktf.stringToTerraform(this._flowId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      configuration: webdeploymentsDeploymentConfigurationToTerraform(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_all_domains: {
        value: cdktf.booleanToHclTerraform(this._allowAllDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_id: {
        value: cdktf.stringToHclTerraform(this._flowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: webdeploymentsDeploymentConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebdeploymentsDeploymentConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
