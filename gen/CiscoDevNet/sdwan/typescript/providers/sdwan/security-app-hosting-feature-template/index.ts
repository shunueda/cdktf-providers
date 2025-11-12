// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityAppHostingFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#description SecurityAppHostingFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#device_types SecurityAppHostingFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#name SecurityAppHostingFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Virtual application Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#virtual_applications SecurityAppHostingFeatureTemplate#virtual_applications}
  */
  readonly virtualApplications?: SecurityAppHostingFeatureTemplateVirtualApplications[] | cdktf.IResolvable;
}
export interface SecurityAppHostingFeatureTemplateVirtualApplications {
  /**
  * List of Virtual applications
  *   - Choices: `utd`
  *   - Default value: `utd`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#application_type SecurityAppHostingFeatureTemplate#application_type}
  */
  readonly applicationType?: string;
  /**
  * Data Gateway IP 
  *   - Default value: `192.0.2.1/24`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#data_gateway_ip SecurityAppHostingFeatureTemplate#data_gateway_ip}
  */
  readonly dataGatewayIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#data_gateway_ip_variable SecurityAppHostingFeatureTemplate#data_gateway_ip_variable}
  */
  readonly dataGatewayIpVariable?: string;
  /**
  * Data Service IP
  *   - Default value: `192.0.2.2/24`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#data_service_ip SecurityAppHostingFeatureTemplate#data_service_ip}
  */
  readonly dataServiceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#data_service_ip_variable SecurityAppHostingFeatureTemplate#data_service_ip_variable}
  */
  readonly dataServiceIpVariable?: string;
  /**
  * Download URL Database on Device
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#database_url SecurityAppHostingFeatureTemplate#database_url}
  */
  readonly databaseUrl?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#database_url_variable SecurityAppHostingFeatureTemplate#database_url_variable}
  */
  readonly databaseUrlVariable?: string;
  /**
  * List of Virtual applications
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#instance_id SecurityAppHostingFeatureTemplate#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Is Nat enabled
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#nat SecurityAppHostingFeatureTemplate#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#nat_variable SecurityAppHostingFeatureTemplate#nat_variable}
  */
  readonly natVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#optional SecurityAppHostingFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Resource Profile
  *   - Choices: `low`, `medium`, `high`
  *   - Default value: `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#resource_profile SecurityAppHostingFeatureTemplate#resource_profile}
  */
  readonly resourceProfile?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#resource_profile_variable SecurityAppHostingFeatureTemplate#resource_profile_variable}
  */
  readonly resourceProfileVariable?: string;
  /**
  * Service Gateway IP (Management interface)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#service_gateway_ip SecurityAppHostingFeatureTemplate#service_gateway_ip}
  */
  readonly serviceGatewayIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#service_gateway_ip_variable SecurityAppHostingFeatureTemplate#service_gateway_ip_variable}
  */
  readonly serviceGatewayIpVariable?: string;
  /**
  * Service IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#service_ip SecurityAppHostingFeatureTemplate#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#service_ip_variable SecurityAppHostingFeatureTemplate#service_ip_variable}
  */
  readonly serviceIpVariable?: string;
}

export function securityAppHostingFeatureTemplateVirtualApplicationsToTerraform(struct?: SecurityAppHostingFeatureTemplateVirtualApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_type: cdktf.stringToTerraform(struct!.applicationType),
    data_gateway_ip: cdktf.stringToTerraform(struct!.dataGatewayIp),
    data_gateway_ip_variable: cdktf.stringToTerraform(struct!.dataGatewayIpVariable),
    data_service_ip: cdktf.stringToTerraform(struct!.dataServiceIp),
    data_service_ip_variable: cdktf.stringToTerraform(struct!.dataServiceIpVariable),
    database_url: cdktf.booleanToTerraform(struct!.databaseUrl),
    database_url_variable: cdktf.stringToTerraform(struct!.databaseUrlVariable),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    nat: cdktf.booleanToTerraform(struct!.nat),
    nat_variable: cdktf.stringToTerraform(struct!.natVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    resource_profile: cdktf.stringToTerraform(struct!.resourceProfile),
    resource_profile_variable: cdktf.stringToTerraform(struct!.resourceProfileVariable),
    service_gateway_ip: cdktf.stringToTerraform(struct!.serviceGatewayIp),
    service_gateway_ip_variable: cdktf.stringToTerraform(struct!.serviceGatewayIpVariable),
    service_ip: cdktf.stringToTerraform(struct!.serviceIp),
    service_ip_variable: cdktf.stringToTerraform(struct!.serviceIpVariable),
  }
}


export function securityAppHostingFeatureTemplateVirtualApplicationsToHclTerraform(struct?: SecurityAppHostingFeatureTemplateVirtualApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_type: {
      value: cdktf.stringToHclTerraform(struct!.applicationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.dataGatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_gateway_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.dataGatewayIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_service_ip: {
      value: cdktf.stringToHclTerraform(struct!.dataServiceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_service_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.dataServiceIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_url: {
      value: cdktf.booleanToHclTerraform(struct!.databaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_url_variable: {
      value: cdktf.stringToHclTerraform(struct!.databaseUrlVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat: {
      value: cdktf.booleanToHclTerraform(struct!.nat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_variable: {
      value: cdktf.stringToHclTerraform(struct!.natVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_profile: {
      value: cdktf.stringToHclTerraform(struct!.resourceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.resourceProfileVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceGatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_gateway_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.serviceGatewayIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.serviceIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityAppHostingFeatureTemplateVirtualApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityAppHostingFeatureTemplateVirtualApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType;
    }
    if (this._dataGatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataGatewayIp = this._dataGatewayIp;
    }
    if (this._dataGatewayIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataGatewayIpVariable = this._dataGatewayIpVariable;
    }
    if (this._dataServiceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServiceIp = this._dataServiceIp;
    }
    if (this._dataServiceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServiceIpVariable = this._dataServiceIpVariable;
    }
    if (this._databaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUrl = this._databaseUrl;
    }
    if (this._databaseUrlVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUrlVariable = this._databaseUrlVariable;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._natVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natVariable = this._natVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._resourceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceProfile = this._resourceProfile;
    }
    if (this._resourceProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceProfileVariable = this._resourceProfileVariable;
    }
    if (this._serviceGatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGatewayIp = this._serviceGatewayIp;
    }
    if (this._serviceGatewayIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGatewayIpVariable = this._serviceGatewayIpVariable;
    }
    if (this._serviceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIp = this._serviceIp;
    }
    if (this._serviceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIpVariable = this._serviceIpVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityAppHostingFeatureTemplateVirtualApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationType = undefined;
      this._dataGatewayIp = undefined;
      this._dataGatewayIpVariable = undefined;
      this._dataServiceIp = undefined;
      this._dataServiceIpVariable = undefined;
      this._databaseUrl = undefined;
      this._databaseUrlVariable = undefined;
      this._instanceId = undefined;
      this._nat = undefined;
      this._natVariable = undefined;
      this._optional = undefined;
      this._resourceProfile = undefined;
      this._resourceProfileVariable = undefined;
      this._serviceGatewayIp = undefined;
      this._serviceGatewayIpVariable = undefined;
      this._serviceIp = undefined;
      this._serviceIpVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationType = value.applicationType;
      this._dataGatewayIp = value.dataGatewayIp;
      this._dataGatewayIpVariable = value.dataGatewayIpVariable;
      this._dataServiceIp = value.dataServiceIp;
      this._dataServiceIpVariable = value.dataServiceIpVariable;
      this._databaseUrl = value.databaseUrl;
      this._databaseUrlVariable = value.databaseUrlVariable;
      this._instanceId = value.instanceId;
      this._nat = value.nat;
      this._natVariable = value.natVariable;
      this._optional = value.optional;
      this._resourceProfile = value.resourceProfile;
      this._resourceProfileVariable = value.resourceProfileVariable;
      this._serviceGatewayIp = value.serviceGatewayIp;
      this._serviceGatewayIpVariable = value.serviceGatewayIpVariable;
      this._serviceIp = value.serviceIp;
      this._serviceIpVariable = value.serviceIpVariable;
    }
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // data_gateway_ip - computed: false, optional: true, required: false
  private _dataGatewayIp?: string; 
  public get dataGatewayIp() {
    return this.getStringAttribute('data_gateway_ip');
  }
  public set dataGatewayIp(value: string) {
    this._dataGatewayIp = value;
  }
  public resetDataGatewayIp() {
    this._dataGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataGatewayIpInput() {
    return this._dataGatewayIp;
  }

  // data_gateway_ip_variable - computed: false, optional: true, required: false
  private _dataGatewayIpVariable?: string; 
  public get dataGatewayIpVariable() {
    return this.getStringAttribute('data_gateway_ip_variable');
  }
  public set dataGatewayIpVariable(value: string) {
    this._dataGatewayIpVariable = value;
  }
  public resetDataGatewayIpVariable() {
    this._dataGatewayIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataGatewayIpVariableInput() {
    return this._dataGatewayIpVariable;
  }

  // data_service_ip - computed: false, optional: true, required: false
  private _dataServiceIp?: string; 
  public get dataServiceIp() {
    return this.getStringAttribute('data_service_ip');
  }
  public set dataServiceIp(value: string) {
    this._dataServiceIp = value;
  }
  public resetDataServiceIp() {
    this._dataServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServiceIpInput() {
    return this._dataServiceIp;
  }

  // data_service_ip_variable - computed: false, optional: true, required: false
  private _dataServiceIpVariable?: string; 
  public get dataServiceIpVariable() {
    return this.getStringAttribute('data_service_ip_variable');
  }
  public set dataServiceIpVariable(value: string) {
    this._dataServiceIpVariable = value;
  }
  public resetDataServiceIpVariable() {
    this._dataServiceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServiceIpVariableInput() {
    return this._dataServiceIpVariable;
  }

  // database_url - computed: false, optional: true, required: false
  private _databaseUrl?: boolean | cdktf.IResolvable; 
  public get databaseUrl() {
    return this.getBooleanAttribute('database_url');
  }
  public set databaseUrl(value: boolean | cdktf.IResolvable) {
    this._databaseUrl = value;
  }
  public resetDatabaseUrl() {
    this._databaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUrlInput() {
    return this._databaseUrl;
  }

  // database_url_variable - computed: false, optional: true, required: false
  private _databaseUrlVariable?: string; 
  public get databaseUrlVariable() {
    return this.getStringAttribute('database_url_variable');
  }
  public set databaseUrlVariable(value: string) {
    this._databaseUrlVariable = value;
  }
  public resetDatabaseUrlVariable() {
    this._databaseUrlVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUrlVariableInput() {
    return this._databaseUrlVariable;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // nat - computed: false, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat_variable - computed: false, optional: true, required: false
  private _natVariable?: string; 
  public get natVariable() {
    return this.getStringAttribute('nat_variable');
  }
  public set natVariable(value: string) {
    this._natVariable = value;
  }
  public resetNatVariable() {
    this._natVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natVariableInput() {
    return this._natVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // resource_profile - computed: false, optional: true, required: false
  private _resourceProfile?: string; 
  public get resourceProfile() {
    return this.getStringAttribute('resource_profile');
  }
  public set resourceProfile(value: string) {
    this._resourceProfile = value;
  }
  public resetResourceProfile() {
    this._resourceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProfileInput() {
    return this._resourceProfile;
  }

  // resource_profile_variable - computed: false, optional: true, required: false
  private _resourceProfileVariable?: string; 
  public get resourceProfileVariable() {
    return this.getStringAttribute('resource_profile_variable');
  }
  public set resourceProfileVariable(value: string) {
    this._resourceProfileVariable = value;
  }
  public resetResourceProfileVariable() {
    this._resourceProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProfileVariableInput() {
    return this._resourceProfileVariable;
  }

  // service_gateway_ip - computed: false, optional: true, required: false
  private _serviceGatewayIp?: string; 
  public get serviceGatewayIp() {
    return this.getStringAttribute('service_gateway_ip');
  }
  public set serviceGatewayIp(value: string) {
    this._serviceGatewayIp = value;
  }
  public resetServiceGatewayIp() {
    this._serviceGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGatewayIpInput() {
    return this._serviceGatewayIp;
  }

  // service_gateway_ip_variable - computed: false, optional: true, required: false
  private _serviceGatewayIpVariable?: string; 
  public get serviceGatewayIpVariable() {
    return this.getStringAttribute('service_gateway_ip_variable');
  }
  public set serviceGatewayIpVariable(value: string) {
    this._serviceGatewayIpVariable = value;
  }
  public resetServiceGatewayIpVariable() {
    this._serviceGatewayIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGatewayIpVariableInput() {
    return this._serviceGatewayIpVariable;
  }

  // service_ip - computed: false, optional: true, required: false
  private _serviceIp?: string; 
  public get serviceIp() {
    return this.getStringAttribute('service_ip');
  }
  public set serviceIp(value: string) {
    this._serviceIp = value;
  }
  public resetServiceIp() {
    this._serviceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpInput() {
    return this._serviceIp;
  }

  // service_ip_variable - computed: false, optional: true, required: false
  private _serviceIpVariable?: string; 
  public get serviceIpVariable() {
    return this.getStringAttribute('service_ip_variable');
  }
  public set serviceIpVariable(value: string) {
    this._serviceIpVariable = value;
  }
  public resetServiceIpVariable() {
    this._serviceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpVariableInput() {
    return this._serviceIpVariable;
  }
}

export class SecurityAppHostingFeatureTemplateVirtualApplicationsList extends cdktf.ComplexList {
  public internalValue? : SecurityAppHostingFeatureTemplateVirtualApplications[] | cdktf.IResolvable

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
  public get(index: number): SecurityAppHostingFeatureTemplateVirtualApplicationsOutputReference {
    return new SecurityAppHostingFeatureTemplateVirtualApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template sdwan_security_app_hosting_feature_template}
*/
export class SecurityAppHostingFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_security_app_hosting_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityAppHostingFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityAppHostingFeatureTemplate to import
  * @param importFromId The id of the existing SecurityAppHostingFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityAppHostingFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_security_app_hosting_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/security_app_hosting_feature_template sdwan_security_app_hosting_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityAppHostingFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityAppHostingFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_security_app_hosting_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
    this._deviceTypes = config.deviceTypes;
    this._name = config.name;
    this._virtualApplications.internalValue = config.virtualApplications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // virtual_applications - computed: false, optional: true, required: false
  private _virtualApplications = new SecurityAppHostingFeatureTemplateVirtualApplicationsList(this, "virtual_applications", false);
  public get virtualApplications() {
    return this._virtualApplications;
  }
  public putVirtualApplications(value: SecurityAppHostingFeatureTemplateVirtualApplications[] | cdktf.IResolvable) {
    this._virtualApplications.internalValue = value;
  }
  public resetVirtualApplications() {
    this._virtualApplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualApplicationsInput() {
    return this._virtualApplications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      name: cdktf.stringToTerraform(this._name),
      virtual_applications: cdktf.listMapper(securityAppHostingFeatureTemplateVirtualApplicationsToTerraform, false)(this._virtualApplications.internalValue),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_applications: {
        value: cdktf.listMapperHcl(securityAppHostingFeatureTemplateVirtualApplicationsToHclTerraform, false)(this._virtualApplications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityAppHostingFeatureTemplateVirtualApplicationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
