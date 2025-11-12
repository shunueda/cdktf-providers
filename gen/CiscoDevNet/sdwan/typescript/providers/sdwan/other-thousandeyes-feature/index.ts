// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OtherThousandeyesFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#description OtherThousandeyesFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#feature_profile_id OtherThousandeyesFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#name OtherThousandeyesFeature#name}
  */
  readonly name: string;
  /**
  * Virtual application Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#virtual_application OtherThousandeyesFeature#virtual_application}
  */
  readonly virtualApplication?: OtherThousandeyesFeatureVirtualApplication[] | cdktf.IResolvable;
}
export interface OtherThousandeyesFeatureVirtualApplication {
  /**
  * Set the Account Group Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#account_group_token OtherThousandeyesFeature#account_group_token}
  */
  readonly accountGroupToken?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#account_group_token_variable OtherThousandeyesFeature#account_group_token_variable}
  */
  readonly accountGroupTokenVariable?: string;
  /**
  * Set the Agent default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#agent_default_gateway OtherThousandeyesFeature#agent_default_gateway}
  */
  readonly agentDefaultGateway?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#agent_default_gateway_variable OtherThousandeyesFeature#agent_default_gateway_variable}
  */
  readonly agentDefaultGatewayVariable?: string;
  /**
  * Set the host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#hostname OtherThousandeyesFeature#hostname}
  */
  readonly hostname?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#hostname_variable OtherThousandeyesFeature#hostname_variable}
  */
  readonly hostnameVariable?: string;
  /**
  * Set the Agent IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#management_ip OtherThousandeyesFeature#management_ip}
  */
  readonly managementIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#management_ip_variable OtherThousandeyesFeature#management_ip_variable}
  */
  readonly managementIpVariable?: string;
  /**
  * Set the Agent SubnetMask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#management_subnet_mask OtherThousandeyesFeature#management_subnet_mask}
  */
  readonly managementSubnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#management_subnet_mask_variable OtherThousandeyesFeature#management_subnet_mask_variable}
  */
  readonly managementSubnetMaskVariable?: string;
  /**
  * Set the name server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#name_server_ip OtherThousandeyesFeature#name_server_ip}
  */
  readonly nameServerIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#name_server_ip_variable OtherThousandeyesFeature#name_server_ip_variable}
  */
  readonly nameServerIpVariable?: string;
  /**
  * Set the proxy PAC url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#pac_url OtherThousandeyesFeature#pac_url}
  */
  readonly pacUrl?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#pac_url_variable OtherThousandeyesFeature#pac_url_variable}
  */
  readonly pacUrlVariable?: string;
  /**
  * Set the Proxy Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#proxy_host OtherThousandeyesFeature#proxy_host}
  */
  readonly proxyHost?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#proxy_host_variable OtherThousandeyesFeature#proxy_host_variable}
  */
  readonly proxyHostVariable?: string;
  /**
  * Set the Proxy Port
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#proxy_port OtherThousandeyesFeature#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#proxy_port_variable OtherThousandeyesFeature#proxy_port_variable}
  */
  readonly proxyPortVariable?: string;
  /**
  * Select Web Proxy Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#proxy_type OtherThousandeyesFeature#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * VPN number
  *   - Range: `0`-`65530`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#vpn OtherThousandeyesFeature#vpn}
  */
  readonly vpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#vpn_variable OtherThousandeyesFeature#vpn_variable}
  */
  readonly vpnVariable?: string;
}

export function otherThousandeyesFeatureVirtualApplicationToTerraform(struct?: OtherThousandeyesFeatureVirtualApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_group_token: cdktf.stringToTerraform(struct!.accountGroupToken),
    account_group_token_variable: cdktf.stringToTerraform(struct!.accountGroupTokenVariable),
    agent_default_gateway: cdktf.stringToTerraform(struct!.agentDefaultGateway),
    agent_default_gateway_variable: cdktf.stringToTerraform(struct!.agentDefaultGatewayVariable),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hostname_variable: cdktf.stringToTerraform(struct!.hostnameVariable),
    management_ip: cdktf.stringToTerraform(struct!.managementIp),
    management_ip_variable: cdktf.stringToTerraform(struct!.managementIpVariable),
    management_subnet_mask: cdktf.stringToTerraform(struct!.managementSubnetMask),
    management_subnet_mask_variable: cdktf.stringToTerraform(struct!.managementSubnetMaskVariable),
    name_server_ip: cdktf.stringToTerraform(struct!.nameServerIp),
    name_server_ip_variable: cdktf.stringToTerraform(struct!.nameServerIpVariable),
    pac_url: cdktf.stringToTerraform(struct!.pacUrl),
    pac_url_variable: cdktf.stringToTerraform(struct!.pacUrlVariable),
    proxy_host: cdktf.stringToTerraform(struct!.proxyHost),
    proxy_host_variable: cdktf.stringToTerraform(struct!.proxyHostVariable),
    proxy_port: cdktf.numberToTerraform(struct!.proxyPort),
    proxy_port_variable: cdktf.stringToTerraform(struct!.proxyPortVariable),
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
    vpn: cdktf.numberToTerraform(struct!.vpn),
    vpn_variable: cdktf.stringToTerraform(struct!.vpnVariable),
  }
}


export function otherThousandeyesFeatureVirtualApplicationToHclTerraform(struct?: OtherThousandeyesFeatureVirtualApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_group_token: {
      value: cdktf.stringToHclTerraform(struct!.accountGroupToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_group_token_variable: {
      value: cdktf.stringToHclTerraform(struct!.accountGroupTokenVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.agentDefaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_default_gateway_variable: {
      value: cdktf.stringToHclTerraform(struct!.agentDefaultGatewayVariable),
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
    hostname_variable: {
      value: cdktf.stringToHclTerraform(struct!.hostnameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.managementIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.managementSubnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_subnet_mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.managementSubnetMaskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_server_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameServerIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pac_url: {
      value: cdktf.stringToHclTerraform(struct!.pacUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pac_url_variable: {
      value: cdktf.stringToHclTerraform(struct!.pacUrlVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.proxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_host_variable: {
      value: cdktf.stringToHclTerraform(struct!.proxyHostVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.proxyPortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_type: {
      value: cdktf.stringToHclTerraform(struct!.proxyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn: {
      value: cdktf.numberToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtherThousandeyesFeatureVirtualApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtherThousandeyesFeatureVirtualApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountGroupToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountGroupToken = this._accountGroupToken;
    }
    if (this._accountGroupTokenVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountGroupTokenVariable = this._accountGroupTokenVariable;
    }
    if (this._agentDefaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentDefaultGateway = this._agentDefaultGateway;
    }
    if (this._agentDefaultGatewayVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentDefaultGatewayVariable = this._agentDefaultGatewayVariable;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hostnameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameVariable = this._hostnameVariable;
    }
    if (this._managementIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIp = this._managementIp;
    }
    if (this._managementIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIpVariable = this._managementIpVariable;
    }
    if (this._managementSubnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementSubnetMask = this._managementSubnetMask;
    }
    if (this._managementSubnetMaskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementSubnetMaskVariable = this._managementSubnetMaskVariable;
    }
    if (this._nameServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServerIp = this._nameServerIp;
    }
    if (this._nameServerIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServerIpVariable = this._nameServerIpVariable;
    }
    if (this._pacUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacUrl = this._pacUrl;
    }
    if (this._pacUrlVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacUrlVariable = this._pacUrlVariable;
    }
    if (this._proxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHost = this._proxyHost;
    }
    if (this._proxyHostVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHostVariable = this._proxyHostVariable;
    }
    if (this._proxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPort = this._proxyPort;
    }
    if (this._proxyPortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPortVariable = this._proxyPortVariable;
    }
    if (this._proxyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyType = this._proxyType;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    if (this._vpnVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnVariable = this._vpnVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtherThousandeyesFeatureVirtualApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountGroupToken = undefined;
      this._accountGroupTokenVariable = undefined;
      this._agentDefaultGateway = undefined;
      this._agentDefaultGatewayVariable = undefined;
      this._hostname = undefined;
      this._hostnameVariable = undefined;
      this._managementIp = undefined;
      this._managementIpVariable = undefined;
      this._managementSubnetMask = undefined;
      this._managementSubnetMaskVariable = undefined;
      this._nameServerIp = undefined;
      this._nameServerIpVariable = undefined;
      this._pacUrl = undefined;
      this._pacUrlVariable = undefined;
      this._proxyHost = undefined;
      this._proxyHostVariable = undefined;
      this._proxyPort = undefined;
      this._proxyPortVariable = undefined;
      this._proxyType = undefined;
      this._vpn = undefined;
      this._vpnVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountGroupToken = value.accountGroupToken;
      this._accountGroupTokenVariable = value.accountGroupTokenVariable;
      this._agentDefaultGateway = value.agentDefaultGateway;
      this._agentDefaultGatewayVariable = value.agentDefaultGatewayVariable;
      this._hostname = value.hostname;
      this._hostnameVariable = value.hostnameVariable;
      this._managementIp = value.managementIp;
      this._managementIpVariable = value.managementIpVariable;
      this._managementSubnetMask = value.managementSubnetMask;
      this._managementSubnetMaskVariable = value.managementSubnetMaskVariable;
      this._nameServerIp = value.nameServerIp;
      this._nameServerIpVariable = value.nameServerIpVariable;
      this._pacUrl = value.pacUrl;
      this._pacUrlVariable = value.pacUrlVariable;
      this._proxyHost = value.proxyHost;
      this._proxyHostVariable = value.proxyHostVariable;
      this._proxyPort = value.proxyPort;
      this._proxyPortVariable = value.proxyPortVariable;
      this._proxyType = value.proxyType;
      this._vpn = value.vpn;
      this._vpnVariable = value.vpnVariable;
    }
  }

  // account_group_token - computed: false, optional: true, required: false
  private _accountGroupToken?: string; 
  public get accountGroupToken() {
    return this.getStringAttribute('account_group_token');
  }
  public set accountGroupToken(value: string) {
    this._accountGroupToken = value;
  }
  public resetAccountGroupToken() {
    this._accountGroupToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupTokenInput() {
    return this._accountGroupToken;
  }

  // account_group_token_variable - computed: false, optional: true, required: false
  private _accountGroupTokenVariable?: string; 
  public get accountGroupTokenVariable() {
    return this.getStringAttribute('account_group_token_variable');
  }
  public set accountGroupTokenVariable(value: string) {
    this._accountGroupTokenVariable = value;
  }
  public resetAccountGroupTokenVariable() {
    this._accountGroupTokenVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupTokenVariableInput() {
    return this._accountGroupTokenVariable;
  }

  // agent_default_gateway - computed: false, optional: true, required: false
  private _agentDefaultGateway?: string; 
  public get agentDefaultGateway() {
    return this.getStringAttribute('agent_default_gateway');
  }
  public set agentDefaultGateway(value: string) {
    this._agentDefaultGateway = value;
  }
  public resetAgentDefaultGateway() {
    this._agentDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDefaultGatewayInput() {
    return this._agentDefaultGateway;
  }

  // agent_default_gateway_variable - computed: false, optional: true, required: false
  private _agentDefaultGatewayVariable?: string; 
  public get agentDefaultGatewayVariable() {
    return this.getStringAttribute('agent_default_gateway_variable');
  }
  public set agentDefaultGatewayVariable(value: string) {
    this._agentDefaultGatewayVariable = value;
  }
  public resetAgentDefaultGatewayVariable() {
    this._agentDefaultGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDefaultGatewayVariableInput() {
    return this._agentDefaultGatewayVariable;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hostname_variable - computed: false, optional: true, required: false
  private _hostnameVariable?: string; 
  public get hostnameVariable() {
    return this.getStringAttribute('hostname_variable');
  }
  public set hostnameVariable(value: string) {
    this._hostnameVariable = value;
  }
  public resetHostnameVariable() {
    this._hostnameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameVariableInput() {
    return this._hostnameVariable;
  }

  // management_ip - computed: false, optional: true, required: false
  private _managementIp?: string; 
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }
  public set managementIp(value: string) {
    this._managementIp = value;
  }
  public resetManagementIp() {
    this._managementIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpInput() {
    return this._managementIp;
  }

  // management_ip_variable - computed: false, optional: true, required: false
  private _managementIpVariable?: string; 
  public get managementIpVariable() {
    return this.getStringAttribute('management_ip_variable');
  }
  public set managementIpVariable(value: string) {
    this._managementIpVariable = value;
  }
  public resetManagementIpVariable() {
    this._managementIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpVariableInput() {
    return this._managementIpVariable;
  }

  // management_subnet_mask - computed: false, optional: true, required: false
  private _managementSubnetMask?: string; 
  public get managementSubnetMask() {
    return this.getStringAttribute('management_subnet_mask');
  }
  public set managementSubnetMask(value: string) {
    this._managementSubnetMask = value;
  }
  public resetManagementSubnetMask() {
    this._managementSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSubnetMaskInput() {
    return this._managementSubnetMask;
  }

  // management_subnet_mask_variable - computed: false, optional: true, required: false
  private _managementSubnetMaskVariable?: string; 
  public get managementSubnetMaskVariable() {
    return this.getStringAttribute('management_subnet_mask_variable');
  }
  public set managementSubnetMaskVariable(value: string) {
    this._managementSubnetMaskVariable = value;
  }
  public resetManagementSubnetMaskVariable() {
    this._managementSubnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSubnetMaskVariableInput() {
    return this._managementSubnetMaskVariable;
  }

  // name_server_ip - computed: false, optional: true, required: false
  private _nameServerIp?: string; 
  public get nameServerIp() {
    return this.getStringAttribute('name_server_ip');
  }
  public set nameServerIp(value: string) {
    this._nameServerIp = value;
  }
  public resetNameServerIp() {
    this._nameServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerIpInput() {
    return this._nameServerIp;
  }

  // name_server_ip_variable - computed: false, optional: true, required: false
  private _nameServerIpVariable?: string; 
  public get nameServerIpVariable() {
    return this.getStringAttribute('name_server_ip_variable');
  }
  public set nameServerIpVariable(value: string) {
    this._nameServerIpVariable = value;
  }
  public resetNameServerIpVariable() {
    this._nameServerIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerIpVariableInput() {
    return this._nameServerIpVariable;
  }

  // pac_url - computed: false, optional: true, required: false
  private _pacUrl?: string; 
  public get pacUrl() {
    return this.getStringAttribute('pac_url');
  }
  public set pacUrl(value: string) {
    this._pacUrl = value;
  }
  public resetPacUrl() {
    this._pacUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacUrlInput() {
    return this._pacUrl;
  }

  // pac_url_variable - computed: false, optional: true, required: false
  private _pacUrlVariable?: string; 
  public get pacUrlVariable() {
    return this.getStringAttribute('pac_url_variable');
  }
  public set pacUrlVariable(value: string) {
    this._pacUrlVariable = value;
  }
  public resetPacUrlVariable() {
    this._pacUrlVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacUrlVariableInput() {
    return this._pacUrlVariable;
  }

  // proxy_host - computed: false, optional: true, required: false
  private _proxyHost?: string; 
  public get proxyHost() {
    return this.getStringAttribute('proxy_host');
  }
  public set proxyHost(value: string) {
    this._proxyHost = value;
  }
  public resetProxyHost() {
    this._proxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHostInput() {
    return this._proxyHost;
  }

  // proxy_host_variable - computed: false, optional: true, required: false
  private _proxyHostVariable?: string; 
  public get proxyHostVariable() {
    return this.getStringAttribute('proxy_host_variable');
  }
  public set proxyHostVariable(value: string) {
    this._proxyHostVariable = value;
  }
  public resetProxyHostVariable() {
    this._proxyHostVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHostVariableInput() {
    return this._proxyHostVariable;
  }

  // proxy_port - computed: false, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // proxy_port_variable - computed: false, optional: true, required: false
  private _proxyPortVariable?: string; 
  public get proxyPortVariable() {
    return this.getStringAttribute('proxy_port_variable');
  }
  public set proxyPortVariable(value: string) {
    this._proxyPortVariable = value;
  }
  public resetProxyPortVariable() {
    this._proxyPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortVariableInput() {
    return this._proxyPortVariable;
  }

  // proxy_type - computed: false, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: number; 
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
  public set vpn(value: number) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // vpn_variable - computed: false, optional: true, required: false
  private _vpnVariable?: string; 
  public get vpnVariable() {
    return this.getStringAttribute('vpn_variable');
  }
  public set vpnVariable(value: string) {
    this._vpnVariable = value;
  }
  public resetVpnVariable() {
    this._vpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnVariableInput() {
    return this._vpnVariable;
  }
}

export class OtherThousandeyesFeatureVirtualApplicationList extends cdktf.ComplexList {
  public internalValue? : OtherThousandeyesFeatureVirtualApplication[] | cdktf.IResolvable

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
  public get(index: number): OtherThousandeyesFeatureVirtualApplicationOutputReference {
    return new OtherThousandeyesFeatureVirtualApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature sdwan_other_thousandeyes_feature}
*/
export class OtherThousandeyesFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_other_thousandeyes_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OtherThousandeyesFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OtherThousandeyesFeature to import
  * @param importFromId The id of the existing OtherThousandeyesFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OtherThousandeyesFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_other_thousandeyes_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_thousandeyes_feature sdwan_other_thousandeyes_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OtherThousandeyesFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: OtherThousandeyesFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_other_thousandeyes_feature',
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
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._virtualApplication.internalValue = config.virtualApplication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // virtual_application - computed: false, optional: true, required: false
  private _virtualApplication = new OtherThousandeyesFeatureVirtualApplicationList(this, "virtual_application", false);
  public get virtualApplication() {
    return this._virtualApplication;
  }
  public putVirtualApplication(value: OtherThousandeyesFeatureVirtualApplication[] | cdktf.IResolvable) {
    this._virtualApplication.internalValue = value;
  }
  public resetVirtualApplication() {
    this._virtualApplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualApplicationInput() {
    return this._virtualApplication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      virtual_application: cdktf.listMapper(otherThousandeyesFeatureVirtualApplicationToTerraform, false)(this._virtualApplication.internalValue),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      virtual_application: {
        value: cdktf.listMapperHcl(otherThousandeyesFeatureVirtualApplicationToHclTerraform, false)(this._virtualApplication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OtherThousandeyesFeatureVirtualApplicationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
