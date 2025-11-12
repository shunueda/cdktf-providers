// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfvServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#annotations NfvService#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#description NfvService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#disable NfvService#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#disable_https_management NfvService#disable_https_management}
  */
  readonly disableHttpsManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#disable_ssh_access NfvService#disable_ssh_access}
  */
  readonly disableSshAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#id NfvService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#labels NfvService#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace: string;
  /**
  * enabled_ssh_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#enabled_ssh_access NfvService#enabled_ssh_access}
  */
  readonly enabledSshAccess?: NfvServiceEnabledSshAccess;
  /**
  * f5_big_ip_aws_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#f5_big_ip_aws_service NfvService#f5_big_ip_aws_service}
  */
  readonly f5BigIpAwsService?: NfvServiceF5BigIpAwsService;
  /**
  * https_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#https_management NfvService#https_management}
  */
  readonly httpsManagement?: NfvServiceHttpsManagement;
  /**
  * palo_alto_fw_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#palo_alto_fw_service NfvService#palo_alto_fw_service}
  */
  readonly paloAltoFwService?: NfvServicePaloAltoFwService;
}
export interface NfvServiceEnabledSshAccessNodeSshPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#node_name NfvService#node_name}
  */
  readonly nodeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#ssh_port NfvService#ssh_port}
  */
  readonly sshPort: number;
}

export function nfvServiceEnabledSshAccessNodeSshPortsToTerraform(struct?: NfvServiceEnabledSshAccessNodeSshPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    ssh_port: cdktf.numberToTerraform(struct!.sshPort),
  }
}


export function nfvServiceEnabledSshAccessNodeSshPortsToHclTerraform(struct?: NfvServiceEnabledSshAccessNodeSshPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_port: {
      value: cdktf.numberToHclTerraform(struct!.sshPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceEnabledSshAccessNodeSshPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvServiceEnabledSshAccessNodeSshPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._sshPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPort = this._sshPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceEnabledSshAccessNodeSshPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeName = undefined;
      this._sshPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeName = value.nodeName;
      this._sshPort = value.sshPort;
    }
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // ssh_port - computed: false, optional: false, required: true
  private _sshPort?: number; 
  public get sshPort() {
    return this.getNumberAttribute('ssh_port');
  }
  public set sshPort(value: number) {
    this._sshPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }
}

export class NfvServiceEnabledSshAccessNodeSshPortsList extends cdktf.ComplexList {
  public internalValue? : NfvServiceEnabledSshAccessNodeSshPorts[] | cdktf.IResolvable

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
  public get(index: number): NfvServiceEnabledSshAccessNodeSshPortsOutputReference {
    return new NfvServiceEnabledSshAccessNodeSshPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvServiceEnabledSshAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_sli NfvService#advertise_on_sli}
  */
  readonly advertiseOnSli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_slo NfvService#advertise_on_slo}
  */
  readonly advertiseOnSlo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_slo_sli NfvService#advertise_on_slo_sli}
  */
  readonly advertiseOnSloSli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#domain_suffix NfvService#domain_suffix}
  */
  readonly domainSuffix: string;
  /**
  * node_ssh_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#node_ssh_ports NfvService#node_ssh_ports}
  */
  readonly nodeSshPorts: NfvServiceEnabledSshAccessNodeSshPorts[] | cdktf.IResolvable;
}

export function nfvServiceEnabledSshAccessToTerraform(struct?: NfvServiceEnabledSshAccessOutputReference | NfvServiceEnabledSshAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_on_sli: cdktf.booleanToTerraform(struct!.advertiseOnSli),
    advertise_on_slo: cdktf.booleanToTerraform(struct!.advertiseOnSlo),
    advertise_on_slo_sli: cdktf.booleanToTerraform(struct!.advertiseOnSloSli),
    domain_suffix: cdktf.stringToTerraform(struct!.domainSuffix),
    node_ssh_ports: cdktf.listMapper(nfvServiceEnabledSshAccessNodeSshPortsToTerraform, true)(struct!.nodeSshPorts),
  }
}


export function nfvServiceEnabledSshAccessToHclTerraform(struct?: NfvServiceEnabledSshAccessOutputReference | NfvServiceEnabledSshAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_on_sli: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnSli),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_slo: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnSlo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_slo_sli: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnSloSli),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_suffix: {
      value: cdktf.stringToHclTerraform(struct!.domainSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_ssh_ports: {
      value: cdktf.listMapperHcl(nfvServiceEnabledSshAccessNodeSshPortsToHclTerraform, true)(struct!.nodeSshPorts),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceEnabledSshAccessNodeSshPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceEnabledSshAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceEnabledSshAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseOnSli !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSli = this._advertiseOnSli;
    }
    if (this._advertiseOnSlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSlo = this._advertiseOnSlo;
    }
    if (this._advertiseOnSloSli !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloSli = this._advertiseOnSloSli;
    }
    if (this._domainSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSuffix = this._domainSuffix;
    }
    if (this._nodeSshPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSshPorts = this._nodeSshPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceEnabledSshAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseOnSli = undefined;
      this._advertiseOnSlo = undefined;
      this._advertiseOnSloSli = undefined;
      this._domainSuffix = undefined;
      this._nodeSshPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseOnSli = value.advertiseOnSli;
      this._advertiseOnSlo = value.advertiseOnSlo;
      this._advertiseOnSloSli = value.advertiseOnSloSli;
      this._domainSuffix = value.domainSuffix;
      this._nodeSshPorts.internalValue = value.nodeSshPorts;
    }
  }

  // advertise_on_sli - computed: false, optional: true, required: false
  private _advertiseOnSli?: boolean | cdktf.IResolvable; 
  public get advertiseOnSli() {
    return this.getBooleanAttribute('advertise_on_sli');
  }
  public set advertiseOnSli(value: boolean | cdktf.IResolvable) {
    this._advertiseOnSli = value;
  }
  public resetAdvertiseOnSli() {
    this._advertiseOnSli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSliInput() {
    return this._advertiseOnSli;
  }

  // advertise_on_slo - computed: false, optional: true, required: false
  private _advertiseOnSlo?: boolean | cdktf.IResolvable; 
  public get advertiseOnSlo() {
    return this.getBooleanAttribute('advertise_on_slo');
  }
  public set advertiseOnSlo(value: boolean | cdktf.IResolvable) {
    this._advertiseOnSlo = value;
  }
  public resetAdvertiseOnSlo() {
    this._advertiseOnSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloInput() {
    return this._advertiseOnSlo;
  }

  // advertise_on_slo_sli - computed: false, optional: true, required: false
  private _advertiseOnSloSli?: boolean | cdktf.IResolvable; 
  public get advertiseOnSloSli() {
    return this.getBooleanAttribute('advertise_on_slo_sli');
  }
  public set advertiseOnSloSli(value: boolean | cdktf.IResolvable) {
    this._advertiseOnSloSli = value;
  }
  public resetAdvertiseOnSloSli() {
    this._advertiseOnSloSli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloSliInput() {
    return this._advertiseOnSloSli;
  }

  // domain_suffix - computed: false, optional: false, required: true
  private _domainSuffix?: string; 
  public get domainSuffix() {
    return this.getStringAttribute('domain_suffix');
  }
  public set domainSuffix(value: string) {
    this._domainSuffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSuffixInput() {
    return this._domainSuffix;
  }

  // node_ssh_ports - computed: false, optional: false, required: true
  private _nodeSshPorts = new NfvServiceEnabledSshAccessNodeSshPortsList(this, "node_ssh_ports", false);
  public get nodeSshPorts() {
    return this._nodeSshPorts;
  }
  public putNodeSshPorts(value: NfvServiceEnabledSshAccessNodeSshPorts[] | cdktf.IResolvable) {
    this._nodeSshPorts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSshPortsInput() {
    return this._nodeSshPorts.internalValue;
  }
}
export interface NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#decryption_provider NfvService#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#location NfvService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#store_provider NfvService#store_provider}
  */
  readonly storeProvider?: string;
}

export function nfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfoToTerraform(struct?: NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfoOutputReference | NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function nfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfoToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfoOutputReference | NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#provider NfvService#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#url NfvService#url}
  */
  readonly url: string;
}

export function nfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfoToTerraform(struct?: NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfoOutputReference | NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function nfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfoToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfoOutputReference | NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NfvServiceF5BigIpAwsServiceAdminPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#blindfold_secret_info NfvService#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#clear_secret_info NfvService#clear_secret_info}
  */
  readonly clearSecretInfo?: NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfo;
}

export function nfvServiceF5BigIpAwsServiceAdminPasswordToTerraform(struct?: NfvServiceF5BigIpAwsServiceAdminPasswordOutputReference | NfvServiceF5BigIpAwsServiceAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: nfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: nfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function nfvServiceF5BigIpAwsServiceAdminPasswordToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceAdminPasswordOutputReference | NfvServiceF5BigIpAwsServiceAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: nfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: nfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceAdminPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceAdminPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: NfvServiceF5BigIpAwsServiceAdminPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: NfvServiceF5BigIpAwsServiceAdminPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSiteToTerraform(struct?: NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSiteOutputReference | NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSiteToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSiteOutputReference | NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceF5BigIpAwsServiceAwsTgwSiteParams {
  /**
  * aws_tgw_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#aws_tgw_site NfvService#aws_tgw_site}
  */
  readonly awsTgwSite: NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSite;
}

export function nfvServiceF5BigIpAwsServiceAwsTgwSiteParamsToTerraform(struct?: NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsOutputReference | NfvServiceF5BigIpAwsServiceAwsTgwSiteParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_tgw_site: nfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSiteToTerraform(struct!.awsTgwSite),
  }
}


export function nfvServiceF5BigIpAwsServiceAwsTgwSiteParamsToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsOutputReference | NfvServiceF5BigIpAwsServiceAwsTgwSiteParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_tgw_site: {
      value: nfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSiteToHclTerraform(struct!.awsTgwSite),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceAwsTgwSiteParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsTgwSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsTgwSite = this._awsTgwSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceAwsTgwSiteParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsTgwSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsTgwSite.internalValue = value.awsTgwSite;
    }
  }

  // aws_tgw_site - computed: false, optional: false, required: true
  private _awsTgwSite = new NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSiteOutputReference(this, "aws_tgw_site");
  public get awsTgwSite() {
    return this._awsTgwSite;
  }
  public putAwsTgwSite(value: NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsAwsTgwSite) {
    this._awsTgwSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTgwSiteInput() {
    return this._awsTgwSite.internalValue;
  }
}
export interface NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#ports NfvService#ports}
  */
  readonly ports: string[];
}

export function nfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPortsToTerraform(struct?: NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPortsOutputReference | NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function nfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPortsToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPortsOutputReference | NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
    }
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#ports NfvService#ports}
  */
  readonly ports: string[];
}

export function nfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPortsToTerraform(struct?: NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPortsOutputReference | NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function nfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPortsToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPortsOutputReference | NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
    }
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface NfvServiceF5BigIpAwsServiceEndpointService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_slo_ip NfvService#advertise_on_slo_ip}
  */
  readonly advertiseOnSloIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_slo_ip_external NfvService#advertise_on_slo_ip_external}
  */
  readonly advertiseOnSloIpExternal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#automatic_vip NfvService#automatic_vip}
  */
  readonly automaticVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#configured_vip NfvService#configured_vip}
  */
  readonly configuredVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#default_tcp_ports NfvService#default_tcp_ports}
  */
  readonly defaultTcpPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#disable_advertise_on_slo_ip NfvService#disable_advertise_on_slo_ip}
  */
  readonly disableAdvertiseOnSloIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#http_port NfvService#http_port}
  */
  readonly httpPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#https_port NfvService#https_port}
  */
  readonly httpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_tcp_ports NfvService#no_tcp_ports}
  */
  readonly noTcpPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_udp_ports NfvService#no_udp_ports}
  */
  readonly noUdpPorts?: boolean | cdktf.IResolvable;
  /**
  * custom_tcp_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_tcp_ports NfvService#custom_tcp_ports}
  */
  readonly customTcpPorts?: NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPorts;
  /**
  * custom_udp_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_udp_ports NfvService#custom_udp_ports}
  */
  readonly customUdpPorts?: NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPorts;
}

export function nfvServiceF5BigIpAwsServiceEndpointServiceToTerraform(struct?: NfvServiceF5BigIpAwsServiceEndpointServiceOutputReference | NfvServiceF5BigIpAwsServiceEndpointService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_on_slo_ip: cdktf.booleanToTerraform(struct!.advertiseOnSloIp),
    advertise_on_slo_ip_external: cdktf.booleanToTerraform(struct!.advertiseOnSloIpExternal),
    automatic_vip: cdktf.booleanToTerraform(struct!.automaticVip),
    configured_vip: cdktf.stringToTerraform(struct!.configuredVip),
    default_tcp_ports: cdktf.booleanToTerraform(struct!.defaultTcpPorts),
    disable_advertise_on_slo_ip: cdktf.booleanToTerraform(struct!.disableAdvertiseOnSloIp),
    http_port: cdktf.booleanToTerraform(struct!.httpPort),
    https_port: cdktf.booleanToTerraform(struct!.httpsPort),
    no_tcp_ports: cdktf.booleanToTerraform(struct!.noTcpPorts),
    no_udp_ports: cdktf.booleanToTerraform(struct!.noUdpPorts),
    custom_tcp_ports: nfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPortsToTerraform(struct!.customTcpPorts),
    custom_udp_ports: nfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPortsToTerraform(struct!.customUdpPorts),
  }
}


export function nfvServiceF5BigIpAwsServiceEndpointServiceToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceEndpointServiceOutputReference | NfvServiceF5BigIpAwsServiceEndpointService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_on_slo_ip: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnSloIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_slo_ip_external: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnSloIpExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_vip: {
      value: cdktf.booleanToHclTerraform(struct!.automaticVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configured_vip: {
      value: cdktf.stringToHclTerraform(struct!.configuredVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_tcp_ports: {
      value: cdktf.booleanToHclTerraform(struct!.defaultTcpPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_advertise_on_slo_ip: {
      value: cdktf.booleanToHclTerraform(struct!.disableAdvertiseOnSloIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_port: {
      value: cdktf.booleanToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    https_port: {
      value: cdktf.booleanToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_tcp_ports: {
      value: cdktf.booleanToHclTerraform(struct!.noTcpPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_udp_ports: {
      value: cdktf.booleanToHclTerraform(struct!.noUdpPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_tcp_ports: {
      value: nfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPortsToHclTerraform(struct!.customTcpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPortsList",
    },
    custom_udp_ports: {
      value: nfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPortsToHclTerraform(struct!.customUdpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceEndpointServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceEndpointService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseOnSloIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloIp = this._advertiseOnSloIp;
    }
    if (this._advertiseOnSloIpExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloIpExternal = this._advertiseOnSloIpExternal;
    }
    if (this._automaticVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticVip = this._automaticVip;
    }
    if (this._configuredVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredVip = this._configuredVip;
    }
    if (this._defaultTcpPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTcpPorts = this._defaultTcpPorts;
    }
    if (this._disableAdvertiseOnSloIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAdvertiseOnSloIp = this._disableAdvertiseOnSloIp;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._noTcpPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTcpPorts = this._noTcpPorts;
    }
    if (this._noUdpPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noUdpPorts = this._noUdpPorts;
    }
    if (this._customTcpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTcpPorts = this._customTcpPorts?.internalValue;
    }
    if (this._customUdpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUdpPorts = this._customUdpPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceEndpointService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseOnSloIp = undefined;
      this._advertiseOnSloIpExternal = undefined;
      this._automaticVip = undefined;
      this._configuredVip = undefined;
      this._defaultTcpPorts = undefined;
      this._disableAdvertiseOnSloIp = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._noTcpPorts = undefined;
      this._noUdpPorts = undefined;
      this._customTcpPorts.internalValue = undefined;
      this._customUdpPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseOnSloIp = value.advertiseOnSloIp;
      this._advertiseOnSloIpExternal = value.advertiseOnSloIpExternal;
      this._automaticVip = value.automaticVip;
      this._configuredVip = value.configuredVip;
      this._defaultTcpPorts = value.defaultTcpPorts;
      this._disableAdvertiseOnSloIp = value.disableAdvertiseOnSloIp;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._noTcpPorts = value.noTcpPorts;
      this._noUdpPorts = value.noUdpPorts;
      this._customTcpPorts.internalValue = value.customTcpPorts;
      this._customUdpPorts.internalValue = value.customUdpPorts;
    }
  }

  // advertise_on_slo_ip - computed: false, optional: true, required: false
  private _advertiseOnSloIp?: boolean | cdktf.IResolvable; 
  public get advertiseOnSloIp() {
    return this.getBooleanAttribute('advertise_on_slo_ip');
  }
  public set advertiseOnSloIp(value: boolean | cdktf.IResolvable) {
    this._advertiseOnSloIp = value;
  }
  public resetAdvertiseOnSloIp() {
    this._advertiseOnSloIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloIpInput() {
    return this._advertiseOnSloIp;
  }

  // advertise_on_slo_ip_external - computed: false, optional: true, required: false
  private _advertiseOnSloIpExternal?: boolean | cdktf.IResolvable; 
  public get advertiseOnSloIpExternal() {
    return this.getBooleanAttribute('advertise_on_slo_ip_external');
  }
  public set advertiseOnSloIpExternal(value: boolean | cdktf.IResolvable) {
    this._advertiseOnSloIpExternal = value;
  }
  public resetAdvertiseOnSloIpExternal() {
    this._advertiseOnSloIpExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloIpExternalInput() {
    return this._advertiseOnSloIpExternal;
  }

  // automatic_vip - computed: false, optional: true, required: false
  private _automaticVip?: boolean | cdktf.IResolvable; 
  public get automaticVip() {
    return this.getBooleanAttribute('automatic_vip');
  }
  public set automaticVip(value: boolean | cdktf.IResolvable) {
    this._automaticVip = value;
  }
  public resetAutomaticVip() {
    this._automaticVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticVipInput() {
    return this._automaticVip;
  }

  // configured_vip - computed: false, optional: true, required: false
  private _configuredVip?: string; 
  public get configuredVip() {
    return this.getStringAttribute('configured_vip');
  }
  public set configuredVip(value: string) {
    this._configuredVip = value;
  }
  public resetConfiguredVip() {
    this._configuredVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredVipInput() {
    return this._configuredVip;
  }

  // default_tcp_ports - computed: false, optional: true, required: false
  private _defaultTcpPorts?: boolean | cdktf.IResolvable; 
  public get defaultTcpPorts() {
    return this.getBooleanAttribute('default_tcp_ports');
  }
  public set defaultTcpPorts(value: boolean | cdktf.IResolvable) {
    this._defaultTcpPorts = value;
  }
  public resetDefaultTcpPorts() {
    this._defaultTcpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTcpPortsInput() {
    return this._defaultTcpPorts;
  }

  // disable_advertise_on_slo_ip - computed: false, optional: true, required: false
  private _disableAdvertiseOnSloIp?: boolean | cdktf.IResolvable; 
  public get disableAdvertiseOnSloIp() {
    return this.getBooleanAttribute('disable_advertise_on_slo_ip');
  }
  public set disableAdvertiseOnSloIp(value: boolean | cdktf.IResolvable) {
    this._disableAdvertiseOnSloIp = value;
  }
  public resetDisableAdvertiseOnSloIp() {
    this._disableAdvertiseOnSloIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAdvertiseOnSloIpInput() {
    return this._disableAdvertiseOnSloIp;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: boolean | cdktf.IResolvable; 
  public get httpPort() {
    return this.getBooleanAttribute('http_port');
  }
  public set httpPort(value: boolean | cdktf.IResolvable) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: boolean | cdktf.IResolvable; 
  public get httpsPort() {
    return this.getBooleanAttribute('https_port');
  }
  public set httpsPort(value: boolean | cdktf.IResolvable) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // no_tcp_ports - computed: false, optional: true, required: false
  private _noTcpPorts?: boolean | cdktf.IResolvable; 
  public get noTcpPorts() {
    return this.getBooleanAttribute('no_tcp_ports');
  }
  public set noTcpPorts(value: boolean | cdktf.IResolvable) {
    this._noTcpPorts = value;
  }
  public resetNoTcpPorts() {
    this._noTcpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTcpPortsInput() {
    return this._noTcpPorts;
  }

  // no_udp_ports - computed: false, optional: true, required: false
  private _noUdpPorts?: boolean | cdktf.IResolvable; 
  public get noUdpPorts() {
    return this.getBooleanAttribute('no_udp_ports');
  }
  public set noUdpPorts(value: boolean | cdktf.IResolvable) {
    this._noUdpPorts = value;
  }
  public resetNoUdpPorts() {
    this._noUdpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noUdpPortsInput() {
    return this._noUdpPorts;
  }

  // custom_tcp_ports - computed: false, optional: true, required: false
  private _customTcpPorts = new NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPortsOutputReference(this, "custom_tcp_ports");
  public get customTcpPorts() {
    return this._customTcpPorts;
  }
  public putCustomTcpPorts(value: NfvServiceF5BigIpAwsServiceEndpointServiceCustomTcpPorts) {
    this._customTcpPorts.internalValue = value;
  }
  public resetCustomTcpPorts() {
    this._customTcpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTcpPortsInput() {
    return this._customTcpPorts.internalValue;
  }

  // custom_udp_ports - computed: false, optional: true, required: false
  private _customUdpPorts = new NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPortsOutputReference(this, "custom_udp_ports");
  public get customUdpPorts() {
    return this._customUdpPorts;
  }
  public putCustomUdpPorts(value: NfvServiceF5BigIpAwsServiceEndpointServiceCustomUdpPorts) {
    this._customUdpPorts.internalValue = value;
  }
  public resetCustomUdpPorts() {
    this._customUdpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUdpPortsInput() {
    return this._customUdpPorts.internalValue;
  }
}
export interface NfvServiceF5BigIpAwsServiceMarketPlaceImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#awaf_pay_g200_mbps NfvService#awaf_pay_g200_mbps}
  */
  readonly awafPayG200Mbps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#awaf_pay_g3_gbps NfvService#awaf_pay_g3_gbps}
  */
  readonly awafPayG3Gbps?: boolean | cdktf.IResolvable;
}

export function nfvServiceF5BigIpAwsServiceMarketPlaceImageToTerraform(struct?: NfvServiceF5BigIpAwsServiceMarketPlaceImageOutputReference | NfvServiceF5BigIpAwsServiceMarketPlaceImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    awaf_pay_g200_mbps: cdktf.booleanToTerraform(struct!.awafPayG200Mbps),
    awaf_pay_g3_gbps: cdktf.booleanToTerraform(struct!.awafPayG3Gbps),
  }
}


export function nfvServiceF5BigIpAwsServiceMarketPlaceImageToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceMarketPlaceImageOutputReference | NfvServiceF5BigIpAwsServiceMarketPlaceImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    awaf_pay_g200_mbps: {
      value: cdktf.booleanToHclTerraform(struct!.awafPayG200Mbps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    awaf_pay_g3_gbps: {
      value: cdktf.booleanToHclTerraform(struct!.awafPayG3Gbps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceMarketPlaceImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceMarketPlaceImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awafPayG200Mbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.awafPayG200Mbps = this._awafPayG200Mbps;
    }
    if (this._awafPayG3Gbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.awafPayG3Gbps = this._awafPayG3Gbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceMarketPlaceImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awafPayG200Mbps = undefined;
      this._awafPayG3Gbps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awafPayG200Mbps = value.awafPayG200Mbps;
      this._awafPayG3Gbps = value.awafPayG3Gbps;
    }
  }

  // awaf_pay_g200_mbps - computed: false, optional: true, required: false
  private _awafPayG200Mbps?: boolean | cdktf.IResolvable; 
  public get awafPayG200Mbps() {
    return this.getBooleanAttribute('awaf_pay_g200_mbps');
  }
  public set awafPayG200Mbps(value: boolean | cdktf.IResolvable) {
    this._awafPayG200Mbps = value;
  }
  public resetAwafPayG200Mbps() {
    this._awafPayG200Mbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awafPayG200MbpsInput() {
    return this._awafPayG200Mbps;
  }

  // awaf_pay_g3_gbps - computed: false, optional: true, required: false
  private _awafPayG3Gbps?: boolean | cdktf.IResolvable; 
  public get awafPayG3Gbps() {
    return this.getBooleanAttribute('awaf_pay_g3_gbps');
  }
  public set awafPayG3Gbps(value: boolean | cdktf.IResolvable) {
    this._awafPayG3Gbps = value;
  }
  public resetAwafPayG3Gbps() {
    this._awafPayG3Gbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awafPayG3GbpsInput() {
    return this._awafPayG3Gbps;
  }
}
export interface NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#ipv4 NfvService#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#ipv6 NfvService#ipv6}
  */
  readonly ipv6?: string;
}

export function nfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParamToTerraform(struct?: NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParamOutputReference | NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function nfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParamToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParamOutputReference | NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface NfvServiceF5BigIpAwsServiceNodesMgmtSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#existing_subnet_id NfvService#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#subnet_param NfvService#subnet_param}
  */
  readonly subnetParam?: NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParam;
}

export function nfvServiceF5BigIpAwsServiceNodesMgmtSubnetToTerraform(struct?: NfvServiceF5BigIpAwsServiceNodesMgmtSubnetOutputReference | NfvServiceF5BigIpAwsServiceNodesMgmtSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: nfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function nfvServiceF5BigIpAwsServiceNodesMgmtSubnetToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceNodesMgmtSubnetOutputReference | NfvServiceF5BigIpAwsServiceNodesMgmtSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: nfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceNodesMgmtSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsServiceNodesMgmtSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceNodesMgmtSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: NfvServiceF5BigIpAwsServiceNodesMgmtSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface NfvServiceF5BigIpAwsServiceNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#automatic_prefix NfvService#automatic_prefix}
  */
  readonly automaticPrefix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#aws_az_name NfvService#aws_az_name}
  */
  readonly awsAzName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#node_name NfvService#node_name}
  */
  readonly nodeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#reserved_mgmt_subnet NfvService#reserved_mgmt_subnet}
  */
  readonly reservedMgmtSubnet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tunnel_prefix NfvService#tunnel_prefix}
  */
  readonly tunnelPrefix?: string;
  /**
  * mgmt_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#mgmt_subnet NfvService#mgmt_subnet}
  */
  readonly mgmtSubnet?: NfvServiceF5BigIpAwsServiceNodesMgmtSubnet;
}

export function nfvServiceF5BigIpAwsServiceNodesToTerraform(struct?: NfvServiceF5BigIpAwsServiceNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_prefix: cdktf.booleanToTerraform(struct!.automaticPrefix),
    aws_az_name: cdktf.stringToTerraform(struct!.awsAzName),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    reserved_mgmt_subnet: cdktf.booleanToTerraform(struct!.reservedMgmtSubnet),
    tunnel_prefix: cdktf.stringToTerraform(struct!.tunnelPrefix),
    mgmt_subnet: nfvServiceF5BigIpAwsServiceNodesMgmtSubnetToTerraform(struct!.mgmtSubnet),
  }
}


export function nfvServiceF5BigIpAwsServiceNodesToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.automaticPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_az_name: {
      value: cdktf.stringToHclTerraform(struct!.awsAzName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_mgmt_subnet: {
      value: cdktf.booleanToHclTerraform(struct!.reservedMgmtSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tunnel_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tunnelPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_subnet: {
      value: nfvServiceF5BigIpAwsServiceNodesMgmtSubnetToHclTerraform(struct!.mgmtSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceNodesMgmtSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvServiceF5BigIpAwsServiceNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticPrefix = this._automaticPrefix;
    }
    if (this._awsAzName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAzName = this._awsAzName;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._reservedMgmtSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedMgmtSubnet = this._reservedMgmtSubnet;
    }
    if (this._tunnelPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPrefix = this._tunnelPrefix;
    }
    if (this._mgmtSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtSubnet = this._mgmtSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsServiceNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automaticPrefix = undefined;
      this._awsAzName = undefined;
      this._nodeName = undefined;
      this._reservedMgmtSubnet = undefined;
      this._tunnelPrefix = undefined;
      this._mgmtSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automaticPrefix = value.automaticPrefix;
      this._awsAzName = value.awsAzName;
      this._nodeName = value.nodeName;
      this._reservedMgmtSubnet = value.reservedMgmtSubnet;
      this._tunnelPrefix = value.tunnelPrefix;
      this._mgmtSubnet.internalValue = value.mgmtSubnet;
    }
  }

  // automatic_prefix - computed: false, optional: true, required: false
  private _automaticPrefix?: boolean | cdktf.IResolvable; 
  public get automaticPrefix() {
    return this.getBooleanAttribute('automatic_prefix');
  }
  public set automaticPrefix(value: boolean | cdktf.IResolvable) {
    this._automaticPrefix = value;
  }
  public resetAutomaticPrefix() {
    this._automaticPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticPrefixInput() {
    return this._automaticPrefix;
  }

  // aws_az_name - computed: false, optional: false, required: true
  private _awsAzName?: string; 
  public get awsAzName() {
    return this.getStringAttribute('aws_az_name');
  }
  public set awsAzName(value: string) {
    this._awsAzName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAzNameInput() {
    return this._awsAzName;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // reserved_mgmt_subnet - computed: false, optional: true, required: false
  private _reservedMgmtSubnet?: boolean | cdktf.IResolvable; 
  public get reservedMgmtSubnet() {
    return this.getBooleanAttribute('reserved_mgmt_subnet');
  }
  public set reservedMgmtSubnet(value: boolean | cdktf.IResolvable) {
    this._reservedMgmtSubnet = value;
  }
  public resetReservedMgmtSubnet() {
    this._reservedMgmtSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedMgmtSubnetInput() {
    return this._reservedMgmtSubnet;
  }

  // tunnel_prefix - computed: false, optional: true, required: false
  private _tunnelPrefix?: string; 
  public get tunnelPrefix() {
    return this.getStringAttribute('tunnel_prefix');
  }
  public set tunnelPrefix(value: string) {
    this._tunnelPrefix = value;
  }
  public resetTunnelPrefix() {
    this._tunnelPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPrefixInput() {
    return this._tunnelPrefix;
  }

  // mgmt_subnet - computed: false, optional: true, required: false
  private _mgmtSubnet = new NfvServiceF5BigIpAwsServiceNodesMgmtSubnetOutputReference(this, "mgmt_subnet");
  public get mgmtSubnet() {
    return this._mgmtSubnet;
  }
  public putMgmtSubnet(value: NfvServiceF5BigIpAwsServiceNodesMgmtSubnet) {
    this._mgmtSubnet.internalValue = value;
  }
  public resetMgmtSubnet() {
    this._mgmtSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtSubnetInput() {
    return this._mgmtSubnet.internalValue;
  }
}

export class NfvServiceF5BigIpAwsServiceNodesList extends cdktf.ComplexList {
  public internalValue? : NfvServiceF5BigIpAwsServiceNodes[] | cdktf.IResolvable

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
  public get(index: number): NfvServiceF5BigIpAwsServiceNodesOutputReference {
    return new NfvServiceF5BigIpAwsServiceNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvServiceF5BigIpAwsService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#admin_username NfvService#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#ssh_key NfvService#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tags NfvService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#admin_password NfvService#admin_password}
  */
  readonly adminPassword: NfvServiceF5BigIpAwsServiceAdminPassword;
  /**
  * aws_tgw_site_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#aws_tgw_site_params NfvService#aws_tgw_site_params}
  */
  readonly awsTgwSiteParams?: NfvServiceF5BigIpAwsServiceAwsTgwSiteParams;
  /**
  * endpoint_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#endpoint_service NfvService#endpoint_service}
  */
  readonly endpointService?: NfvServiceF5BigIpAwsServiceEndpointService;
  /**
  * market_place_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#market_place_image NfvService#market_place_image}
  */
  readonly marketPlaceImage?: NfvServiceF5BigIpAwsServiceMarketPlaceImage;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#nodes NfvService#nodes}
  */
  readonly nodes: NfvServiceF5BigIpAwsServiceNodes[] | cdktf.IResolvable;
}

export function nfvServiceF5BigIpAwsServiceToTerraform(struct?: NfvServiceF5BigIpAwsServiceOutputReference | NfvServiceF5BigIpAwsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    admin_password: nfvServiceF5BigIpAwsServiceAdminPasswordToTerraform(struct!.adminPassword),
    aws_tgw_site_params: nfvServiceF5BigIpAwsServiceAwsTgwSiteParamsToTerraform(struct!.awsTgwSiteParams),
    endpoint_service: nfvServiceF5BigIpAwsServiceEndpointServiceToTerraform(struct!.endpointService),
    market_place_image: nfvServiceF5BigIpAwsServiceMarketPlaceImageToTerraform(struct!.marketPlaceImage),
    nodes: cdktf.listMapper(nfvServiceF5BigIpAwsServiceNodesToTerraform, true)(struct!.nodes),
  }
}


export function nfvServiceF5BigIpAwsServiceToHclTerraform(struct?: NfvServiceF5BigIpAwsServiceOutputReference | NfvServiceF5BigIpAwsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    admin_password: {
      value: nfvServiceF5BigIpAwsServiceAdminPasswordToHclTerraform(struct!.adminPassword),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceAdminPasswordList",
    },
    aws_tgw_site_params: {
      value: nfvServiceF5BigIpAwsServiceAwsTgwSiteParamsToHclTerraform(struct!.awsTgwSiteParams),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsList",
    },
    endpoint_service: {
      value: nfvServiceF5BigIpAwsServiceEndpointServiceToHclTerraform(struct!.endpointService),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceEndpointServiceList",
    },
    market_place_image: {
      value: nfvServiceF5BigIpAwsServiceMarketPlaceImageToHclTerraform(struct!.marketPlaceImage),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceMarketPlaceImageList",
    },
    nodes: {
      value: cdktf.listMapperHcl(nfvServiceF5BigIpAwsServiceNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceF5BigIpAwsServiceNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceF5BigIpAwsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceF5BigIpAwsService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._adminPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword?.internalValue;
    }
    if (this._awsTgwSiteParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsTgwSiteParams = this._awsTgwSiteParams?.internalValue;
    }
    if (this._endpointService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointService = this._endpointService?.internalValue;
    }
    if (this._marketPlaceImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketPlaceImage = this._marketPlaceImage?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceF5BigIpAwsService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._sshKey = undefined;
      this._tags = undefined;
      this._adminPassword.internalValue = undefined;
      this._awsTgwSiteParams.internalValue = undefined;
      this._endpointService.internalValue = undefined;
      this._marketPlaceImage.internalValue = undefined;
      this._nodes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._sshKey = value.sshKey;
      this._tags = value.tags;
      this._adminPassword.internalValue = value.adminPassword;
      this._awsTgwSiteParams.internalValue = value.awsTgwSiteParams;
      this._endpointService.internalValue = value.endpointService;
      this._marketPlaceImage.internalValue = value.marketPlaceImage;
      this._nodes.internalValue = value.nodes;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
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

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword = new NfvServiceF5BigIpAwsServiceAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: NfvServiceF5BigIpAwsServiceAdminPassword) {
    this._adminPassword.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword.internalValue;
  }

  // aws_tgw_site_params - computed: false, optional: true, required: false
  private _awsTgwSiteParams = new NfvServiceF5BigIpAwsServiceAwsTgwSiteParamsOutputReference(this, "aws_tgw_site_params");
  public get awsTgwSiteParams() {
    return this._awsTgwSiteParams;
  }
  public putAwsTgwSiteParams(value: NfvServiceF5BigIpAwsServiceAwsTgwSiteParams) {
    this._awsTgwSiteParams.internalValue = value;
  }
  public resetAwsTgwSiteParams() {
    this._awsTgwSiteParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTgwSiteParamsInput() {
    return this._awsTgwSiteParams.internalValue;
  }

  // endpoint_service - computed: false, optional: true, required: false
  private _endpointService = new NfvServiceF5BigIpAwsServiceEndpointServiceOutputReference(this, "endpoint_service");
  public get endpointService() {
    return this._endpointService;
  }
  public putEndpointService(value: NfvServiceF5BigIpAwsServiceEndpointService) {
    this._endpointService.internalValue = value;
  }
  public resetEndpointService() {
    this._endpointService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceInput() {
    return this._endpointService.internalValue;
  }

  // market_place_image - computed: false, optional: true, required: false
  private _marketPlaceImage = new NfvServiceF5BigIpAwsServiceMarketPlaceImageOutputReference(this, "market_place_image");
  public get marketPlaceImage() {
    return this._marketPlaceImage;
  }
  public putMarketPlaceImage(value: NfvServiceF5BigIpAwsServiceMarketPlaceImage) {
    this._marketPlaceImage.internalValue = value;
  }
  public resetMarketPlaceImage() {
    this._marketPlaceImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketPlaceImageInput() {
    return this._marketPlaceImage.internalValue;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new NfvServiceF5BigIpAwsServiceNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: NfvServiceF5BigIpAwsServiceNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnInternetPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnInternetPublicIpToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnInternetPublicIpOutputReference | NfvServiceHttpsManagementAdvertiseOnInternetPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnInternetPublicIpToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnInternetPublicIpOutputReference | NfvServiceHttpsManagementAdvertiseOnInternetPublicIp): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnInternetPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnInternetPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnInternetPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnInternet {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#public_ip NfvService#public_ip}
  */
  readonly publicIp: NfvServiceHttpsManagementAdvertiseOnInternetPublicIp;
}

export function nfvServiceHttpsManagementAdvertiseOnInternetToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnInternetOutputReference | NfvServiceHttpsManagementAdvertiseOnInternet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: nfvServiceHttpsManagementAdvertiseOnInternetPublicIpToTerraform(struct!.publicIp),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnInternetToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnInternetOutputReference | NfvServiceHttpsManagementAdvertiseOnInternet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: nfvServiceHttpsManagementAdvertiseOnInternetPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnInternetPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnInternetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnInternet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnInternet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new NfvServiceHttpsManagementAdvertiseOnInternetPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: NfvServiceHttpsManagementAdvertiseOnInternetPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#hash_algorithms NfvService#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling {
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#decryption_provider NfvService#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#location NfvService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#store_provider NfvService#store_provider}
  */
  readonly storeProvider?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#provider NfvService#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#url NfvService#url}
  */
  readonly url: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#blindfold_secret_info NfvService#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#clear_secret_info NfvService#clear_secret_info}
  */
  readonly clearSecretInfo?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults {
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#certificate_url NfvService#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#description NfvService#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_hash_algorithms NfvService#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#disable_ocsp_stapling NfvService#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#private_key NfvService#private_key}
  */
  readonly privateKey: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#use_system_defaults NfvService#use_system_defaults}
  */
  readonly useSystemDefaults?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesOutputReference {
    return new NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#cipher_suites NfvService#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#max_version NfvService#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#min_version NfvService#min_version}
  */
  readonly minVersion?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#default_security NfvService#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#low_security NfvService#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#medium_security NfvService#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_security NfvService#custom_security}
  */
  readonly customSecurity?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: nfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrlToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrlOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrlToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrlOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrl): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_header_elements NfvService#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVipUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#client_certificate_optional NfvService#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_crl NfvService#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#trusted_ca_url NfvService#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_disabled NfvService#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#crl NfvService#crl}
  */
  readonly crl?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#trusted_ca NfvService#trusted_ca}
  */
  readonly trustedCa?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_options NfvService#xfcc_options}
  */
  readonly xfccOptions?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrlList",
    },
    trusted_ca: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVipUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSliVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_mtls NfvService#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tls_certificates NfvService#tls_certificates}
  */
  readonly tlsCertificates: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tls_config NfvService#tls_config}
  */
  readonly tlsConfig?: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#use_mtls NfvService#use_mtls}
  */
  readonly useMtls?: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtls;
}

export function nfvServiceHttpsManagementAdvertiseOnSliVipToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: nfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsToTerraform(struct!.useMtls),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSliVipToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSliVipOutputReference | NfvServiceHttpsManagementAdvertiseOnSliVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(nfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesList",
    },
    tls_config: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigList",
    },
    use_mtls: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSliVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSliVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSliVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: NfvServiceHttpsManagementAdvertiseOnSliVipTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new NfvServiceHttpsManagementAdvertiseOnSliVipUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: NfvServiceHttpsManagementAdvertiseOnSliVipUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#hash_algorithms NfvService#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling {
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#decryption_provider NfvService#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#location NfvService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#store_provider NfvService#store_provider}
  */
  readonly storeProvider?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#provider NfvService#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#url NfvService#url}
  */
  readonly url: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#blindfold_secret_info NfvService#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#clear_secret_info NfvService#clear_secret_info}
  */
  readonly clearSecretInfo?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults {
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#certificate_url NfvService#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#description NfvService#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_hash_algorithms NfvService#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#disable_ocsp_stapling NfvService#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#private_key NfvService#private_key}
  */
  readonly privateKey: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#use_system_defaults NfvService#use_system_defaults}
  */
  readonly useSystemDefaults?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesOutputReference {
    return new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#cipher_suites NfvService#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#max_version NfvService#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#min_version NfvService#min_version}
  */
  readonly minVersion?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#default_security NfvService#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#low_security NfvService#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#medium_security NfvService#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_security NfvService#custom_security}
  */
  readonly customSecurity?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_header_elements NfvService#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#client_certificate_optional NfvService#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_crl NfvService#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#trusted_ca_url NfvService#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_disabled NfvService#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#crl NfvService#crl}
  */
  readonly crl?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#trusted_ca NfvService#trusted_ca}
  */
  readonly trustedCa?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_options NfvService#xfcc_options}
  */
  readonly xfccOptions?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlList",
    },
    trusted_ca: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloInternetVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_mtls NfvService#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tls_certificates NfvService#tls_certificates}
  */
  readonly tlsCertificates: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tls_config NfvService#tls_config}
  */
  readonly tlsConfig?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#use_mtls NfvService#use_mtls}
  */
  readonly useMtls?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtls;
}

export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsToTerraform(struct!.useMtls),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloInternetVipToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloInternetVipOutputReference | NfvServiceHttpsManagementAdvertiseOnSloInternetVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesList",
    },
    tls_config: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigList",
    },
    use_mtls: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloInternetVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloInternetVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVipUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#hash_algorithms NfvService#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling {
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#decryption_provider NfvService#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#location NfvService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#store_provider NfvService#store_provider}
  */
  readonly storeProvider?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#provider NfvService#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#url NfvService#url}
  */
  readonly url: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#blindfold_secret_info NfvService#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#clear_secret_info NfvService#clear_secret_info}
  */
  readonly clearSecretInfo?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults {
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#certificate_url NfvService#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#description NfvService#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_hash_algorithms NfvService#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#disable_ocsp_stapling NfvService#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#private_key NfvService#private_key}
  */
  readonly privateKey: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#use_system_defaults NfvService#use_system_defaults}
  */
  readonly useSystemDefaults?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesOutputReference {
    return new NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#cipher_suites NfvService#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#max_version NfvService#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#min_version NfvService#min_version}
  */
  readonly minVersion?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#default_security NfvService#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#low_security NfvService#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#medium_security NfvService#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_security NfvService#custom_security}
  */
  readonly customSecurity?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: nfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrlToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrlOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrlToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrlOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrl): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_header_elements NfvService#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSliUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#client_certificate_optional NfvService#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_crl NfvService#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#trusted_ca_url NfvService#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_disabled NfvService#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#crl NfvService#crl}
  */
  readonly crl?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#trusted_ca NfvService#trusted_ca}
  */
  readonly trustedCa?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_options NfvService#xfcc_options}
  */
  readonly xfccOptions?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSliUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrlList",
    },
    trusted_ca: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSliUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloSli {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_mtls NfvService#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tls_certificates NfvService#tls_certificates}
  */
  readonly tlsCertificates: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tls_config NfvService#tls_config}
  */
  readonly tlsConfig?: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#use_mtls NfvService#use_mtls}
  */
  readonly useMtls?: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtls;
}

export function nfvServiceHttpsManagementAdvertiseOnSloSliToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: nfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsToTerraform(struct!.useMtls),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloSliToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloSliOutputReference | NfvServiceHttpsManagementAdvertiseOnSloSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(nfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesList",
    },
    tls_config: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigList",
    },
    use_mtls: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: NfvServiceHttpsManagementAdvertiseOnSloSliTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new NfvServiceHttpsManagementAdvertiseOnSloSliUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: NfvServiceHttpsManagementAdvertiseOnSloSliUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#hash_algorithms NfvService#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling {
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#decryption_provider NfvService#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#location NfvService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#store_provider NfvService#store_provider}
  */
  readonly storeProvider?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#provider NfvService#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#url NfvService#url}
  */
  readonly url: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#blindfold_secret_info NfvService#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#clear_secret_info NfvService#clear_secret_info}
  */
  readonly clearSecretInfo?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults {
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#certificate_url NfvService#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#description NfvService#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_hash_algorithms NfvService#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#disable_ocsp_stapling NfvService#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#private_key NfvService#private_key}
  */
  readonly privateKey: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#use_system_defaults NfvService#use_system_defaults}
  */
  readonly useSystemDefaults?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesOutputReference {
    return new NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#cipher_suites NfvService#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#max_version NfvService#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#min_version NfvService#min_version}
  */
  readonly minVersion?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#default_security NfvService#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#low_security NfvService#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#medium_security NfvService#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#custom_security NfvService#custom_security}
  */
  readonly customSecurity?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: nfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrlToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrlOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrlToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrlOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrl): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_header_elements NfvService#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVipUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#client_certificate_optional NfvService#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_crl NfvService#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#trusted_ca_url NfvService#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_disabled NfvService#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#crl NfvService#crl}
  */
  readonly crl?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#trusted_ca NfvService#trusted_ca}
  */
  readonly trustedCa?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#xfcc_options NfvService#xfcc_options}
  */
  readonly xfccOptions?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrlList",
    },
    trusted_ca: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVipUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface NfvServiceHttpsManagementAdvertiseOnSloVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#no_mtls NfvService#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tls_certificates NfvService#tls_certificates}
  */
  readonly tlsCertificates: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tls_config NfvService#tls_config}
  */
  readonly tlsConfig?: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#use_mtls NfvService#use_mtls}
  */
  readonly useMtls?: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtls;
}

export function nfvServiceHttpsManagementAdvertiseOnSloVipToTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: nfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsToTerraform(struct!.useMtls),
  }
}


export function nfvServiceHttpsManagementAdvertiseOnSloVipToHclTerraform(struct?: NfvServiceHttpsManagementAdvertiseOnSloVipOutputReference | NfvServiceHttpsManagementAdvertiseOnSloVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(nfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesList",
    },
    tls_config: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigList",
    },
    use_mtls: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementAdvertiseOnSloVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagementAdvertiseOnSloVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagementAdvertiseOnSloVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: NfvServiceHttpsManagementAdvertiseOnSloVipTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new NfvServiceHttpsManagementAdvertiseOnSloVipUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: NfvServiceHttpsManagementAdvertiseOnSloVipUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface NfvServiceHttpsManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_internet_default_vip NfvService#advertise_on_internet_default_vip}
  */
  readonly advertiseOnInternetDefaultVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#default_https_port NfvService#default_https_port}
  */
  readonly defaultHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#domain_suffix NfvService#domain_suffix}
  */
  readonly domainSuffix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#https_port NfvService#https_port}
  */
  readonly httpsPort?: number;
  /**
  * advertise_on_internet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_internet NfvService#advertise_on_internet}
  */
  readonly advertiseOnInternet?: NfvServiceHttpsManagementAdvertiseOnInternet;
  /**
  * advertise_on_sli_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_sli_vip NfvService#advertise_on_sli_vip}
  */
  readonly advertiseOnSliVip?: NfvServiceHttpsManagementAdvertiseOnSliVip;
  /**
  * advertise_on_slo_internet_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_slo_internet_vip NfvService#advertise_on_slo_internet_vip}
  */
  readonly advertiseOnSloInternetVip?: NfvServiceHttpsManagementAdvertiseOnSloInternetVip;
  /**
  * advertise_on_slo_sli block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_slo_sli NfvService#advertise_on_slo_sli}
  */
  readonly advertiseOnSloSli?: NfvServiceHttpsManagementAdvertiseOnSloSli;
  /**
  * advertise_on_slo_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#advertise_on_slo_vip NfvService#advertise_on_slo_vip}
  */
  readonly advertiseOnSloVip?: NfvServiceHttpsManagementAdvertiseOnSloVip;
}

export function nfvServiceHttpsManagementToTerraform(struct?: NfvServiceHttpsManagementOutputReference | NfvServiceHttpsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_on_internet_default_vip: cdktf.booleanToTerraform(struct!.advertiseOnInternetDefaultVip),
    default_https_port: cdktf.booleanToTerraform(struct!.defaultHttpsPort),
    domain_suffix: cdktf.stringToTerraform(struct!.domainSuffix),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    advertise_on_internet: nfvServiceHttpsManagementAdvertiseOnInternetToTerraform(struct!.advertiseOnInternet),
    advertise_on_sli_vip: nfvServiceHttpsManagementAdvertiseOnSliVipToTerraform(struct!.advertiseOnSliVip),
    advertise_on_slo_internet_vip: nfvServiceHttpsManagementAdvertiseOnSloInternetVipToTerraform(struct!.advertiseOnSloInternetVip),
    advertise_on_slo_sli: nfvServiceHttpsManagementAdvertiseOnSloSliToTerraform(struct!.advertiseOnSloSli),
    advertise_on_slo_vip: nfvServiceHttpsManagementAdvertiseOnSloVipToTerraform(struct!.advertiseOnSloVip),
  }
}


export function nfvServiceHttpsManagementToHclTerraform(struct?: NfvServiceHttpsManagementOutputReference | NfvServiceHttpsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_on_internet_default_vip: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnInternetDefaultVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_suffix: {
      value: cdktf.stringToHclTerraform(struct!.domainSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advertise_on_internet: {
      value: nfvServiceHttpsManagementAdvertiseOnInternetToHclTerraform(struct!.advertiseOnInternet),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnInternetList",
    },
    advertise_on_sli_vip: {
      value: nfvServiceHttpsManagementAdvertiseOnSliVipToHclTerraform(struct!.advertiseOnSliVip),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSliVipList",
    },
    advertise_on_slo_internet_vip: {
      value: nfvServiceHttpsManagementAdvertiseOnSloInternetVipToHclTerraform(struct!.advertiseOnSloInternetVip),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloInternetVipList",
    },
    advertise_on_slo_sli: {
      value: nfvServiceHttpsManagementAdvertiseOnSloSliToHclTerraform(struct!.advertiseOnSloSli),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloSliList",
    },
    advertise_on_slo_vip: {
      value: nfvServiceHttpsManagementAdvertiseOnSloVipToHclTerraform(struct!.advertiseOnSloVip),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServiceHttpsManagementAdvertiseOnSloVipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServiceHttpsManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServiceHttpsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseOnInternetDefaultVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnInternetDefaultVip = this._advertiseOnInternetDefaultVip;
    }
    if (this._defaultHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHttpsPort = this._defaultHttpsPort;
    }
    if (this._domainSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSuffix = this._domainSuffix;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._advertiseOnInternet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnInternet = this._advertiseOnInternet?.internalValue;
    }
    if (this._advertiseOnSliVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSliVip = this._advertiseOnSliVip?.internalValue;
    }
    if (this._advertiseOnSloInternetVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloInternetVip = this._advertiseOnSloInternetVip?.internalValue;
    }
    if (this._advertiseOnSloSli?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloSli = this._advertiseOnSloSli?.internalValue;
    }
    if (this._advertiseOnSloVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloVip = this._advertiseOnSloVip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServiceHttpsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseOnInternetDefaultVip = undefined;
      this._defaultHttpsPort = undefined;
      this._domainSuffix = undefined;
      this._httpsPort = undefined;
      this._advertiseOnInternet.internalValue = undefined;
      this._advertiseOnSliVip.internalValue = undefined;
      this._advertiseOnSloInternetVip.internalValue = undefined;
      this._advertiseOnSloSli.internalValue = undefined;
      this._advertiseOnSloVip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseOnInternetDefaultVip = value.advertiseOnInternetDefaultVip;
      this._defaultHttpsPort = value.defaultHttpsPort;
      this._domainSuffix = value.domainSuffix;
      this._httpsPort = value.httpsPort;
      this._advertiseOnInternet.internalValue = value.advertiseOnInternet;
      this._advertiseOnSliVip.internalValue = value.advertiseOnSliVip;
      this._advertiseOnSloInternetVip.internalValue = value.advertiseOnSloInternetVip;
      this._advertiseOnSloSli.internalValue = value.advertiseOnSloSli;
      this._advertiseOnSloVip.internalValue = value.advertiseOnSloVip;
    }
  }

  // advertise_on_internet_default_vip - computed: false, optional: true, required: false
  private _advertiseOnInternetDefaultVip?: boolean | cdktf.IResolvable; 
  public get advertiseOnInternetDefaultVip() {
    return this.getBooleanAttribute('advertise_on_internet_default_vip');
  }
  public set advertiseOnInternetDefaultVip(value: boolean | cdktf.IResolvable) {
    this._advertiseOnInternetDefaultVip = value;
  }
  public resetAdvertiseOnInternetDefaultVip() {
    this._advertiseOnInternetDefaultVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnInternetDefaultVipInput() {
    return this._advertiseOnInternetDefaultVip;
  }

  // default_https_port - computed: false, optional: true, required: false
  private _defaultHttpsPort?: boolean | cdktf.IResolvable; 
  public get defaultHttpsPort() {
    return this.getBooleanAttribute('default_https_port');
  }
  public set defaultHttpsPort(value: boolean | cdktf.IResolvable) {
    this._defaultHttpsPort = value;
  }
  public resetDefaultHttpsPort() {
    this._defaultHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHttpsPortInput() {
    return this._defaultHttpsPort;
  }

  // domain_suffix - computed: false, optional: false, required: true
  private _domainSuffix?: string; 
  public get domainSuffix() {
    return this.getStringAttribute('domain_suffix');
  }
  public set domainSuffix(value: string) {
    this._domainSuffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSuffixInput() {
    return this._domainSuffix;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // advertise_on_internet - computed: false, optional: true, required: false
  private _advertiseOnInternet = new NfvServiceHttpsManagementAdvertiseOnInternetOutputReference(this, "advertise_on_internet");
  public get advertiseOnInternet() {
    return this._advertiseOnInternet;
  }
  public putAdvertiseOnInternet(value: NfvServiceHttpsManagementAdvertiseOnInternet) {
    this._advertiseOnInternet.internalValue = value;
  }
  public resetAdvertiseOnInternet() {
    this._advertiseOnInternet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnInternetInput() {
    return this._advertiseOnInternet.internalValue;
  }

  // advertise_on_sli_vip - computed: false, optional: true, required: false
  private _advertiseOnSliVip = new NfvServiceHttpsManagementAdvertiseOnSliVipOutputReference(this, "advertise_on_sli_vip");
  public get advertiseOnSliVip() {
    return this._advertiseOnSliVip;
  }
  public putAdvertiseOnSliVip(value: NfvServiceHttpsManagementAdvertiseOnSliVip) {
    this._advertiseOnSliVip.internalValue = value;
  }
  public resetAdvertiseOnSliVip() {
    this._advertiseOnSliVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSliVipInput() {
    return this._advertiseOnSliVip.internalValue;
  }

  // advertise_on_slo_internet_vip - computed: false, optional: true, required: false
  private _advertiseOnSloInternetVip = new NfvServiceHttpsManagementAdvertiseOnSloInternetVipOutputReference(this, "advertise_on_slo_internet_vip");
  public get advertiseOnSloInternetVip() {
    return this._advertiseOnSloInternetVip;
  }
  public putAdvertiseOnSloInternetVip(value: NfvServiceHttpsManagementAdvertiseOnSloInternetVip) {
    this._advertiseOnSloInternetVip.internalValue = value;
  }
  public resetAdvertiseOnSloInternetVip() {
    this._advertiseOnSloInternetVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloInternetVipInput() {
    return this._advertiseOnSloInternetVip.internalValue;
  }

  // advertise_on_slo_sli - computed: false, optional: true, required: false
  private _advertiseOnSloSli = new NfvServiceHttpsManagementAdvertiseOnSloSliOutputReference(this, "advertise_on_slo_sli");
  public get advertiseOnSloSli() {
    return this._advertiseOnSloSli;
  }
  public putAdvertiseOnSloSli(value: NfvServiceHttpsManagementAdvertiseOnSloSli) {
    this._advertiseOnSloSli.internalValue = value;
  }
  public resetAdvertiseOnSloSli() {
    this._advertiseOnSloSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloSliInput() {
    return this._advertiseOnSloSli.internalValue;
  }

  // advertise_on_slo_vip - computed: false, optional: true, required: false
  private _advertiseOnSloVip = new NfvServiceHttpsManagementAdvertiseOnSloVipOutputReference(this, "advertise_on_slo_vip");
  public get advertiseOnSloVip() {
    return this._advertiseOnSloVip;
  }
  public putAdvertiseOnSloVip(value: NfvServiceHttpsManagementAdvertiseOnSloVip) {
    this._advertiseOnSloVip.internalValue = value;
  }
  public resetAdvertiseOnSloVip() {
    this._advertiseOnSloVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloVipInput() {
    return this._advertiseOnSloVip.internalValue;
  }
}
export interface NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#decryption_provider NfvService#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#location NfvService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#store_provider NfvService#store_provider}
  */
  readonly storeProvider?: string;
}

export function nfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfoToTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfoOutputReference | NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function nfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfoToHclTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfoOutputReference | NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#provider NfvService#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#url NfvService#url}
  */
  readonly url: string;
}

export function nfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfoToTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfoOutputReference | NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function nfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfoToHclTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfoOutputReference | NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NfvServicePaloAltoFwServiceAutoSetupAdminPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#blindfold_secret_info NfvService#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#clear_secret_info NfvService#clear_secret_info}
  */
  readonly clearSecretInfo?: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfo;
}

export function nfvServicePaloAltoFwServiceAutoSetupAdminPasswordToTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordOutputReference | NfvServicePaloAltoFwServiceAutoSetupAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: nfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: nfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function nfvServicePaloAltoFwServiceAutoSetupAdminPasswordToHclTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordOutputReference | NfvServicePaloAltoFwServiceAutoSetupAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: nfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: nfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceAutoSetupAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceAutoSetupAdminPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceAutoSetupAdminPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: NfvServicePaloAltoFwServiceAutoSetupAdminPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#decryption_provider NfvService#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#location NfvService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#store_provider NfvService#store_provider}
  */
  readonly storeProvider?: string;
}

export function nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfoToTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfoOutputReference | NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfoOutputReference | NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#provider NfvService#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#url NfvService#url}
  */
  readonly url: string;
}

export function nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfoToTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfoOutputReference | NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfoToHclTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfoOutputReference | NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#blindfold_secret_info NfvService#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#clear_secret_info NfvService#clear_secret_info}
  */
  readonly clearSecretInfo?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfo;
}

export function nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyToTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyOutputReference | NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyToHclTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyOutputReference | NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface NfvServicePaloAltoFwServiceAutoSetupManualSshKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#public_key NfvService#public_key}
  */
  readonly publicKey: string;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#private_key NfvService#private_key}
  */
  readonly privateKey: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKey;
}

export function nfvServicePaloAltoFwServiceAutoSetupManualSshKeysToTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysOutputReference | NfvServicePaloAltoFwServiceAutoSetupManualSshKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    private_key: nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyToTerraform(struct!.privateKey),
  }
}


export function nfvServicePaloAltoFwServiceAutoSetupManualSshKeysToHclTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysOutputReference | NfvServicePaloAltoFwServiceAutoSetupManualSshKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: nfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceAutoSetupManualSshKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceAutoSetupManualSshKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceAutoSetupManualSshKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKey = undefined;
      this._privateKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKey = value.publicKey;
      this._privateKey.internalValue = value.privateKey;
    }
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: NfvServicePaloAltoFwServiceAutoSetupManualSshKeysPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }
}
export interface NfvServicePaloAltoFwServiceAutoSetup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#admin_username NfvService#admin_username}
  */
  readonly adminUsername: string;
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#admin_password NfvService#admin_password}
  */
  readonly adminPassword: NfvServicePaloAltoFwServiceAutoSetupAdminPassword;
  /**
  * manual_ssh_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#manual_ssh_keys NfvService#manual_ssh_keys}
  */
  readonly manualSshKeys?: NfvServicePaloAltoFwServiceAutoSetupManualSshKeys;
}

export function nfvServicePaloAltoFwServiceAutoSetupToTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupOutputReference | NfvServicePaloAltoFwServiceAutoSetup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    admin_password: nfvServicePaloAltoFwServiceAutoSetupAdminPasswordToTerraform(struct!.adminPassword),
    manual_ssh_keys: nfvServicePaloAltoFwServiceAutoSetupManualSshKeysToTerraform(struct!.manualSshKeys),
  }
}


export function nfvServicePaloAltoFwServiceAutoSetupToHclTerraform(struct?: NfvServicePaloAltoFwServiceAutoSetupOutputReference | NfvServicePaloAltoFwServiceAutoSetup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: nfvServicePaloAltoFwServiceAutoSetupAdminPasswordToHclTerraform(struct!.adminPassword),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceAutoSetupAdminPasswordList",
    },
    manual_ssh_keys: {
      value: nfvServicePaloAltoFwServiceAutoSetupManualSshKeysToHclTerraform(struct!.manualSshKeys),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceAutoSetupManualSshKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceAutoSetupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceAutoSetup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._adminPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword?.internalValue;
    }
    if (this._manualSshKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualSshKeys = this._manualSshKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceAutoSetup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._adminPassword.internalValue = undefined;
      this._manualSshKeys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._adminPassword.internalValue = value.adminPassword;
      this._manualSshKeys.internalValue = value.manualSshKeys;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword = new NfvServicePaloAltoFwServiceAutoSetupAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: NfvServicePaloAltoFwServiceAutoSetupAdminPassword) {
    this._adminPassword.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword.internalValue;
  }

  // manual_ssh_keys - computed: false, optional: true, required: false
  private _manualSshKeys = new NfvServicePaloAltoFwServiceAutoSetupManualSshKeysOutputReference(this, "manual_ssh_keys");
  public get manualSshKeys() {
    return this._manualSshKeys;
  }
  public putManualSshKeys(value: NfvServicePaloAltoFwServiceAutoSetupManualSshKeys) {
    this._manualSshKeys.internalValue = value;
  }
  public resetManualSshKeys() {
    this._manualSshKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSshKeysInput() {
    return this._manualSshKeys.internalValue;
  }
}
export interface NfvServicePaloAltoFwServiceAwsTgwSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#name NfvService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#namespace NfvService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tenant NfvService#tenant}
  */
  readonly tenant?: string;
}

export function nfvServicePaloAltoFwServiceAwsTgwSiteToTerraform(struct?: NfvServicePaloAltoFwServiceAwsTgwSiteOutputReference | NfvServicePaloAltoFwServiceAwsTgwSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nfvServicePaloAltoFwServiceAwsTgwSiteToHclTerraform(struct?: NfvServicePaloAltoFwServiceAwsTgwSiteOutputReference | NfvServicePaloAltoFwServiceAwsTgwSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceAwsTgwSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceAwsTgwSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceAwsTgwSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#decryption_provider NfvService#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#location NfvService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#store_provider NfvService#store_provider}
  */
  readonly storeProvider?: string;
}

export function nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfoToTerraform(struct?: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfoOutputReference | NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfoToHclTerraform(struct?: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfoOutputReference | NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#provider NfvService#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#url NfvService#url}
  */
  readonly url: string;
}

export function nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfoToTerraform(struct?: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfoOutputReference | NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfoToHclTerraform(struct?: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfoOutputReference | NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NfvServicePaloAltoFwServicePanoramaServerAuthorizationKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#blindfold_secret_info NfvService#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#clear_secret_info NfvService#clear_secret_info}
  */
  readonly clearSecretInfo?: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfo;
}

export function nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyToTerraform(struct?: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyOutputReference | NfvServicePaloAltoFwServicePanoramaServerAuthorizationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyToHclTerraform(struct?: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyOutputReference | NfvServicePaloAltoFwServicePanoramaServerAuthorizationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServicePanoramaServerAuthorizationKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface NfvServicePaloAltoFwServicePanoramaServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#device_group_name NfvService#device_group_name}
  */
  readonly deviceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#server NfvService#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#template_stack_name NfvService#template_stack_name}
  */
  readonly templateStackName?: string;
  /**
  * authorization_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#authorization_key NfvService#authorization_key}
  */
  readonly authorizationKey: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKey;
}

export function nfvServicePaloAltoFwServicePanoramaServerToTerraform(struct?: NfvServicePaloAltoFwServicePanoramaServerOutputReference | NfvServicePaloAltoFwServicePanoramaServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group_name: cdktf.stringToTerraform(struct!.deviceGroupName),
    server: cdktf.stringToTerraform(struct!.server),
    template_stack_name: cdktf.stringToTerraform(struct!.templateStackName),
    authorization_key: nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyToTerraform(struct!.authorizationKey),
  }
}


export function nfvServicePaloAltoFwServicePanoramaServerToHclTerraform(struct?: NfvServicePaloAltoFwServicePanoramaServerOutputReference | NfvServicePaloAltoFwServicePanoramaServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_stack_name: {
      value: cdktf.stringToHclTerraform(struct!.templateStackName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_key: {
      value: nfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyToHclTerraform(struct!.authorizationKey),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServicePanoramaServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServicePanoramaServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroupName = this._deviceGroupName;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._templateStackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStackName = this._templateStackName;
    }
    if (this._authorizationKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationKey = this._authorizationKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServicePanoramaServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceGroupName = undefined;
      this._server = undefined;
      this._templateStackName = undefined;
      this._authorizationKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceGroupName = value.deviceGroupName;
      this._server = value.server;
      this._templateStackName = value.templateStackName;
      this._authorizationKey.internalValue = value.authorizationKey;
    }
  }

  // device_group_name - computed: false, optional: true, required: false
  private _deviceGroupName?: string; 
  public get deviceGroupName() {
    return this.getStringAttribute('device_group_name');
  }
  public set deviceGroupName(value: string) {
    this._deviceGroupName = value;
  }
  public resetDeviceGroupName() {
    this._deviceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupNameInput() {
    return this._deviceGroupName;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // template_stack_name - computed: false, optional: true, required: false
  private _templateStackName?: string; 
  public get templateStackName() {
    return this.getStringAttribute('template_stack_name');
  }
  public set templateStackName(value: string) {
    this._templateStackName = value;
  }
  public resetTemplateStackName() {
    this._templateStackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackNameInput() {
    return this._templateStackName;
  }

  // authorization_key - computed: false, optional: false, required: true
  private _authorizationKey = new NfvServicePaloAltoFwServicePanoramaServerAuthorizationKeyOutputReference(this, "authorization_key");
  public get authorizationKey() {
    return this._authorizationKey;
  }
  public putAuthorizationKey(value: NfvServicePaloAltoFwServicePanoramaServerAuthorizationKey) {
    this._authorizationKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationKeyInput() {
    return this._authorizationKey.internalValue;
  }
}
export interface NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#ipv4 NfvService#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#ipv6 NfvService#ipv6}
  */
  readonly ipv6?: string;
}

export function nfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParamToTerraform(struct?: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParamOutputReference | NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function nfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParamToHclTerraform(struct?: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParamOutputReference | NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#existing_subnet_id NfvService#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#subnet_param NfvService#subnet_param}
  */
  readonly subnetParam?: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParam;
}

export function nfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetToTerraform(struct?: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetOutputReference | NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: nfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function nfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetToHclTerraform(struct?: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetOutputReference | NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: nfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface NfvServicePaloAltoFwServiceServiceNodesNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#aws_az_name NfvService#aws_az_name}
  */
  readonly awsAzName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#node_name NfvService#node_name}
  */
  readonly nodeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#reserved_mgmt_subnet NfvService#reserved_mgmt_subnet}
  */
  readonly reservedMgmtSubnet?: boolean | cdktf.IResolvable;
  /**
  * mgmt_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#mgmt_subnet NfvService#mgmt_subnet}
  */
  readonly mgmtSubnet?: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnet;
}

export function nfvServicePaloAltoFwServiceServiceNodesNodesToTerraform(struct?: NfvServicePaloAltoFwServiceServiceNodesNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_az_name: cdktf.stringToTerraform(struct!.awsAzName),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    reserved_mgmt_subnet: cdktf.booleanToTerraform(struct!.reservedMgmtSubnet),
    mgmt_subnet: nfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetToTerraform(struct!.mgmtSubnet),
  }
}


export function nfvServicePaloAltoFwServiceServiceNodesNodesToHclTerraform(struct?: NfvServicePaloAltoFwServiceServiceNodesNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_az_name: {
      value: cdktf.stringToHclTerraform(struct!.awsAzName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_mgmt_subnet: {
      value: cdktf.booleanToHclTerraform(struct!.reservedMgmtSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mgmt_subnet: {
      value: nfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetToHclTerraform(struct!.mgmtSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceServiceNodesNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvServicePaloAltoFwServiceServiceNodesNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAzName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAzName = this._awsAzName;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._reservedMgmtSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedMgmtSubnet = this._reservedMgmtSubnet;
    }
    if (this._mgmtSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtSubnet = this._mgmtSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceServiceNodesNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAzName = undefined;
      this._nodeName = undefined;
      this._reservedMgmtSubnet = undefined;
      this._mgmtSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAzName = value.awsAzName;
      this._nodeName = value.nodeName;
      this._reservedMgmtSubnet = value.reservedMgmtSubnet;
      this._mgmtSubnet.internalValue = value.mgmtSubnet;
    }
  }

  // aws_az_name - computed: false, optional: false, required: true
  private _awsAzName?: string; 
  public get awsAzName() {
    return this.getStringAttribute('aws_az_name');
  }
  public set awsAzName(value: string) {
    this._awsAzName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAzNameInput() {
    return this._awsAzName;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // reserved_mgmt_subnet - computed: false, optional: true, required: false
  private _reservedMgmtSubnet?: boolean | cdktf.IResolvable; 
  public get reservedMgmtSubnet() {
    return this.getBooleanAttribute('reserved_mgmt_subnet');
  }
  public set reservedMgmtSubnet(value: boolean | cdktf.IResolvable) {
    this._reservedMgmtSubnet = value;
  }
  public resetReservedMgmtSubnet() {
    this._reservedMgmtSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedMgmtSubnetInput() {
    return this._reservedMgmtSubnet;
  }

  // mgmt_subnet - computed: false, optional: true, required: false
  private _mgmtSubnet = new NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnetOutputReference(this, "mgmt_subnet");
  public get mgmtSubnet() {
    return this._mgmtSubnet;
  }
  public putMgmtSubnet(value: NfvServicePaloAltoFwServiceServiceNodesNodesMgmtSubnet) {
    this._mgmtSubnet.internalValue = value;
  }
  public resetMgmtSubnet() {
    this._mgmtSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtSubnetInput() {
    return this._mgmtSubnet.internalValue;
  }
}

export class NfvServicePaloAltoFwServiceServiceNodesNodesList extends cdktf.ComplexList {
  public internalValue? : NfvServicePaloAltoFwServiceServiceNodesNodes[] | cdktf.IResolvable

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
  public get(index: number): NfvServicePaloAltoFwServiceServiceNodesNodesOutputReference {
    return new NfvServicePaloAltoFwServiceServiceNodesNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvServicePaloAltoFwServiceServiceNodes {
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#nodes NfvService#nodes}
  */
  readonly nodes: NfvServicePaloAltoFwServiceServiceNodesNodes[] | cdktf.IResolvable;
}

export function nfvServicePaloAltoFwServiceServiceNodesToTerraform(struct?: NfvServicePaloAltoFwServiceServiceNodesOutputReference | NfvServicePaloAltoFwServiceServiceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nodes: cdktf.listMapper(nfvServicePaloAltoFwServiceServiceNodesNodesToTerraform, true)(struct!.nodes),
  }
}


export function nfvServicePaloAltoFwServiceServiceNodesToHclTerraform(struct?: NfvServicePaloAltoFwServiceServiceNodesOutputReference | NfvServicePaloAltoFwServiceServiceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nodes: {
      value: cdktf.listMapperHcl(nfvServicePaloAltoFwServiceServiceNodesNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceServiceNodesNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceServiceNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwServiceServiceNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwServiceServiceNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodes.internalValue = value.nodes;
    }
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new NfvServicePaloAltoFwServiceServiceNodesNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: NfvServicePaloAltoFwServiceServiceNodesNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}
export interface NfvServicePaloAltoFwService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#disable_panaroma NfvService#disable_panaroma}
  */
  readonly disablePanaroma?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#instance_type NfvService#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#pan_ami_bundle1 NfvService#pan_ami_bundle1}
  */
  readonly panAmiBundle1?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#pan_ami_bundle2 NfvService#pan_ami_bundle2}
  */
  readonly panAmiBundle2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#ssh_key NfvService#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#tags NfvService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#version NfvService#version}
  */
  readonly version?: string;
  /**
  * auto_setup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#auto_setup NfvService#auto_setup}
  */
  readonly autoSetup?: NfvServicePaloAltoFwServiceAutoSetup;
  /**
  * aws_tgw_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#aws_tgw_site NfvService#aws_tgw_site}
  */
  readonly awsTgwSite: NfvServicePaloAltoFwServiceAwsTgwSite;
  /**
  * panorama_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#panorama_server NfvService#panorama_server}
  */
  readonly panoramaServer?: NfvServicePaloAltoFwServicePanoramaServer;
  /**
  * service_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#service_nodes NfvService#service_nodes}
  */
  readonly serviceNodes: NfvServicePaloAltoFwServiceServiceNodes;
}

export function nfvServicePaloAltoFwServiceToTerraform(struct?: NfvServicePaloAltoFwServiceOutputReference | NfvServicePaloAltoFwService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_panaroma: cdktf.booleanToTerraform(struct!.disablePanaroma),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    pan_ami_bundle1: cdktf.booleanToTerraform(struct!.panAmiBundle1),
    pan_ami_bundle2: cdktf.booleanToTerraform(struct!.panAmiBundle2),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    version: cdktf.stringToTerraform(struct!.version),
    auto_setup: nfvServicePaloAltoFwServiceAutoSetupToTerraform(struct!.autoSetup),
    aws_tgw_site: nfvServicePaloAltoFwServiceAwsTgwSiteToTerraform(struct!.awsTgwSite),
    panorama_server: nfvServicePaloAltoFwServicePanoramaServerToTerraform(struct!.panoramaServer),
    service_nodes: nfvServicePaloAltoFwServiceServiceNodesToTerraform(struct!.serviceNodes),
  }
}


export function nfvServicePaloAltoFwServiceToHclTerraform(struct?: NfvServicePaloAltoFwServiceOutputReference | NfvServicePaloAltoFwService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_panaroma: {
      value: cdktf.booleanToHclTerraform(struct!.disablePanaroma),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pan_ami_bundle1: {
      value: cdktf.booleanToHclTerraform(struct!.panAmiBundle1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pan_ami_bundle2: {
      value: cdktf.booleanToHclTerraform(struct!.panAmiBundle2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_setup: {
      value: nfvServicePaloAltoFwServiceAutoSetupToHclTerraform(struct!.autoSetup),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceAutoSetupList",
    },
    aws_tgw_site: {
      value: nfvServicePaloAltoFwServiceAwsTgwSiteToHclTerraform(struct!.awsTgwSite),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceAwsTgwSiteList",
    },
    panorama_server: {
      value: nfvServicePaloAltoFwServicePanoramaServerToHclTerraform(struct!.panoramaServer),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServicePanoramaServerList",
    },
    service_nodes: {
      value: nfvServicePaloAltoFwServiceServiceNodesToHclTerraform(struct!.serviceNodes),
      isBlock: true,
      type: "list",
      storageClassType: "NfvServicePaloAltoFwServiceServiceNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvServicePaloAltoFwServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvServicePaloAltoFwService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePanaroma !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePanaroma = this._disablePanaroma;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._panAmiBundle1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.panAmiBundle1 = this._panAmiBundle1;
    }
    if (this._panAmiBundle2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.panAmiBundle2 = this._panAmiBundle2;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._autoSetup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSetup = this._autoSetup?.internalValue;
    }
    if (this._awsTgwSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsTgwSite = this._awsTgwSite?.internalValue;
    }
    if (this._panoramaServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaServer = this._panoramaServer?.internalValue;
    }
    if (this._serviceNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNodes = this._serviceNodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvServicePaloAltoFwService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disablePanaroma = undefined;
      this._instanceType = undefined;
      this._panAmiBundle1 = undefined;
      this._panAmiBundle2 = undefined;
      this._sshKey = undefined;
      this._tags = undefined;
      this._version = undefined;
      this._autoSetup.internalValue = undefined;
      this._awsTgwSite.internalValue = undefined;
      this._panoramaServer.internalValue = undefined;
      this._serviceNodes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disablePanaroma = value.disablePanaroma;
      this._instanceType = value.instanceType;
      this._panAmiBundle1 = value.panAmiBundle1;
      this._panAmiBundle2 = value.panAmiBundle2;
      this._sshKey = value.sshKey;
      this._tags = value.tags;
      this._version = value.version;
      this._autoSetup.internalValue = value.autoSetup;
      this._awsTgwSite.internalValue = value.awsTgwSite;
      this._panoramaServer.internalValue = value.panoramaServer;
      this._serviceNodes.internalValue = value.serviceNodes;
    }
  }

  // disable_panaroma - computed: false, optional: true, required: false
  private _disablePanaroma?: boolean | cdktf.IResolvable; 
  public get disablePanaroma() {
    return this.getBooleanAttribute('disable_panaroma');
  }
  public set disablePanaroma(value: boolean | cdktf.IResolvable) {
    this._disablePanaroma = value;
  }
  public resetDisablePanaroma() {
    this._disablePanaroma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePanaromaInput() {
    return this._disablePanaroma;
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

  // pan_ami_bundle1 - computed: false, optional: true, required: false
  private _panAmiBundle1?: boolean | cdktf.IResolvable; 
  public get panAmiBundle1() {
    return this.getBooleanAttribute('pan_ami_bundle1');
  }
  public set panAmiBundle1(value: boolean | cdktf.IResolvable) {
    this._panAmiBundle1 = value;
  }
  public resetPanAmiBundle1() {
    this._panAmiBundle1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panAmiBundle1Input() {
    return this._panAmiBundle1;
  }

  // pan_ami_bundle2 - computed: false, optional: true, required: false
  private _panAmiBundle2?: boolean | cdktf.IResolvable; 
  public get panAmiBundle2() {
    return this.getBooleanAttribute('pan_ami_bundle2');
  }
  public set panAmiBundle2(value: boolean | cdktf.IResolvable) {
    this._panAmiBundle2 = value;
  }
  public resetPanAmiBundle2() {
    this._panAmiBundle2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panAmiBundle2Input() {
    return this._panAmiBundle2;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
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

  // version - computed: false, optional: true, required: false
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

  // auto_setup - computed: false, optional: true, required: false
  private _autoSetup = new NfvServicePaloAltoFwServiceAutoSetupOutputReference(this, "auto_setup");
  public get autoSetup() {
    return this._autoSetup;
  }
  public putAutoSetup(value: NfvServicePaloAltoFwServiceAutoSetup) {
    this._autoSetup.internalValue = value;
  }
  public resetAutoSetup() {
    this._autoSetup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSetupInput() {
    return this._autoSetup.internalValue;
  }

  // aws_tgw_site - computed: false, optional: false, required: true
  private _awsTgwSite = new NfvServicePaloAltoFwServiceAwsTgwSiteOutputReference(this, "aws_tgw_site");
  public get awsTgwSite() {
    return this._awsTgwSite;
  }
  public putAwsTgwSite(value: NfvServicePaloAltoFwServiceAwsTgwSite) {
    this._awsTgwSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTgwSiteInput() {
    return this._awsTgwSite.internalValue;
  }

  // panorama_server - computed: false, optional: true, required: false
  private _panoramaServer = new NfvServicePaloAltoFwServicePanoramaServerOutputReference(this, "panorama_server");
  public get panoramaServer() {
    return this._panoramaServer;
  }
  public putPanoramaServer(value: NfvServicePaloAltoFwServicePanoramaServer) {
    this._panoramaServer.internalValue = value;
  }
  public resetPanoramaServer() {
    this._panoramaServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaServerInput() {
    return this._panoramaServer.internalValue;
  }

  // service_nodes - computed: false, optional: false, required: true
  private _serviceNodes = new NfvServicePaloAltoFwServiceServiceNodesOutputReference(this, "service_nodes");
  public get serviceNodes() {
    return this._serviceNodes;
  }
  public putServiceNodes(value: NfvServicePaloAltoFwServiceServiceNodes) {
    this._serviceNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodesInput() {
    return this._serviceNodes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service volterra_nfv_service}
*/
export class NfvService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_nfv_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NfvService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NfvService to import
  * @param importFromId The id of the existing NfvService that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NfvService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_nfv_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/nfv_service volterra_nfv_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfvServiceConfig
  */
  public constructor(scope: Construct, id: string, config: NfvServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_nfv_service',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._disableHttpsManagement = config.disableHttpsManagement;
    this._disableSshAccess = config.disableSshAccess;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._enabledSshAccess.internalValue = config.enabledSshAccess;
    this._f5BigIpAwsService.internalValue = config.f5BigIpAwsService;
    this._httpsManagement.internalValue = config.httpsManagement;
    this._paloAltoFwService.internalValue = config.paloAltoFwService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disable_https_management - computed: false, optional: true, required: false
  private _disableHttpsManagement?: boolean | cdktf.IResolvable; 
  public get disableHttpsManagement() {
    return this.getBooleanAttribute('disable_https_management');
  }
  public set disableHttpsManagement(value: boolean | cdktf.IResolvable) {
    this._disableHttpsManagement = value;
  }
  public resetDisableHttpsManagement() {
    this._disableHttpsManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHttpsManagementInput() {
    return this._disableHttpsManagement;
  }

  // disable_ssh_access - computed: false, optional: true, required: false
  private _disableSshAccess?: boolean | cdktf.IResolvable; 
  public get disableSshAccess() {
    return this.getBooleanAttribute('disable_ssh_access');
  }
  public set disableSshAccess(value: boolean | cdktf.IResolvable) {
    this._disableSshAccess = value;
  }
  public resetDisableSshAccess() {
    this._disableSshAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSshAccessInput() {
    return this._disableSshAccess;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // enabled_ssh_access - computed: false, optional: true, required: false
  private _enabledSshAccess = new NfvServiceEnabledSshAccessOutputReference(this, "enabled_ssh_access");
  public get enabledSshAccess() {
    return this._enabledSshAccess;
  }
  public putEnabledSshAccess(value: NfvServiceEnabledSshAccess) {
    this._enabledSshAccess.internalValue = value;
  }
  public resetEnabledSshAccess() {
    this._enabledSshAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledSshAccessInput() {
    return this._enabledSshAccess.internalValue;
  }

  // f5_big_ip_aws_service - computed: false, optional: true, required: false
  private _f5BigIpAwsService = new NfvServiceF5BigIpAwsServiceOutputReference(this, "f5_big_ip_aws_service");
  public get f5BigIpAwsService() {
    return this._f5BigIpAwsService;
  }
  public putF5BigIpAwsService(value: NfvServiceF5BigIpAwsService) {
    this._f5BigIpAwsService.internalValue = value;
  }
  public resetF5BigIpAwsService() {
    this._f5BigIpAwsService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5BigIpAwsServiceInput() {
    return this._f5BigIpAwsService.internalValue;
  }

  // https_management - computed: false, optional: true, required: false
  private _httpsManagement = new NfvServiceHttpsManagementOutputReference(this, "https_management");
  public get httpsManagement() {
    return this._httpsManagement;
  }
  public putHttpsManagement(value: NfvServiceHttpsManagement) {
    this._httpsManagement.internalValue = value;
  }
  public resetHttpsManagement() {
    this._httpsManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsManagementInput() {
    return this._httpsManagement.internalValue;
  }

  // palo_alto_fw_service - computed: false, optional: true, required: false
  private _paloAltoFwService = new NfvServicePaloAltoFwServiceOutputReference(this, "palo_alto_fw_service");
  public get paloAltoFwService() {
    return this._paloAltoFwService;
  }
  public putPaloAltoFwService(value: NfvServicePaloAltoFwService) {
    this._paloAltoFwService.internalValue = value;
  }
  public resetPaloAltoFwService() {
    this._paloAltoFwService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paloAltoFwServiceInput() {
    return this._paloAltoFwService.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_https_management: cdktf.booleanToTerraform(this._disableHttpsManagement),
      disable_ssh_access: cdktf.booleanToTerraform(this._disableSshAccess),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      enabled_ssh_access: nfvServiceEnabledSshAccessToTerraform(this._enabledSshAccess.internalValue),
      f5_big_ip_aws_service: nfvServiceF5BigIpAwsServiceToTerraform(this._f5BigIpAwsService.internalValue),
      https_management: nfvServiceHttpsManagementToTerraform(this._httpsManagement.internalValue),
      palo_alto_fw_service: nfvServicePaloAltoFwServiceToTerraform(this._paloAltoFwService.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_https_management: {
        value: cdktf.booleanToHclTerraform(this._disableHttpsManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_ssh_access: {
        value: cdktf.booleanToHclTerraform(this._disableSshAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_ssh_access: {
        value: nfvServiceEnabledSshAccessToHclTerraform(this._enabledSshAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NfvServiceEnabledSshAccessList",
      },
      f5_big_ip_aws_service: {
        value: nfvServiceF5BigIpAwsServiceToHclTerraform(this._f5BigIpAwsService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NfvServiceF5BigIpAwsServiceList",
      },
      https_management: {
        value: nfvServiceHttpsManagementToHclTerraform(this._httpsManagement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NfvServiceHttpsManagementList",
      },
      palo_alto_fw_service: {
        value: nfvServicePaloAltoFwServiceToHclTerraform(this._paloAltoFwService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NfvServicePaloAltoFwServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
