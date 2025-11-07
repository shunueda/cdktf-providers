// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#aws_gateway_lb Gateway#aws_gateway_lb}
  */
  readonly awsGatewayLb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#aws_iam_role_firewall Gateway#aws_iam_role_firewall}
  */
  readonly awsIamRoleFirewall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#azure_gateway_lb Gateway#azure_gateway_lb}
  */
  readonly azureGatewayLb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#azure_resource_group Gateway#azure_resource_group}
  */
  readonly azureResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#azure_user_identity_id Gateway#azure_user_identity_id}
  */
  readonly azureUserIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#azure_user_name Gateway#azure_user_name}
  */
  readonly azureUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#bgp_profile Gateway#bgp_profile}
  */
  readonly bgpProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#csp_account_name Gateway#csp_account_name}
  */
  readonly cspAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#datapath_security_group Gateway#datapath_security_group}
  */
  readonly datapathSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#description Gateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#diagnostics_profile Gateway#diagnostics_profile}
  */
  readonly diagnosticsProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#gateway_image Gateway#gateway_image}
  */
  readonly gatewayImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#gateway_state Gateway#gateway_state}
  */
  readonly gatewayState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#gcp_service_account_email Gateway#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#gcp_user_name Gateway#gcp_user_name}
  */
  readonly gcpUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#health_check_port Gateway#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#instance_type Gateway#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#log_profile Gateway#log_profile}
  */
  readonly logProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#max_instances Gateway#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#metrics_profile Gateway#metrics_profile}
  */
  readonly metricsProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#mgmt_security_group Gateway#mgmt_security_group}
  */
  readonly mgmtSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#mgmt_vpc_id Gateway#mgmt_vpc_id}
  */
  readonly mgmtVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#min_instances Gateway#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#mode Gateway#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#ntp_profile Gateway#ntp_profile}
  */
  readonly ntpProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#oci_compartment_id Gateway#oci_compartment_id}
  */
  readonly ociCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#packet_capture_profile Gateway#packet_capture_profile}
  */
  readonly packetCaptureProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#policy_rule_set_id Gateway#policy_rule_set_id}
  */
  readonly policyRuleSetId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#region Gateway#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#security_type Gateway#security_type}
  */
  readonly securityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#ssh_key_pair Gateway#ssh_key_pair}
  */
  readonly sshKeyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#ssh_public_key Gateway#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#tags Gateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#transit_gateway_id Gateway#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#username Gateway#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#vpc_id Gateway#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#vpn_connection_set_id Gateway#vpn_connection_set_id}
  */
  readonly vpnConnectionSetId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#vpn_enable Gateway#vpn_enable}
  */
  readonly vpnEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#wait_for_gateway_state Gateway#wait_for_gateway_state}
  */
  readonly waitForGatewayState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#wait_until_gateway_active Gateway#wait_until_gateway_active}
  */
  readonly waitUntilGatewayActive?: boolean | cdktf.IResolvable;
  /**
  * gateway_gwlb_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#gateway_gwlb_endpoints Gateway#gateway_gwlb_endpoints}
  */
  readonly gatewayGwlbEndpoints?: GatewayGatewayGwlbEndpoints[] | cdktf.IResolvable;
  /**
  * gateway_lb_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#gateway_lb_integration Gateway#gateway_lb_integration}
  */
  readonly gatewayLbIntegration?: GatewayGatewayLbIntegration[] | cdktf.IResolvable;
  /**
  * instance_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#instance_details Gateway#instance_details}
  */
  readonly instanceDetails?: GatewayInstanceDetails[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#settings Gateway#settings}
  */
  readonly settings?: GatewaySettings[] | cdktf.IResolvable;
}
export interface GatewayGatewayGwlbEndpoints {
}

export function gatewayGatewayGwlbEndpointsToTerraform(struct?: GatewayGatewayGwlbEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gatewayGatewayGwlbEndpointsToHclTerraform(struct?: GatewayGatewayGwlbEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GatewayGatewayGwlbEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayGatewayGwlbEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayGatewayGwlbEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class GatewayGatewayGwlbEndpointsList extends cdktf.ComplexList {
  public internalValue? : GatewayGatewayGwlbEndpoints[] | cdktf.IResolvable

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
  public get(index: number): GatewayGatewayGwlbEndpointsOutputReference {
    return new GatewayGatewayGwlbEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayGatewayLbIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#awsga_endpoint_group_arn Gateway#awsga_endpoint_group_arn}
  */
  readonly awsgaEndpointGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#awsga_resource_arn Gateway#awsga_resource_arn}
  */
  readonly awsgaResourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#awsga_resource_fqdn Gateway#awsga_resource_fqdn}
  */
  readonly awsgaResourceFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#awsga_resource_name Gateway#awsga_resource_name}
  */
  readonly awsgaResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#azure_lb_backendpool_name Gateway#azure_lb_backendpool_name}
  */
  readonly azureLbBackendpoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#azure_lb_name Gateway#azure_lb_name}
  */
  readonly azureLbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#azure_lb_resourcegroup Gateway#azure_lb_resourcegroup}
  */
  readonly azureLbResourcegroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#type Gateway#type}
  */
  readonly type: string;
}

export function gatewayGatewayLbIntegrationToTerraform(struct?: GatewayGatewayLbIntegration | cdktf.IResolvable): any {
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


export function gatewayGatewayLbIntegrationToHclTerraform(struct?: GatewayGatewayLbIntegration | cdktf.IResolvable): any {
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

export class GatewayGatewayLbIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayGatewayLbIntegration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayGatewayLbIntegration | cdktf.IResolvable | undefined) {
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

export class GatewayGatewayLbIntegrationList extends cdktf.ComplexList {
  public internalValue? : GatewayGatewayLbIntegration[] | cdktf.IResolvable

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
  public get(index: number): GatewayGatewayLbIntegrationOutputReference {
    return new GatewayGatewayLbIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayInstanceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#availability_zone Gateway#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#datapath_subnet Gateway#datapath_subnet}
  */
  readonly datapathSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#mgmt_subnet Gateway#mgmt_subnet}
  */
  readonly mgmtSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#private_subnet Gateway#private_subnet}
  */
  readonly privateSubnet?: string;
}

export function gatewayInstanceDetailsToTerraform(struct?: GatewayInstanceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    datapath_subnet: cdktf.stringToTerraform(struct!.datapathSubnet),
    mgmt_subnet: cdktf.stringToTerraform(struct!.mgmtSubnet),
    private_subnet: cdktf.stringToTerraform(struct!.privateSubnet),
  }
}


export function gatewayInstanceDetailsToHclTerraform(struct?: GatewayInstanceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datapath_subnet: {
      value: cdktf.stringToHclTerraform(struct!.datapathSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_subnet: {
      value: cdktf.stringToHclTerraform(struct!.mgmtSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_subnet: {
      value: cdktf.stringToHclTerraform(struct!.privateSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayInstanceDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._datapathSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.datapathSubnet = this._datapathSubnet;
    }
    if (this._mgmtSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtSubnet = this._mgmtSubnet;
    }
    if (this._privateSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateSubnet = this._privateSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInstanceDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._datapathSubnet = undefined;
      this._mgmtSubnet = undefined;
      this._privateSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._datapathSubnet = value.datapathSubnet;
      this._mgmtSubnet = value.mgmtSubnet;
      this._privateSubnet = value.privateSubnet;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // datapath_private_ip - computed: true, optional: false, required: false
  public get datapathPrivateIp() {
    return this.getStringAttribute('datapath_private_ip');
  }

  // datapath_public_ip - computed: true, optional: false, required: false
  public get datapathPublicIp() {
    return this.getStringAttribute('datapath_public_ip');
  }

  // datapath_subnet - computed: false, optional: false, required: true
  private _datapathSubnet?: string; 
  public get datapathSubnet() {
    return this.getStringAttribute('datapath_subnet');
  }
  public set datapathSubnet(value: string) {
    this._datapathSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathSubnetInput() {
    return this._datapathSubnet;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // mgmt_private_ip - computed: true, optional: false, required: false
  public get mgmtPrivateIp() {
    return this.getStringAttribute('mgmt_private_ip');
  }

  // mgmt_public_ip - computed: true, optional: false, required: false
  public get mgmtPublicIp() {
    return this.getStringAttribute('mgmt_public_ip');
  }

  // mgmt_subnet - computed: false, optional: false, required: true
  private _mgmtSubnet?: string; 
  public get mgmtSubnet() {
    return this.getStringAttribute('mgmt_subnet');
  }
  public set mgmtSubnet(value: string) {
    this._mgmtSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtSubnetInput() {
    return this._mgmtSubnet;
  }

  // private_subnet - computed: false, optional: true, required: false
  private _privateSubnet?: string; 
  public get privateSubnet() {
    return this.getStringAttribute('private_subnet');
  }
  public set privateSubnet(value: string) {
    this._privateSubnet = value;
  }
  public resetPrivateSubnet() {
    this._privateSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetInput() {
    return this._privateSubnet;
  }
}

export class GatewayInstanceDetailsList extends cdktf.ComplexList {
  public internalValue? : GatewayInstanceDetails[] | cdktf.IResolvable

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
  public get(index: number): GatewayInstanceDetailsOutputReference {
    return new GatewayInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewaySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#value Gateway#value}
  */
  readonly value: string;
}

export function gatewaySettingsToTerraform(struct?: GatewaySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gatewaySettingsToHclTerraform(struct?: GatewaySettings | cdktf.IResolvable): any {
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

export class GatewaySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewaySettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewaySettings | cdktf.IResolvable | undefined) {
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

export class GatewaySettingsList extends cdktf.ComplexList {
  public internalValue? : GatewaySettings[] | cdktf.IResolvable

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
  public get(index: number): GatewaySettingsOutputReference {
    return new GatewaySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway valtix_gateway}
*/
export class Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gateway to import
  * @param importFromId The id of the existing Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/gateway valtix_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_gateway',
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
    this._awsGatewayLb = config.awsGatewayLb;
    this._awsIamRoleFirewall = config.awsIamRoleFirewall;
    this._azureGatewayLb = config.azureGatewayLb;
    this._azureResourceGroup = config.azureResourceGroup;
    this._azureUserIdentityId = config.azureUserIdentityId;
    this._azureUserName = config.azureUserName;
    this._bgpProfile = config.bgpProfile;
    this._cspAccountName = config.cspAccountName;
    this._datapathSecurityGroup = config.datapathSecurityGroup;
    this._description = config.description;
    this._diagnosticsProfile = config.diagnosticsProfile;
    this._gatewayImage = config.gatewayImage;
    this._gatewayState = config.gatewayState;
    this._gcpServiceAccountEmail = config.gcpServiceAccountEmail;
    this._gcpUserName = config.gcpUserName;
    this._healthCheckPort = config.healthCheckPort;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._logProfile = config.logProfile;
    this._maxInstances = config.maxInstances;
    this._metricsProfile = config.metricsProfile;
    this._mgmtSecurityGroup = config.mgmtSecurityGroup;
    this._mgmtVpcId = config.mgmtVpcId;
    this._minInstances = config.minInstances;
    this._mode = config.mode;
    this._name = config.name;
    this._ntpProfile = config.ntpProfile;
    this._ociCompartmentId = config.ociCompartmentId;
    this._packetCaptureProfile = config.packetCaptureProfile;
    this._policyRuleSetId = config.policyRuleSetId;
    this._region = config.region;
    this._securityType = config.securityType;
    this._sshKeyPair = config.sshKeyPair;
    this._sshPublicKey = config.sshPublicKey;
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
    this._username = config.username;
    this._vpcId = config.vpcId;
    this._vpnConnectionSetId = config.vpnConnectionSetId;
    this._vpnEnable = config.vpnEnable;
    this._waitForGatewayState = config.waitForGatewayState;
    this._waitUntilGatewayActive = config.waitUntilGatewayActive;
    this._gatewayGwlbEndpoints.internalValue = config.gatewayGwlbEndpoints;
    this._gatewayLbIntegration.internalValue = config.gatewayLbIntegration;
    this._instanceDetails.internalValue = config.instanceDetails;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_gateway_lb - computed: false, optional: true, required: false
  private _awsGatewayLb?: boolean | cdktf.IResolvable; 
  public get awsGatewayLb() {
    return this.getBooleanAttribute('aws_gateway_lb');
  }
  public set awsGatewayLb(value: boolean | cdktf.IResolvable) {
    this._awsGatewayLb = value;
  }
  public resetAwsGatewayLb() {
    this._awsGatewayLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGatewayLbInput() {
    return this._awsGatewayLb;
  }

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

  // azure_gateway_lb - computed: false, optional: true, required: false
  private _azureGatewayLb?: boolean | cdktf.IResolvable; 
  public get azureGatewayLb() {
    return this.getBooleanAttribute('azure_gateway_lb');
  }
  public set azureGatewayLb(value: boolean | cdktf.IResolvable) {
    this._azureGatewayLb = value;
  }
  public resetAzureGatewayLb() {
    this._azureGatewayLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureGatewayLbInput() {
    return this._azureGatewayLb;
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

  // azure_user_name - computed: false, optional: true, required: false
  private _azureUserName?: string; 
  public get azureUserName() {
    return this.getStringAttribute('azure_user_name');
  }
  public set azureUserName(value: string) {
    this._azureUserName = value;
  }
  public resetAzureUserName() {
    this._azureUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUserNameInput() {
    return this._azureUserName;
  }

  // bgp_profile - computed: false, optional: true, required: false
  private _bgpProfile?: number; 
  public get bgpProfile() {
    return this.getNumberAttribute('bgp_profile');
  }
  public set bgpProfile(value: number) {
    this._bgpProfile = value;
  }
  public resetBgpProfile() {
    this._bgpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpProfileInput() {
    return this._bgpProfile;
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

  // datapath_security_group - computed: true, optional: true, required: false
  private _datapathSecurityGroup?: string; 
  public get datapathSecurityGroup() {
    return this.getStringAttribute('datapath_security_group');
  }
  public set datapathSecurityGroup(value: string) {
    this._datapathSecurityGroup = value;
  }
  public resetDatapathSecurityGroup() {
    this._datapathSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathSecurityGroupInput() {
    return this._datapathSecurityGroup;
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

  // diagnostics_profile - computed: false, optional: true, required: false
  private _diagnosticsProfile?: number; 
  public get diagnosticsProfile() {
    return this.getNumberAttribute('diagnostics_profile');
  }
  public set diagnosticsProfile(value: number) {
    this._diagnosticsProfile = value;
  }
  public resetDiagnosticsProfile() {
    this._diagnosticsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsProfileInput() {
    return this._diagnosticsProfile;
  }

  // gateway_endpoint - computed: true, optional: false, required: false
  public get gatewayEndpoint() {
    return this.getStringAttribute('gateway_endpoint');
  }

  // gateway_image - computed: false, optional: false, required: true
  private _gatewayImage?: string; 
  public get gatewayImage() {
    return this.getStringAttribute('gateway_image');
  }
  public set gatewayImage(value: string) {
    this._gatewayImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayImageInput() {
    return this._gatewayImage;
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

  // gcp_lb_forwarding_rule_name - computed: true, optional: false, required: false
  public get gcpLbForwardingRuleName() {
    return this.getStringAttribute('gcp_lb_forwarding_rule_name');
  }

  // gcp_service_account_email - computed: false, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }

  // gcp_user_name - computed: false, optional: true, required: false
  private _gcpUserName?: string; 
  public get gcpUserName() {
    return this.getStringAttribute('gcp_user_name');
  }
  public set gcpUserName(value: string) {
    this._gcpUserName = value;
  }
  public resetGcpUserName() {
    this._gcpUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpUserNameInput() {
    return this._gcpUserName;
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

  // log_profile - computed: false, optional: true, required: false
  private _logProfile?: number; 
  public get logProfile() {
    return this.getNumberAttribute('log_profile');
  }
  public set logProfile(value: number) {
    this._logProfile = value;
  }
  public resetLogProfile() {
    this._logProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProfileInput() {
    return this._logProfile;
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

  // metrics_profile - computed: false, optional: true, required: false
  private _metricsProfile?: number; 
  public get metricsProfile() {
    return this.getNumberAttribute('metrics_profile');
  }
  public set metricsProfile(value: number) {
    this._metricsProfile = value;
  }
  public resetMetricsProfile() {
    this._metricsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsProfileInput() {
    return this._metricsProfile;
  }

  // mgmt_security_group - computed: true, optional: true, required: false
  private _mgmtSecurityGroup?: string; 
  public get mgmtSecurityGroup() {
    return this.getStringAttribute('mgmt_security_group');
  }
  public set mgmtSecurityGroup(value: string) {
    this._mgmtSecurityGroup = value;
  }
  public resetMgmtSecurityGroup() {
    this._mgmtSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtSecurityGroupInput() {
    return this._mgmtSecurityGroup;
  }

  // mgmt_vpc_id - computed: false, optional: true, required: false
  private _mgmtVpcId?: string; 
  public get mgmtVpcId() {
    return this.getStringAttribute('mgmt_vpc_id');
  }
  public set mgmtVpcId(value: string) {
    this._mgmtVpcId = value;
  }
  public resetMgmtVpcId() {
    this._mgmtVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtVpcIdInput() {
    return this._mgmtVpcId;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // ntp_profile - computed: false, optional: true, required: false
  private _ntpProfile?: number; 
  public get ntpProfile() {
    return this.getNumberAttribute('ntp_profile');
  }
  public set ntpProfile(value: number) {
    this._ntpProfile = value;
  }
  public resetNtpProfile() {
    this._ntpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpProfileInput() {
    return this._ntpProfile;
  }

  // oci_compartment_id - computed: false, optional: true, required: false
  private _ociCompartmentId?: string; 
  public get ociCompartmentId() {
    return this.getStringAttribute('oci_compartment_id');
  }
  public set ociCompartmentId(value: string) {
    this._ociCompartmentId = value;
  }
  public resetOciCompartmentId() {
    this._ociCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCompartmentIdInput() {
    return this._ociCompartmentId;
  }

  // packet_capture_profile - computed: false, optional: true, required: false
  private _packetCaptureProfile?: number; 
  public get packetCaptureProfile() {
    return this.getNumberAttribute('packet_capture_profile');
  }
  public set packetCaptureProfile(value: number) {
    this._packetCaptureProfile = value;
  }
  public resetPacketCaptureProfile() {
    this._packetCaptureProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureProfileInput() {
    return this._packetCaptureProfile;
  }

  // policy_rule_set_id - computed: false, optional: false, required: true
  private _policyRuleSetId?: number; 
  public get policyRuleSetId() {
    return this.getNumberAttribute('policy_rule_set_id');
  }
  public set policyRuleSetId(value: number) {
    this._policyRuleSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleSetIdInput() {
    return this._policyRuleSetId;
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

  // security_type - computed: false, optional: true, required: false
  private _securityType?: string; 
  public get securityType() {
    return this.getStringAttribute('security_type');
  }
  public set securityType(value: string) {
    this._securityType = value;
  }
  public resetSecurityType() {
    this._securityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeInput() {
    return this._securityType;
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

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

  // vpn_connection_set_id - computed: false, optional: true, required: false
  private _vpnConnectionSetId?: number; 
  public get vpnConnectionSetId() {
    return this.getNumberAttribute('vpn_connection_set_id');
  }
  public set vpnConnectionSetId(value: number) {
    this._vpnConnectionSetId = value;
  }
  public resetVpnConnectionSetId() {
    this._vpnConnectionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionSetIdInput() {
    return this._vpnConnectionSetId;
  }

  // vpn_enable - computed: false, optional: true, required: false
  private _vpnEnable?: boolean | cdktf.IResolvable; 
  public get vpnEnable() {
    return this.getBooleanAttribute('vpn_enable');
  }
  public set vpnEnable(value: boolean | cdktf.IResolvable) {
    this._vpnEnable = value;
  }
  public resetVpnEnable() {
    this._vpnEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEnableInput() {
    return this._vpnEnable;
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

  // gateway_gwlb_endpoints - computed: false, optional: true, required: false
  private _gatewayGwlbEndpoints = new GatewayGatewayGwlbEndpointsList(this, "gateway_gwlb_endpoints", false);
  public get gatewayGwlbEndpoints() {
    return this._gatewayGwlbEndpoints;
  }
  public putGatewayGwlbEndpoints(value: GatewayGatewayGwlbEndpoints[] | cdktf.IResolvable) {
    this._gatewayGwlbEndpoints.internalValue = value;
  }
  public resetGatewayGwlbEndpoints() {
    this._gatewayGwlbEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayGwlbEndpointsInput() {
    return this._gatewayGwlbEndpoints.internalValue;
  }

  // gateway_lb_integration - computed: false, optional: true, required: false
  private _gatewayLbIntegration = new GatewayGatewayLbIntegrationList(this, "gateway_lb_integration", false);
  public get gatewayLbIntegration() {
    return this._gatewayLbIntegration;
  }
  public putGatewayLbIntegration(value: GatewayGatewayLbIntegration[] | cdktf.IResolvable) {
    this._gatewayLbIntegration.internalValue = value;
  }
  public resetGatewayLbIntegration() {
    this._gatewayLbIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayLbIntegrationInput() {
    return this._gatewayLbIntegration.internalValue;
  }

  // instance_details - computed: false, optional: true, required: false
  private _instanceDetails = new GatewayInstanceDetailsList(this, "instance_details", false);
  public get instanceDetails() {
    return this._instanceDetails;
  }
  public putInstanceDetails(value: GatewayInstanceDetails[] | cdktf.IResolvable) {
    this._instanceDetails.internalValue = value;
  }
  public resetInstanceDetails() {
    this._instanceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDetailsInput() {
    return this._instanceDetails.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new GatewaySettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GatewaySettings[] | cdktf.IResolvable) {
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
      aws_gateway_lb: cdktf.booleanToTerraform(this._awsGatewayLb),
      aws_iam_role_firewall: cdktf.stringToTerraform(this._awsIamRoleFirewall),
      azure_gateway_lb: cdktf.booleanToTerraform(this._azureGatewayLb),
      azure_resource_group: cdktf.stringToTerraform(this._azureResourceGroup),
      azure_user_identity_id: cdktf.stringToTerraform(this._azureUserIdentityId),
      azure_user_name: cdktf.stringToTerraform(this._azureUserName),
      bgp_profile: cdktf.numberToTerraform(this._bgpProfile),
      csp_account_name: cdktf.stringToTerraform(this._cspAccountName),
      datapath_security_group: cdktf.stringToTerraform(this._datapathSecurityGroup),
      description: cdktf.stringToTerraform(this._description),
      diagnostics_profile: cdktf.numberToTerraform(this._diagnosticsProfile),
      gateway_image: cdktf.stringToTerraform(this._gatewayImage),
      gateway_state: cdktf.stringToTerraform(this._gatewayState),
      gcp_service_account_email: cdktf.stringToTerraform(this._gcpServiceAccountEmail),
      gcp_user_name: cdktf.stringToTerraform(this._gcpUserName),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      log_profile: cdktf.numberToTerraform(this._logProfile),
      max_instances: cdktf.numberToTerraform(this._maxInstances),
      metrics_profile: cdktf.numberToTerraform(this._metricsProfile),
      mgmt_security_group: cdktf.stringToTerraform(this._mgmtSecurityGroup),
      mgmt_vpc_id: cdktf.stringToTerraform(this._mgmtVpcId),
      min_instances: cdktf.numberToTerraform(this._minInstances),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      ntp_profile: cdktf.numberToTerraform(this._ntpProfile),
      oci_compartment_id: cdktf.stringToTerraform(this._ociCompartmentId),
      packet_capture_profile: cdktf.numberToTerraform(this._packetCaptureProfile),
      policy_rule_set_id: cdktf.numberToTerraform(this._policyRuleSetId),
      region: cdktf.stringToTerraform(this._region),
      security_type: cdktf.stringToTerraform(this._securityType),
      ssh_key_pair: cdktf.stringToTerraform(this._sshKeyPair),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      username: cdktf.stringToTerraform(this._username),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpn_connection_set_id: cdktf.numberToTerraform(this._vpnConnectionSetId),
      vpn_enable: cdktf.booleanToTerraform(this._vpnEnable),
      wait_for_gateway_state: cdktf.booleanToTerraform(this._waitForGatewayState),
      wait_until_gateway_active: cdktf.booleanToTerraform(this._waitUntilGatewayActive),
      gateway_gwlb_endpoints: cdktf.listMapper(gatewayGatewayGwlbEndpointsToTerraform, true)(this._gatewayGwlbEndpoints.internalValue),
      gateway_lb_integration: cdktf.listMapper(gatewayGatewayLbIntegrationToTerraform, true)(this._gatewayLbIntegration.internalValue),
      instance_details: cdktf.listMapper(gatewayInstanceDetailsToTerraform, true)(this._instanceDetails.internalValue),
      settings: cdktf.listMapper(gatewaySettingsToTerraform, true)(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_gateway_lb: {
        value: cdktf.booleanToHclTerraform(this._awsGatewayLb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_iam_role_firewall: {
        value: cdktf.stringToHclTerraform(this._awsIamRoleFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_gateway_lb: {
        value: cdktf.booleanToHclTerraform(this._azureGatewayLb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      azure_user_name: {
        value: cdktf.stringToHclTerraform(this._azureUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_profile: {
        value: cdktf.numberToHclTerraform(this._bgpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      csp_account_name: {
        value: cdktf.stringToHclTerraform(this._cspAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datapath_security_group: {
        value: cdktf.stringToHclTerraform(this._datapathSecurityGroup),
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
      diagnostics_profile: {
        value: cdktf.numberToHclTerraform(this._diagnosticsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_image: {
        value: cdktf.stringToHclTerraform(this._gatewayImage),
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
      gcp_service_account_email: {
        value: cdktf.stringToHclTerraform(this._gcpServiceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_user_name: {
        value: cdktf.stringToHclTerraform(this._gcpUserName),
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
      log_profile: {
        value: cdktf.numberToHclTerraform(this._logProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_instances: {
        value: cdktf.numberToHclTerraform(this._maxInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_profile: {
        value: cdktf.numberToHclTerraform(this._metricsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmt_security_group: {
        value: cdktf.stringToHclTerraform(this._mgmtSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_vpc_id: {
        value: cdktf.stringToHclTerraform(this._mgmtVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_instances: {
        value: cdktf.numberToHclTerraform(this._minInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      ntp_profile: {
        value: cdktf.numberToHclTerraform(this._ntpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oci_compartment_id: {
        value: cdktf.stringToHclTerraform(this._ociCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture_profile: {
        value: cdktf.numberToHclTerraform(this._packetCaptureProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_rule_set_id: {
        value: cdktf.numberToHclTerraform(this._policyRuleSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_type: {
        value: cdktf.stringToHclTerraform(this._securityType),
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
      transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_connection_set_id: {
        value: cdktf.numberToHclTerraform(this._vpnConnectionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpn_enable: {
        value: cdktf.booleanToHclTerraform(this._vpnEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      gateway_gwlb_endpoints: {
        value: cdktf.listMapperHcl(gatewayGatewayGwlbEndpointsToHclTerraform, true)(this._gatewayGwlbEndpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayGatewayGwlbEndpointsList",
      },
      gateway_lb_integration: {
        value: cdktf.listMapperHcl(gatewayGatewayLbIntegrationToHclTerraform, true)(this._gatewayLbIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayGatewayLbIntegrationList",
      },
      instance_details: {
        value: cdktf.listMapperHcl(gatewayInstanceDetailsToHclTerraform, true)(this._instanceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayInstanceDetailsList",
      },
      settings: {
        value: cdktf.listMapperHcl(gatewaySettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewaySettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
