// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoThousandeyesFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#description CiscoThousandeyesFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#device_types CiscoThousandeyesFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#name CiscoThousandeyesFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Virtual application Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#virtual_applications CiscoThousandeyesFeatureTemplate#virtual_applications}
  */
  readonly virtualApplications?: CiscoThousandeyesFeatureTemplateVirtualApplications[] | cdktf.IResolvable;
}
export interface CiscoThousandeyesFeatureTemplateVirtualApplications {
  /**
  * List of Virtual applications
  *   - Default value: `te`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#application_type CiscoThousandeyesFeatureTemplate#application_type}
  */
  readonly applicationType?: string;
  /**
  * List of Virtual applications
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#instance_id CiscoThousandeyesFeatureTemplate#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#optional CiscoThousandeyesFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the Account Group Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_account_group_token CiscoThousandeyesFeatureTemplate#te_account_group_token}
  */
  readonly teAccountGroupToken?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_account_group_token_variable CiscoThousandeyesFeatureTemplate#te_account_group_token_variable}
  */
  readonly teAccountGroupTokenVariable?: string;
  /**
  * Set the Agent IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_agent_ip CiscoThousandeyesFeatureTemplate#te_agent_ip}
  */
  readonly teAgentIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_agent_ip_variable CiscoThousandeyesFeatureTemplate#te_agent_ip_variable}
  */
  readonly teAgentIpVariable?: string;
  /**
  * Set the Agent default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_default_gateway CiscoThousandeyesFeatureTemplate#te_default_gateway}
  */
  readonly teDefaultGateway?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_default_gateway_variable CiscoThousandeyesFeatureTemplate#te_default_gateway_variable}
  */
  readonly teDefaultGatewayVariable?: string;
  /**
  * Set the host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_hostname CiscoThousandeyesFeatureTemplate#te_hostname}
  */
  readonly teHostname?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_hostname_variable CiscoThousandeyesFeatureTemplate#te_hostname_variable}
  */
  readonly teHostnameVariable?: string;
  /**
  * Set the name server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_name_server CiscoThousandeyesFeatureTemplate#te_name_server}
  */
  readonly teNameServer?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_name_server_variable CiscoThousandeyesFeatureTemplate#te_name_server_variable}
  */
  readonly teNameServerVariable?: string;
  /**
  * PAC URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_pac_url CiscoThousandeyesFeatureTemplate#te_pac_url}
  */
  readonly tePacUrl?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_pac_url_variable CiscoThousandeyesFeatureTemplate#te_pac_url_variable}
  */
  readonly tePacUrlVariable?: string;
  /**
  * Set the proxy host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_proxy_host CiscoThousandeyesFeatureTemplate#te_proxy_host}
  */
  readonly teProxyHost?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_proxy_host_variable CiscoThousandeyesFeatureTemplate#te_proxy_host_variable}
  */
  readonly teProxyHostVariable?: string;
  /**
  * Set the proxy port
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_proxy_port CiscoThousandeyesFeatureTemplate#te_proxy_port}
  */
  readonly teProxyPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_proxy_port_variable CiscoThousandeyesFeatureTemplate#te_proxy_port_variable}
  */
  readonly teProxyPortVariable?: string;
  /**
  * VPN number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_vpn CiscoThousandeyesFeatureTemplate#te_vpn}
  */
  readonly teVpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_vpn_variable CiscoThousandeyesFeatureTemplate#te_vpn_variable}
  */
  readonly teVpnVariable?: string;
  /**
  * Web Proxy Type
  *   - Choices: `none`, `static`, `pac`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#te_web_proxy_type CiscoThousandeyesFeatureTemplate#te_web_proxy_type}
  */
  readonly teWebProxyType?: string;
}

export function ciscoThousandeyesFeatureTemplateVirtualApplicationsToTerraform(struct?: CiscoThousandeyesFeatureTemplateVirtualApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_type: cdktf.stringToTerraform(struct!.applicationType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    optional: cdktf.booleanToTerraform(struct!.optional),
    te_account_group_token: cdktf.stringToTerraform(struct!.teAccountGroupToken),
    te_account_group_token_variable: cdktf.stringToTerraform(struct!.teAccountGroupTokenVariable),
    te_agent_ip: cdktf.stringToTerraform(struct!.teAgentIp),
    te_agent_ip_variable: cdktf.stringToTerraform(struct!.teAgentIpVariable),
    te_default_gateway: cdktf.stringToTerraform(struct!.teDefaultGateway),
    te_default_gateway_variable: cdktf.stringToTerraform(struct!.teDefaultGatewayVariable),
    te_hostname: cdktf.stringToTerraform(struct!.teHostname),
    te_hostname_variable: cdktf.stringToTerraform(struct!.teHostnameVariable),
    te_name_server: cdktf.stringToTerraform(struct!.teNameServer),
    te_name_server_variable: cdktf.stringToTerraform(struct!.teNameServerVariable),
    te_pac_url: cdktf.stringToTerraform(struct!.tePacUrl),
    te_pac_url_variable: cdktf.stringToTerraform(struct!.tePacUrlVariable),
    te_proxy_host: cdktf.stringToTerraform(struct!.teProxyHost),
    te_proxy_host_variable: cdktf.stringToTerraform(struct!.teProxyHostVariable),
    te_proxy_port: cdktf.numberToTerraform(struct!.teProxyPort),
    te_proxy_port_variable: cdktf.stringToTerraform(struct!.teProxyPortVariable),
    te_vpn: cdktf.numberToTerraform(struct!.teVpn),
    te_vpn_variable: cdktf.stringToTerraform(struct!.teVpnVariable),
    te_web_proxy_type: cdktf.stringToTerraform(struct!.teWebProxyType),
  }
}


export function ciscoThousandeyesFeatureTemplateVirtualApplicationsToHclTerraform(struct?: CiscoThousandeyesFeatureTemplateVirtualApplications | cdktf.IResolvable): any {
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
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
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
    te_account_group_token: {
      value: cdktf.stringToHclTerraform(struct!.teAccountGroupToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_account_group_token_variable: {
      value: cdktf.stringToHclTerraform(struct!.teAccountGroupTokenVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_agent_ip: {
      value: cdktf.stringToHclTerraform(struct!.teAgentIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_agent_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.teAgentIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.teDefaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_default_gateway_variable: {
      value: cdktf.stringToHclTerraform(struct!.teDefaultGatewayVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_hostname: {
      value: cdktf.stringToHclTerraform(struct!.teHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_hostname_variable: {
      value: cdktf.stringToHclTerraform(struct!.teHostnameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_name_server: {
      value: cdktf.stringToHclTerraform(struct!.teNameServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_name_server_variable: {
      value: cdktf.stringToHclTerraform(struct!.teNameServerVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_pac_url: {
      value: cdktf.stringToHclTerraform(struct!.tePacUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_pac_url_variable: {
      value: cdktf.stringToHclTerraform(struct!.tePacUrlVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.teProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_proxy_host_variable: {
      value: cdktf.stringToHclTerraform(struct!.teProxyHostVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.teProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    te_proxy_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.teProxyPortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_vpn: {
      value: cdktf.numberToHclTerraform(struct!.teVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    te_vpn_variable: {
      value: cdktf.stringToHclTerraform(struct!.teVpnVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    te_web_proxy_type: {
      value: cdktf.stringToHclTerraform(struct!.teWebProxyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoThousandeyesFeatureTemplateVirtualApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoThousandeyesFeatureTemplateVirtualApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._teAccountGroupToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.teAccountGroupToken = this._teAccountGroupToken;
    }
    if (this._teAccountGroupTokenVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.teAccountGroupTokenVariable = this._teAccountGroupTokenVariable;
    }
    if (this._teAgentIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.teAgentIp = this._teAgentIp;
    }
    if (this._teAgentIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.teAgentIpVariable = this._teAgentIpVariable;
    }
    if (this._teDefaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.teDefaultGateway = this._teDefaultGateway;
    }
    if (this._teDefaultGatewayVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.teDefaultGatewayVariable = this._teDefaultGatewayVariable;
    }
    if (this._teHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.teHostname = this._teHostname;
    }
    if (this._teHostnameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.teHostnameVariable = this._teHostnameVariable;
    }
    if (this._teNameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.teNameServer = this._teNameServer;
    }
    if (this._teNameServerVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.teNameServerVariable = this._teNameServerVariable;
    }
    if (this._tePacUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tePacUrl = this._tePacUrl;
    }
    if (this._tePacUrlVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tePacUrlVariable = this._tePacUrlVariable;
    }
    if (this._teProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.teProxyHost = this._teProxyHost;
    }
    if (this._teProxyHostVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.teProxyHostVariable = this._teProxyHostVariable;
    }
    if (this._teProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.teProxyPort = this._teProxyPort;
    }
    if (this._teProxyPortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.teProxyPortVariable = this._teProxyPortVariable;
    }
    if (this._teVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.teVpn = this._teVpn;
    }
    if (this._teVpnVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.teVpnVariable = this._teVpnVariable;
    }
    if (this._teWebProxyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.teWebProxyType = this._teWebProxyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoThousandeyesFeatureTemplateVirtualApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationType = undefined;
      this._instanceId = undefined;
      this._optional = undefined;
      this._teAccountGroupToken = undefined;
      this._teAccountGroupTokenVariable = undefined;
      this._teAgentIp = undefined;
      this._teAgentIpVariable = undefined;
      this._teDefaultGateway = undefined;
      this._teDefaultGatewayVariable = undefined;
      this._teHostname = undefined;
      this._teHostnameVariable = undefined;
      this._teNameServer = undefined;
      this._teNameServerVariable = undefined;
      this._tePacUrl = undefined;
      this._tePacUrlVariable = undefined;
      this._teProxyHost = undefined;
      this._teProxyHostVariable = undefined;
      this._teProxyPort = undefined;
      this._teProxyPortVariable = undefined;
      this._teVpn = undefined;
      this._teVpnVariable = undefined;
      this._teWebProxyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationType = value.applicationType;
      this._instanceId = value.instanceId;
      this._optional = value.optional;
      this._teAccountGroupToken = value.teAccountGroupToken;
      this._teAccountGroupTokenVariable = value.teAccountGroupTokenVariable;
      this._teAgentIp = value.teAgentIp;
      this._teAgentIpVariable = value.teAgentIpVariable;
      this._teDefaultGateway = value.teDefaultGateway;
      this._teDefaultGatewayVariable = value.teDefaultGatewayVariable;
      this._teHostname = value.teHostname;
      this._teHostnameVariable = value.teHostnameVariable;
      this._teNameServer = value.teNameServer;
      this._teNameServerVariable = value.teNameServerVariable;
      this._tePacUrl = value.tePacUrl;
      this._tePacUrlVariable = value.tePacUrlVariable;
      this._teProxyHost = value.teProxyHost;
      this._teProxyHostVariable = value.teProxyHostVariable;
      this._teProxyPort = value.teProxyPort;
      this._teProxyPortVariable = value.teProxyPortVariable;
      this._teVpn = value.teVpn;
      this._teVpnVariable = value.teVpnVariable;
      this._teWebProxyType = value.teWebProxyType;
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

  // te_account_group_token - computed: false, optional: true, required: false
  private _teAccountGroupToken?: string; 
  public get teAccountGroupToken() {
    return this.getStringAttribute('te_account_group_token');
  }
  public set teAccountGroupToken(value: string) {
    this._teAccountGroupToken = value;
  }
  public resetTeAccountGroupToken() {
    this._teAccountGroupToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teAccountGroupTokenInput() {
    return this._teAccountGroupToken;
  }

  // te_account_group_token_variable - computed: false, optional: true, required: false
  private _teAccountGroupTokenVariable?: string; 
  public get teAccountGroupTokenVariable() {
    return this.getStringAttribute('te_account_group_token_variable');
  }
  public set teAccountGroupTokenVariable(value: string) {
    this._teAccountGroupTokenVariable = value;
  }
  public resetTeAccountGroupTokenVariable() {
    this._teAccountGroupTokenVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teAccountGroupTokenVariableInput() {
    return this._teAccountGroupTokenVariable;
  }

  // te_agent_ip - computed: false, optional: true, required: false
  private _teAgentIp?: string; 
  public get teAgentIp() {
    return this.getStringAttribute('te_agent_ip');
  }
  public set teAgentIp(value: string) {
    this._teAgentIp = value;
  }
  public resetTeAgentIp() {
    this._teAgentIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teAgentIpInput() {
    return this._teAgentIp;
  }

  // te_agent_ip_variable - computed: false, optional: true, required: false
  private _teAgentIpVariable?: string; 
  public get teAgentIpVariable() {
    return this.getStringAttribute('te_agent_ip_variable');
  }
  public set teAgentIpVariable(value: string) {
    this._teAgentIpVariable = value;
  }
  public resetTeAgentIpVariable() {
    this._teAgentIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teAgentIpVariableInput() {
    return this._teAgentIpVariable;
  }

  // te_default_gateway - computed: false, optional: true, required: false
  private _teDefaultGateway?: string; 
  public get teDefaultGateway() {
    return this.getStringAttribute('te_default_gateway');
  }
  public set teDefaultGateway(value: string) {
    this._teDefaultGateway = value;
  }
  public resetTeDefaultGateway() {
    this._teDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teDefaultGatewayInput() {
    return this._teDefaultGateway;
  }

  // te_default_gateway_variable - computed: false, optional: true, required: false
  private _teDefaultGatewayVariable?: string; 
  public get teDefaultGatewayVariable() {
    return this.getStringAttribute('te_default_gateway_variable');
  }
  public set teDefaultGatewayVariable(value: string) {
    this._teDefaultGatewayVariable = value;
  }
  public resetTeDefaultGatewayVariable() {
    this._teDefaultGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teDefaultGatewayVariableInput() {
    return this._teDefaultGatewayVariable;
  }

  // te_hostname - computed: false, optional: true, required: false
  private _teHostname?: string; 
  public get teHostname() {
    return this.getStringAttribute('te_hostname');
  }
  public set teHostname(value: string) {
    this._teHostname = value;
  }
  public resetTeHostname() {
    this._teHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teHostnameInput() {
    return this._teHostname;
  }

  // te_hostname_variable - computed: false, optional: true, required: false
  private _teHostnameVariable?: string; 
  public get teHostnameVariable() {
    return this.getStringAttribute('te_hostname_variable');
  }
  public set teHostnameVariable(value: string) {
    this._teHostnameVariable = value;
  }
  public resetTeHostnameVariable() {
    this._teHostnameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teHostnameVariableInput() {
    return this._teHostnameVariable;
  }

  // te_name_server - computed: false, optional: true, required: false
  private _teNameServer?: string; 
  public get teNameServer() {
    return this.getStringAttribute('te_name_server');
  }
  public set teNameServer(value: string) {
    this._teNameServer = value;
  }
  public resetTeNameServer() {
    this._teNameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teNameServerInput() {
    return this._teNameServer;
  }

  // te_name_server_variable - computed: false, optional: true, required: false
  private _teNameServerVariable?: string; 
  public get teNameServerVariable() {
    return this.getStringAttribute('te_name_server_variable');
  }
  public set teNameServerVariable(value: string) {
    this._teNameServerVariable = value;
  }
  public resetTeNameServerVariable() {
    this._teNameServerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teNameServerVariableInput() {
    return this._teNameServerVariable;
  }

  // te_pac_url - computed: false, optional: true, required: false
  private _tePacUrl?: string; 
  public get tePacUrl() {
    return this.getStringAttribute('te_pac_url');
  }
  public set tePacUrl(value: string) {
    this._tePacUrl = value;
  }
  public resetTePacUrl() {
    this._tePacUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tePacUrlInput() {
    return this._tePacUrl;
  }

  // te_pac_url_variable - computed: false, optional: true, required: false
  private _tePacUrlVariable?: string; 
  public get tePacUrlVariable() {
    return this.getStringAttribute('te_pac_url_variable');
  }
  public set tePacUrlVariable(value: string) {
    this._tePacUrlVariable = value;
  }
  public resetTePacUrlVariable() {
    this._tePacUrlVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tePacUrlVariableInput() {
    return this._tePacUrlVariable;
  }

  // te_proxy_host - computed: false, optional: true, required: false
  private _teProxyHost?: string; 
  public get teProxyHost() {
    return this.getStringAttribute('te_proxy_host');
  }
  public set teProxyHost(value: string) {
    this._teProxyHost = value;
  }
  public resetTeProxyHost() {
    this._teProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teProxyHostInput() {
    return this._teProxyHost;
  }

  // te_proxy_host_variable - computed: false, optional: true, required: false
  private _teProxyHostVariable?: string; 
  public get teProxyHostVariable() {
    return this.getStringAttribute('te_proxy_host_variable');
  }
  public set teProxyHostVariable(value: string) {
    this._teProxyHostVariable = value;
  }
  public resetTeProxyHostVariable() {
    this._teProxyHostVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teProxyHostVariableInput() {
    return this._teProxyHostVariable;
  }

  // te_proxy_port - computed: false, optional: true, required: false
  private _teProxyPort?: number; 
  public get teProxyPort() {
    return this.getNumberAttribute('te_proxy_port');
  }
  public set teProxyPort(value: number) {
    this._teProxyPort = value;
  }
  public resetTeProxyPort() {
    this._teProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teProxyPortInput() {
    return this._teProxyPort;
  }

  // te_proxy_port_variable - computed: false, optional: true, required: false
  private _teProxyPortVariable?: string; 
  public get teProxyPortVariable() {
    return this.getStringAttribute('te_proxy_port_variable');
  }
  public set teProxyPortVariable(value: string) {
    this._teProxyPortVariable = value;
  }
  public resetTeProxyPortVariable() {
    this._teProxyPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teProxyPortVariableInput() {
    return this._teProxyPortVariable;
  }

  // te_vpn - computed: false, optional: true, required: false
  private _teVpn?: number; 
  public get teVpn() {
    return this.getNumberAttribute('te_vpn');
  }
  public set teVpn(value: number) {
    this._teVpn = value;
  }
  public resetTeVpn() {
    this._teVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teVpnInput() {
    return this._teVpn;
  }

  // te_vpn_variable - computed: false, optional: true, required: false
  private _teVpnVariable?: string; 
  public get teVpnVariable() {
    return this.getStringAttribute('te_vpn_variable');
  }
  public set teVpnVariable(value: string) {
    this._teVpnVariable = value;
  }
  public resetTeVpnVariable() {
    this._teVpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teVpnVariableInput() {
    return this._teVpnVariable;
  }

  // te_web_proxy_type - computed: false, optional: true, required: false
  private _teWebProxyType?: string; 
  public get teWebProxyType() {
    return this.getStringAttribute('te_web_proxy_type');
  }
  public set teWebProxyType(value: string) {
    this._teWebProxyType = value;
  }
  public resetTeWebProxyType() {
    this._teWebProxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teWebProxyTypeInput() {
    return this._teWebProxyType;
  }
}

export class CiscoThousandeyesFeatureTemplateVirtualApplicationsList extends cdktf.ComplexList {
  public internalValue? : CiscoThousandeyesFeatureTemplateVirtualApplications[] | cdktf.IResolvable

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
  public get(index: number): CiscoThousandeyesFeatureTemplateVirtualApplicationsOutputReference {
    return new CiscoThousandeyesFeatureTemplateVirtualApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template sdwan_cisco_thousandeyes_feature_template}
*/
export class CiscoThousandeyesFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_thousandeyes_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoThousandeyesFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoThousandeyesFeatureTemplate to import
  * @param importFromId The id of the existing CiscoThousandeyesFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoThousandeyesFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_thousandeyes_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_thousandeyes_feature_template sdwan_cisco_thousandeyes_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoThousandeyesFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoThousandeyesFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_thousandeyes_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
  private _virtualApplications = new CiscoThousandeyesFeatureTemplateVirtualApplicationsList(this, "virtual_applications", false);
  public get virtualApplications() {
    return this._virtualApplications;
  }
  public putVirtualApplications(value: CiscoThousandeyesFeatureTemplateVirtualApplications[] | cdktf.IResolvable) {
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
      virtual_applications: cdktf.listMapper(ciscoThousandeyesFeatureTemplateVirtualApplicationsToTerraform, false)(this._virtualApplications.internalValue),
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
        value: cdktf.listMapperHcl(ciscoThousandeyesFeatureTemplateVirtualApplicationsToHclTerraform, false)(this._virtualApplications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoThousandeyesFeatureTemplateVirtualApplicationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
