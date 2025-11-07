// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtdvGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#aws_iam_role_firewall FtdvGateway#aws_iam_role_firewall}
  */
  readonly awsIamRoleFirewall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#azure_resource_group FtdvGateway#azure_resource_group}
  */
  readonly azureResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#azure_user_identity_id FtdvGateway#azure_user_identity_id}
  */
  readonly azureUserIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#csp_account_name FtdvGateway#csp_account_name}
  */
  readonly cspAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#description FtdvGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#ftdv_license_model FtdvGateway#ftdv_license_model}
  */
  readonly ftdvLicenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#ftdv_licenses FtdvGateway#ftdv_licenses}
  */
  readonly ftdvLicenses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#ftdv_password FtdvGateway#ftdv_password}
  */
  readonly ftdvPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#ftdv_performance_tier FtdvGateway#ftdv_performance_tier}
  */
  readonly ftdvPerformanceTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#ftdv_policy_id FtdvGateway#ftdv_policy_id}
  */
  readonly ftdvPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#ftdv_version FtdvGateway#ftdv_version}
  */
  readonly ftdvVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#gateway_state FtdvGateway#gateway_state}
  */
  readonly gatewayState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#health_check_port FtdvGateway#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#id FtdvGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#instance_type FtdvGateway#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#max_instances FtdvGateway#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#min_instances FtdvGateway#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#name FtdvGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#region FtdvGateway#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#ssh_key_pair FtdvGateway#ssh_key_pair}
  */
  readonly sshKeyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#ssh_public_key FtdvGateway#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#tags FtdvGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#vpc_id FtdvGateway#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#wait_for_gateway_state FtdvGateway#wait_for_gateway_state}
  */
  readonly waitForGatewayState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#wait_until_gateway_active FtdvGateway#wait_until_gateway_active}
  */
  readonly waitUntilGatewayActive?: boolean | cdktf.IResolvable;
  /**
  * gateway_lb_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#gateway_lb_integration FtdvGateway#gateway_lb_integration}
  */
  readonly gatewayLbIntegration?: FtdvGatewayGatewayLbIntegration[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#settings FtdvGateway#settings}
  */
  readonly settings?: FtdvGatewaySettings[] | cdktf.IResolvable;
}
export interface FtdvGatewayGatewayLbIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#awsga_endpoint_group_arn FtdvGateway#awsga_endpoint_group_arn}
  */
  readonly awsgaEndpointGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#awsga_resource_arn FtdvGateway#awsga_resource_arn}
  */
  readonly awsgaResourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#awsga_resource_fqdn FtdvGateway#awsga_resource_fqdn}
  */
  readonly awsgaResourceFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#awsga_resource_name FtdvGateway#awsga_resource_name}
  */
  readonly awsgaResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#azure_lb_backendpool_name FtdvGateway#azure_lb_backendpool_name}
  */
  readonly azureLbBackendpoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#azure_lb_name FtdvGateway#azure_lb_name}
  */
  readonly azureLbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#azure_lb_resourcegroup FtdvGateway#azure_lb_resourcegroup}
  */
  readonly azureLbResourcegroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#name FtdvGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#type FtdvGateway#type}
  */
  readonly type: string;
}

export function ftdvGatewayGatewayLbIntegrationToTerraform(struct?: FtdvGatewayGatewayLbIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    awsga_endpoint_group_arn: cdktf.stringToTerraform(struct!.awsgaEndpointGroupArn),
    awsga_resource_arn: cdktf.stringToTerraform(struct!.awsgaResourceArn),
    awsga_resource_fqdn: cdktf.stringToTerraform(struct!.awsgaResourceFqdn),
    awsga_resource_name: cdktf.stringToTerraform(struct!.awsgaResourceName),
    azure_lb_backendpool_name: cdktf.stringToTerraform(struct!.azureLbBackendpoolName),
    azure_lb_name: cdktf.stringToTerraform(struct!.azureLbName),
    azure_lb_resourcegroup: cdktf.stringToTerraform(struct!.azureLbResourcegroup),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdvGatewayGatewayLbIntegrationToHclTerraform(struct?: FtdvGatewayGatewayLbIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    awsga_endpoint_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsgaEndpointGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    awsga_resource_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsgaResourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    awsga_resource_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.awsgaResourceFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    awsga_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.awsgaResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_lb_backendpool_name: {
      value: cdktf.stringToHclTerraform(struct!.azureLbBackendpoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_lb_name: {
      value: cdktf.stringToHclTerraform(struct!.azureLbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_lb_resourcegroup: {
      value: cdktf.stringToHclTerraform(struct!.azureLbResourcegroup),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdvGatewayGatewayLbIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FtdvGatewayGatewayLbIntegration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsgaEndpointGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsgaEndpointGroupArn = this._awsgaEndpointGroupArn;
    }
    if (this._awsgaResourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsgaResourceArn = this._awsgaResourceArn;
    }
    if (this._awsgaResourceFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsgaResourceFqdn = this._awsgaResourceFqdn;
    }
    if (this._awsgaResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsgaResourceName = this._awsgaResourceName;
    }
    if (this._azureLbBackendpoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureLbBackendpoolName = this._azureLbBackendpoolName;
    }
    if (this._azureLbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureLbName = this._azureLbName;
    }
    if (this._azureLbResourcegroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureLbResourcegroup = this._azureLbResourcegroup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdvGatewayGatewayLbIntegration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsgaEndpointGroupArn = undefined;
      this._awsgaResourceArn = undefined;
      this._awsgaResourceFqdn = undefined;
      this._awsgaResourceName = undefined;
      this._azureLbBackendpoolName = undefined;
      this._azureLbName = undefined;
      this._azureLbResourcegroup = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsgaEndpointGroupArn = value.awsgaEndpointGroupArn;
      this._awsgaResourceArn = value.awsgaResourceArn;
      this._awsgaResourceFqdn = value.awsgaResourceFqdn;
      this._awsgaResourceName = value.awsgaResourceName;
      this._azureLbBackendpoolName = value.azureLbBackendpoolName;
      this._azureLbName = value.azureLbName;
      this._azureLbResourcegroup = value.azureLbResourcegroup;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // awsga_endpoint_group_arn - computed: false, optional: true, required: false
  private _awsgaEndpointGroupArn?: string; 
  public get awsgaEndpointGroupArn() {
    return this.getStringAttribute('awsga_endpoint_group_arn');
  }
  public set awsgaEndpointGroupArn(value: string) {
    this._awsgaEndpointGroupArn = value;
  }
  public resetAwsgaEndpointGroupArn() {
    this._awsgaEndpointGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgaEndpointGroupArnInput() {
    return this._awsgaEndpointGroupArn;
  }

  // awsga_resource_arn - computed: false, optional: true, required: false
  private _awsgaResourceArn?: string; 
  public get awsgaResourceArn() {
    return this.getStringAttribute('awsga_resource_arn');
  }
  public set awsgaResourceArn(value: string) {
    this._awsgaResourceArn = value;
  }
  public resetAwsgaResourceArn() {
    this._awsgaResourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgaResourceArnInput() {
    return this._awsgaResourceArn;
  }

  // awsga_resource_fqdn - computed: false, optional: true, required: false
  private _awsgaResourceFqdn?: string; 
  public get awsgaResourceFqdn() {
    return this.getStringAttribute('awsga_resource_fqdn');
  }
  public set awsgaResourceFqdn(value: string) {
    this._awsgaResourceFqdn = value;
  }
  public resetAwsgaResourceFqdn() {
    this._awsgaResourceFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgaResourceFqdnInput() {
    return this._awsgaResourceFqdn;
  }

  // awsga_resource_name - computed: false, optional: true, required: false
  private _awsgaResourceName?: string; 
  public get awsgaResourceName() {
    return this.getStringAttribute('awsga_resource_name');
  }
  public set awsgaResourceName(value: string) {
    this._awsgaResourceName = value;
  }
  public resetAwsgaResourceName() {
    this._awsgaResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgaResourceNameInput() {
    return this._awsgaResourceName;
  }

  // azure_lb_backendpool_name - computed: false, optional: true, required: false
  private _azureLbBackendpoolName?: string; 
  public get azureLbBackendpoolName() {
    return this.getStringAttribute('azure_lb_backendpool_name');
  }
  public set azureLbBackendpoolName(value: string) {
    this._azureLbBackendpoolName = value;
  }
  public resetAzureLbBackendpoolName() {
    this._azureLbBackendpoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLbBackendpoolNameInput() {
    return this._azureLbBackendpoolName;
  }

  // azure_lb_name - computed: false, optional: true, required: false
  private _azureLbName?: string; 
  public get azureLbName() {
    return this.getStringAttribute('azure_lb_name');
  }
  public set azureLbName(value: string) {
    this._azureLbName = value;
  }
  public resetAzureLbName() {
    this._azureLbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLbNameInput() {
    return this._azureLbName;
  }

  // azure_lb_resourcegroup - computed: false, optional: true, required: false
  private _azureLbResourcegroup?: string; 
  public get azureLbResourcegroup() {
    return this.getStringAttribute('azure_lb_resourcegroup');
  }
  public set azureLbResourcegroup(value: string) {
    this._azureLbResourcegroup = value;
  }
  public resetAzureLbResourcegroup() {
    this._azureLbResourcegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLbResourcegroupInput() {
    return this._azureLbResourcegroup;
  }

  // gateway_endpoint - computed: true, optional: false, required: false
  public get gatewayEndpoint() {
    return this.getStringAttribute('gateway_endpoint');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FtdvGatewayGatewayLbIntegrationList extends cdktf.ComplexList {
  public internalValue? : FtdvGatewayGatewayLbIntegration[] | cdktf.IResolvable

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
  public get(index: number): FtdvGatewayGatewayLbIntegrationOutputReference {
    return new FtdvGatewayGatewayLbIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FtdvGatewaySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#name FtdvGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#value FtdvGateway#value}
  */
  readonly value: string;
}

export function ftdvGatewaySettingsToTerraform(struct?: FtdvGatewaySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ftdvGatewaySettingsToHclTerraform(struct?: FtdvGatewaySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdvGatewaySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FtdvGatewaySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdvGatewaySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FtdvGatewaySettingsList extends cdktf.ComplexList {
  public internalValue? : FtdvGatewaySettings[] | cdktf.IResolvable

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
  public get(index: number): FtdvGatewaySettingsOutputReference {
    return new FtdvGatewaySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway valtix_ftdv_gateway}
*/
export class FtdvGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_ftdv_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtdvGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtdvGateway to import
  * @param importFromId The id of the existing FtdvGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtdvGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_ftdv_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/ftdv_gateway valtix_ftdv_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtdvGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: FtdvGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_ftdv_gateway',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsIamRoleFirewall = config.awsIamRoleFirewall;
    this._azureResourceGroup = config.azureResourceGroup;
    this._azureUserIdentityId = config.azureUserIdentityId;
    this._cspAccountName = config.cspAccountName;
    this._description = config.description;
    this._ftdvLicenseModel = config.ftdvLicenseModel;
    this._ftdvLicenses = config.ftdvLicenses;
    this._ftdvPassword = config.ftdvPassword;
    this._ftdvPerformanceTier = config.ftdvPerformanceTier;
    this._ftdvPolicyId = config.ftdvPolicyId;
    this._ftdvVersion = config.ftdvVersion;
    this._gatewayState = config.gatewayState;
    this._healthCheckPort = config.healthCheckPort;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._maxInstances = config.maxInstances;
    this._minInstances = config.minInstances;
    this._name = config.name;
    this._region = config.region;
    this._sshKeyPair = config.sshKeyPair;
    this._sshPublicKey = config.sshPublicKey;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._waitForGatewayState = config.waitForGatewayState;
    this._waitUntilGatewayActive = config.waitUntilGatewayActive;
    this._gatewayLbIntegration.internalValue = config.gatewayLbIntegration;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_iam_role_firewall - computed: false, optional: true, required: false
  private _awsIamRoleFirewall?: string; 
  public get awsIamRoleFirewall() {
    return this.getStringAttribute('aws_iam_role_firewall');
  }
  public set awsIamRoleFirewall(value: string) {
    this._awsIamRoleFirewall = value;
  }
  public resetAwsIamRoleFirewall() {
    this._awsIamRoleFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleFirewallInput() {
    return this._awsIamRoleFirewall;
  }

  // azure_resource_group - computed: false, optional: true, required: false
  private _azureResourceGroup?: string; 
  public get azureResourceGroup() {
    return this.getStringAttribute('azure_resource_group');
  }
  public set azureResourceGroup(value: string) {
    this._azureResourceGroup = value;
  }
  public resetAzureResourceGroup() {
    this._azureResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureResourceGroupInput() {
    return this._azureResourceGroup;
  }

  // azure_user_identity_id - computed: false, optional: true, required: false
  private _azureUserIdentityId?: string; 
  public get azureUserIdentityId() {
    return this.getStringAttribute('azure_user_identity_id');
  }
  public set azureUserIdentityId(value: string) {
    this._azureUserIdentityId = value;
  }
  public resetAzureUserIdentityId() {
    this._azureUserIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUserIdentityIdInput() {
    return this._azureUserIdentityId;
  }

  // csp_account_name - computed: false, optional: false, required: true
  private _cspAccountName?: string; 
  public get cspAccountName() {
    return this.getStringAttribute('csp_account_name');
  }
  public set cspAccountName(value: string) {
    this._cspAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAccountNameInput() {
    return this._cspAccountName;
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

  // ftdv_license_model - computed: false, optional: true, required: false
  private _ftdvLicenseModel?: string; 
  public get ftdvLicenseModel() {
    return this.getStringAttribute('ftdv_license_model');
  }
  public set ftdvLicenseModel(value: string) {
    this._ftdvLicenseModel = value;
  }
  public resetFtdvLicenseModel() {
    this._ftdvLicenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftdvLicenseModelInput() {
    return this._ftdvLicenseModel;
  }

  // ftdv_licenses - computed: false, optional: true, required: false
  private _ftdvLicenses?: string[]; 
  public get ftdvLicenses() {
    return cdktf.Fn.tolist(this.getListAttribute('ftdv_licenses'));
  }
  public set ftdvLicenses(value: string[]) {
    this._ftdvLicenses = value;
  }
  public resetFtdvLicenses() {
    this._ftdvLicenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftdvLicensesInput() {
    return this._ftdvLicenses;
  }

  // ftdv_password - computed: false, optional: false, required: true
  private _ftdvPassword?: string; 
  public get ftdvPassword() {
    return this.getStringAttribute('ftdv_password');
  }
  public set ftdvPassword(value: string) {
    this._ftdvPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ftdvPasswordInput() {
    return this._ftdvPassword;
  }

  // ftdv_performance_tier - computed: false, optional: true, required: false
  private _ftdvPerformanceTier?: string; 
  public get ftdvPerformanceTier() {
    return this.getStringAttribute('ftdv_performance_tier');
  }
  public set ftdvPerformanceTier(value: string) {
    this._ftdvPerformanceTier = value;
  }
  public resetFtdvPerformanceTier() {
    this._ftdvPerformanceTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftdvPerformanceTierInput() {
    return this._ftdvPerformanceTier;
  }

  // ftdv_policy_id - computed: false, optional: true, required: false
  private _ftdvPolicyId?: string; 
  public get ftdvPolicyId() {
    return this.getStringAttribute('ftdv_policy_id');
  }
  public set ftdvPolicyId(value: string) {
    this._ftdvPolicyId = value;
  }
  public resetFtdvPolicyId() {
    this._ftdvPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftdvPolicyIdInput() {
    return this._ftdvPolicyId;
  }

  // ftdv_version - computed: false, optional: false, required: true
  private _ftdvVersion?: string; 
  public get ftdvVersion() {
    return this.getStringAttribute('ftdv_version');
  }
  public set ftdvVersion(value: string) {
    this._ftdvVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ftdvVersionInput() {
    return this._ftdvVersion;
  }

  // gateway_endpoint - computed: true, optional: false, required: false
  public get gatewayEndpoint() {
    return this.getStringAttribute('gateway_endpoint');
  }

  // gateway_state - computed: false, optional: true, required: false
  private _gatewayState?: string; 
  public get gatewayState() {
    return this.getStringAttribute('gateway_state');
  }
  public set gatewayState(value: string) {
    this._gatewayState = value;
  }
  public resetGatewayState() {
    this._gatewayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayStateInput() {
    return this._gatewayState;
  }

  // gwlb_service_id - computed: true, optional: false, required: false
  public get gwlbServiceId() {
    return this.getStringAttribute('gwlb_service_id');
  }

  // gwlb_service_name - computed: true, optional: false, required: false
  public get gwlbServiceName() {
    return this.getStringAttribute('gwlb_service_name');
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
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

  // ssh_key_pair - computed: false, optional: true, required: false
  private _sshKeyPair?: string; 
  public get sshKeyPair() {
    return this.getStringAttribute('ssh_key_pair');
  }
  public set sshKeyPair(value: string) {
    this._sshKeyPair = value;
  }
  public resetSshKeyPair() {
    this._sshKeyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPairInput() {
    return this._sshKeyPair;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // wait_for_gateway_state - computed: false, optional: true, required: false
  private _waitForGatewayState?: boolean | cdktf.IResolvable; 
  public get waitForGatewayState() {
    return this.getBooleanAttribute('wait_for_gateway_state');
  }
  public set waitForGatewayState(value: boolean | cdktf.IResolvable) {
    this._waitForGatewayState = value;
  }
  public resetWaitForGatewayState() {
    this._waitForGatewayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForGatewayStateInput() {
    return this._waitForGatewayState;
  }

  // wait_until_gateway_active - computed: false, optional: true, required: false
  private _waitUntilGatewayActive?: boolean | cdktf.IResolvable; 
  public get waitUntilGatewayActive() {
    return this.getBooleanAttribute('wait_until_gateway_active');
  }
  public set waitUntilGatewayActive(value: boolean | cdktf.IResolvable) {
    this._waitUntilGatewayActive = value;
  }
  public resetWaitUntilGatewayActive() {
    this._waitUntilGatewayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilGatewayActiveInput() {
    return this._waitUntilGatewayActive;
  }

  // gateway_lb_integration - computed: false, optional: true, required: false
  private _gatewayLbIntegration = new FtdvGatewayGatewayLbIntegrationList(this, "gateway_lb_integration", false);
  public get gatewayLbIntegration() {
    return this._gatewayLbIntegration;
  }
  public putGatewayLbIntegration(value: FtdvGatewayGatewayLbIntegration[] | cdktf.IResolvable) {
    this._gatewayLbIntegration.internalValue = value;
  }
  public resetGatewayLbIntegration() {
    this._gatewayLbIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayLbIntegrationInput() {
    return this._gatewayLbIntegration.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new FtdvGatewaySettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: FtdvGatewaySettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_iam_role_firewall: cdktf.stringToTerraform(this._awsIamRoleFirewall),
      azure_resource_group: cdktf.stringToTerraform(this._azureResourceGroup),
      azure_user_identity_id: cdktf.stringToTerraform(this._azureUserIdentityId),
      csp_account_name: cdktf.stringToTerraform(this._cspAccountName),
      description: cdktf.stringToTerraform(this._description),
      ftdv_license_model: cdktf.stringToTerraform(this._ftdvLicenseModel),
      ftdv_licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ftdvLicenses),
      ftdv_password: cdktf.stringToTerraform(this._ftdvPassword),
      ftdv_performance_tier: cdktf.stringToTerraform(this._ftdvPerformanceTier),
      ftdv_policy_id: cdktf.stringToTerraform(this._ftdvPolicyId),
      ftdv_version: cdktf.stringToTerraform(this._ftdvVersion),
      gateway_state: cdktf.stringToTerraform(this._gatewayState),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      max_instances: cdktf.numberToTerraform(this._maxInstances),
      min_instances: cdktf.numberToTerraform(this._minInstances),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      ssh_key_pair: cdktf.stringToTerraform(this._sshKeyPair),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wait_for_gateway_state: cdktf.booleanToTerraform(this._waitForGatewayState),
      wait_until_gateway_active: cdktf.booleanToTerraform(this._waitUntilGatewayActive),
      gateway_lb_integration: cdktf.listMapper(ftdvGatewayGatewayLbIntegrationToTerraform, true)(this._gatewayLbIntegration.internalValue),
      settings: cdktf.listMapper(ftdvGatewaySettingsToTerraform, true)(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_iam_role_firewall: {
        value: cdktf.stringToHclTerraform(this._awsIamRoleFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_resource_group: {
        value: cdktf.stringToHclTerraform(this._azureResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_user_identity_id: {
        value: cdktf.stringToHclTerraform(this._azureUserIdentityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_account_name: {
        value: cdktf.stringToHclTerraform(this._cspAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftdv_license_model: {
        value: cdktf.stringToHclTerraform(this._ftdvLicenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftdv_licenses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ftdvLicenses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ftdv_password: {
        value: cdktf.stringToHclTerraform(this._ftdvPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftdv_performance_tier: {
        value: cdktf.stringToHclTerraform(this._ftdvPerformanceTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftdv_policy_id: {
        value: cdktf.stringToHclTerraform(this._ftdvPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftdv_version: {
        value: cdktf.stringToHclTerraform(this._ftdvVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_state: {
        value: cdktf.stringToHclTerraform(this._gatewayState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_port: {
        value: cdktf.numberToHclTerraform(this._healthCheckPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_instances: {
        value: cdktf.numberToHclTerraform(this._maxInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_instances: {
        value: cdktf.numberToHclTerraform(this._minInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_pair: {
        value: cdktf.stringToHclTerraform(this._sshKeyPair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_gateway_state: {
        value: cdktf.booleanToHclTerraform(this._waitForGatewayState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_until_gateway_active: {
        value: cdktf.booleanToHclTerraform(this._waitUntilGatewayActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_lb_integration: {
        value: cdktf.listMapperHcl(ftdvGatewayGatewayLbIntegrationToHclTerraform, true)(this._gatewayLbIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdvGatewayGatewayLbIntegrationList",
      },
      settings: {
        value: cdktf.listMapperHcl(ftdvGatewaySettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FtdvGatewaySettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
