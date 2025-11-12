// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance Auth Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#auth_code ManagedFirewall#auth_code}
  */
  readonly authCode?: string;
  /**
  * Instance Auth Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#auth_key ManagedFirewall#auth_key}
  */
  readonly authKey?: string;
  /**
  * Region Level IP Prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#bootstrap ManagedFirewall#bootstrap}
  */
  readonly bootstrap?: string;
  /**
  * CIDR range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#cidr ManagedFirewall#cidr}
  */
  readonly cidr: string;
  /**
  * Cloud Account Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#cloud_creds_name ManagedFirewall#cloud_creds_name}
  */
  readonly cloudCredsName: string;
  /**
  * Cloud Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#cloud_region ManagedFirewall#cloud_region}
  */
  readonly cloudRegion: string;
  /**
  * Set this to true if you would like to Decommission Managed Firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#decommission ManagedFirewall#decommission}
  */
  readonly decommission: boolean | cdktf.IResolvable;
  /**
  * Type of Firewall, e.g: vmseries or checkpoint-security-gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#firewall_type ManagedFirewall#firewall_type}
  */
  readonly firewallType: string;
  /**
  * Instance size to be filled in Instance details Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#instance_size ManagedFirewall#instance_size}
  */
  readonly instanceSize: string;
  /**
  * License type, e.g: BYOL,PAYG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#license_settings ManagedFirewall#license_settings}
  */
  readonly licenseSettings?: string;
  /**
  * Name of the Resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#name ManagedFirewall#name}
  */
  readonly name: string;
  /**
  * Set this to true if you would like to onboard Managed Firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#onboard ManagedFirewall#onboard}
  */
  readonly onboard: boolean | cdktf.IResolvable;
  /**
  * SIC Key for checkpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#sic_key ManagedFirewall#sic_key}
  */
  readonly sicKey?: string;
  /**
  * Version to be filled in Instance details Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#version ManagedFirewall#version}
  */
  readonly version: string;
  /**
  * Wait for the rollout of the task to complete. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#wait_for_rollout ManagedFirewall#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * access_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#access_details ManagedFirewall#access_details}
  */
  readonly accessDetails: ManagedFirewallAccessDetails[] | cdktf.IResolvable;
  /**
  * assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#assignments ManagedFirewall#assignments}
  */
  readonly assignments?: ManagedFirewallAssignments[] | cdktf.IResolvable;
  /**
  * health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#health_check_config ManagedFirewall#health_check_config}
  */
  readonly healthCheckConfig?: ManagedFirewallHealthCheckConfig[] | cdktf.IResolvable;
  /**
  * scaling_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#scaling_settings ManagedFirewall#scaling_settings}
  */
  readonly scalingSettings: ManagedFirewallScalingSettings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#timeouts ManagedFirewall#timeouts}
  */
  readonly timeouts?: ManagedFirewallTimeouts;
}
export interface ManagedFirewallAccessDetails {
  /**
  * Name of Keypair, applicable when `Existing key pair` option has been selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#key_pair_name ManagedFirewall#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#password ManagedFirewall#password}
  */
  readonly password: string;
  /**
  * Public Key details when selected option is `Provide public key`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#public_key ManagedFirewall#public_key}
  */
  readonly publicKey?: string;
  /**
  * Should be one of Generate new key pair/Provide public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#select_option_for_ssh ManagedFirewall#select_option_for_ssh}
  */
  readonly selectOptionForSsh: string;
  /**
  * UserName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#username ManagedFirewall#username}
  */
  readonly username: string;
}

export function managedFirewallAccessDetailsToTerraform(struct?: ManagedFirewallAccessDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pair_name: cdktf.stringToTerraform(struct!.keyPairName),
    password: cdktf.stringToTerraform(struct!.password),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    select_option_for_ssh: cdktf.stringToTerraform(struct!.selectOptionForSsh),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function managedFirewallAccessDetailsToHclTerraform(struct?: ManagedFirewallAccessDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pair_name: {
      value: cdktf.stringToHclTerraform(struct!.keyPairName),
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
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    select_option_for_ssh: {
      value: cdktf.stringToHclTerraform(struct!.selectOptionForSsh),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedFirewallAccessDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedFirewallAccessDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPairName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPairName = this._keyPairName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._selectOptionForSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectOptionForSsh = this._selectOptionForSsh;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedFirewallAccessDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPairName = undefined;
      this._password = undefined;
      this._publicKey = undefined;
      this._selectOptionForSsh = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyPairName = value.keyPairName;
      this._password = value.password;
      this._publicKey = value.publicKey;
      this._selectOptionForSsh = value.selectOptionForSsh;
      this._username = value.username;
    }
  }

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // select_option_for_ssh - computed: false, optional: false, required: true
  private _selectOptionForSsh?: string; 
  public get selectOptionForSsh() {
    return this.getStringAttribute('select_option_for_ssh');
  }
  public set selectOptionForSsh(value: string) {
    this._selectOptionForSsh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectOptionForSshInput() {
    return this._selectOptionForSsh;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ManagedFirewallAccessDetailsList extends cdktf.ComplexList {
  public internalValue? : ManagedFirewallAccessDetails[] | cdktf.IResolvable

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
  public get(index: number): ManagedFirewallAccessDetailsOutputReference {
    return new ManagedFirewallAccessDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedFirewallAssignments {
  /**
  * Device Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#device_group ManagedFirewall#device_group}
  */
  readonly deviceGroup: string;
  /**
  * Name of Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#template_name ManagedFirewall#template_name}
  */
  readonly templateName: string;
}

export function managedFirewallAssignmentsToTerraform(struct?: ManagedFirewallAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: cdktf.stringToTerraform(struct!.deviceGroup),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function managedFirewallAssignmentsToHclTerraform(struct?: ManagedFirewallAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: cdktf.stringToHclTerraform(struct!.deviceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedFirewallAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedFirewallAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedFirewallAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceGroup = value.deviceGroup;
      this._templateName = value.templateName;
    }
  }

  // device_group - computed: false, optional: false, required: true
  private _deviceGroup?: string; 
  public get deviceGroup() {
    return this.getStringAttribute('device_group');
  }
  public set deviceGroup(value: string) {
    this._deviceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class ManagedFirewallAssignmentsList extends cdktf.ComplexList {
  public internalValue? : ManagedFirewallAssignments[] | cdktf.IResolvable

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
  public get(index: number): ManagedFirewallAssignmentsOutputReference {
    return new ManagedFirewallAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedFirewallHealthCheckConfig {
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#port ManagedFirewall#port}
  */
  readonly port: string;
  /**
  * Protocol Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#protocol ManagedFirewall#protocol}
  */
  readonly protocol: string;
}

export function managedFirewallHealthCheckConfigToTerraform(struct?: ManagedFirewallHealthCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function managedFirewallHealthCheckConfigToHclTerraform(struct?: ManagedFirewallHealthCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedFirewallHealthCheckConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedFirewallHealthCheckConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedFirewallHealthCheckConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ManagedFirewallHealthCheckConfigList extends cdktf.ComplexList {
  public internalValue? : ManagedFirewallHealthCheckConfig[] | cdktf.IResolvable

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
  public get(index: number): ManagedFirewallHealthCheckConfigOutputReference {
    return new ManagedFirewallHealthCheckConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedFirewallScalingSettings {
  /**
  * Default Capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#desired ManagedFirewall#desired}
  */
  readonly desired?: number;
  /**
  * Maximum Capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#max ManagedFirewall#max}
  */
  readonly max: number;
  /**
  * Minimum Capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#min ManagedFirewall#min}
  */
  readonly min: number;
}

export function managedFirewallScalingSettingsToTerraform(struct?: ManagedFirewallScalingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired: cdktf.numberToTerraform(struct!.desired),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function managedFirewallScalingSettingsToHclTerraform(struct?: ManagedFirewallScalingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired: {
      value: cdktf.numberToHclTerraform(struct!.desired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedFirewallScalingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedFirewallScalingSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desired !== undefined) {
      hasAnyValues = true;
      internalValueResult.desired = this._desired;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedFirewallScalingSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desired = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desired = value.desired;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // desired - computed: false, optional: true, required: false
  private _desired?: number; 
  public get desired() {
    return this.getNumberAttribute('desired');
  }
  public set desired(value: number) {
    this._desired = value;
  }
  public resetDesired() {
    this._desired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredInput() {
    return this._desired;
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class ManagedFirewallScalingSettingsList extends cdktf.ComplexList {
  public internalValue? : ManagedFirewallScalingSettings[] | cdktf.IResolvable

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
  public get(index: number): ManagedFirewallScalingSettingsOutputReference {
    return new ManagedFirewallScalingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedFirewallTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#create ManagedFirewall#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#delete ManagedFirewall#delete}
  */
  readonly delete?: string;
}

export function managedFirewallTimeoutsToTerraform(struct?: ManagedFirewallTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function managedFirewallTimeoutsToHclTerraform(struct?: ManagedFirewallTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedFirewallTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagedFirewallTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedFirewallTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall prosimo_managed_firewall}
*/
export class ManagedFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_managed_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedFirewall to import
  * @param importFromId The id of the existing ManagedFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_managed_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/managed_firewall prosimo_managed_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_managed_firewall',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authCode = config.authCode;
    this._authKey = config.authKey;
    this._bootstrap = config.bootstrap;
    this._cidr = config.cidr;
    this._cloudCredsName = config.cloudCredsName;
    this._cloudRegion = config.cloudRegion;
    this._decommission = config.decommission;
    this._firewallType = config.firewallType;
    this._instanceSize = config.instanceSize;
    this._licenseSettings = config.licenseSettings;
    this._name = config.name;
    this._onboard = config.onboard;
    this._sicKey = config.sicKey;
    this._version = config.version;
    this._waitForRollout = config.waitForRollout;
    this._accessDetails.internalValue = config.accessDetails;
    this._assignments.internalValue = config.assignments;
    this._healthCheckConfig.internalValue = config.healthCheckConfig;
    this._scalingSettings.internalValue = config.scalingSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // bootstrap - computed: false, optional: true, required: false
  private _bootstrap?: string; 
  public get bootstrap() {
    return this.getStringAttribute('bootstrap');
  }
  public set bootstrap(value: string) {
    this._bootstrap = value;
  }
  public resetBootstrap() {
    this._bootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cloud_creds_name - computed: false, optional: false, required: true
  private _cloudCredsName?: string; 
  public get cloudCredsName() {
    return this.getStringAttribute('cloud_creds_name');
  }
  public set cloudCredsName(value: string) {
    this._cloudCredsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredsNameInput() {
    return this._cloudCredsName;
  }

  // cloud_region - computed: false, optional: false, required: true
  private _cloudRegion?: string; 
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }
  public set cloudRegion(value: string) {
    this._cloudRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRegionInput() {
    return this._cloudRegion;
  }

  // decommission - computed: false, optional: false, required: true
  private _decommission?: boolean | cdktf.IResolvable; 
  public get decommission() {
    return this.getBooleanAttribute('decommission');
  }
  public set decommission(value: boolean | cdktf.IResolvable) {
    this._decommission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decommissionInput() {
    return this._decommission;
  }

  // firewall_type - computed: false, optional: false, required: true
  private _firewallType?: string; 
  public get firewallType() {
    return this.getStringAttribute('firewall_type');
  }
  public set firewallType(value: string) {
    this._firewallType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTypeInput() {
    return this._firewallType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_size - computed: false, optional: false, required: true
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // license_settings - computed: false, optional: true, required: false
  private _licenseSettings?: string; 
  public get licenseSettings() {
    return this.getStringAttribute('license_settings');
  }
  public set licenseSettings(value: string) {
    this._licenseSettings = value;
  }
  public resetLicenseSettings() {
    this._licenseSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseSettingsInput() {
    return this._licenseSettings;
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

  // onboard - computed: false, optional: false, required: true
  private _onboard?: boolean | cdktf.IResolvable; 
  public get onboard() {
    return this.getBooleanAttribute('onboard');
  }
  public set onboard(value: boolean | cdktf.IResolvable) {
    this._onboard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardInput() {
    return this._onboard;
  }

  // sic_key - computed: false, optional: true, required: false
  private _sicKey?: string; 
  public get sicKey() {
    return this.getStringAttribute('sic_key');
  }
  public set sicKey(value: string) {
    this._sicKey = value;
  }
  public resetSicKey() {
    this._sicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sicKeyInput() {
    return this._sicKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // access_details - computed: false, optional: false, required: true
  private _accessDetails = new ManagedFirewallAccessDetailsList(this, "access_details", true);
  public get accessDetails() {
    return this._accessDetails;
  }
  public putAccessDetails(value: ManagedFirewallAccessDetails[] | cdktf.IResolvable) {
    this._accessDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDetailsInput() {
    return this._accessDetails.internalValue;
  }

  // assignments - computed: false, optional: true, required: false
  private _assignments = new ManagedFirewallAssignmentsList(this, "assignments", true);
  public get assignments() {
    return this._assignments;
  }
  public putAssignments(value: ManagedFirewallAssignments[] | cdktf.IResolvable) {
    this._assignments.internalValue = value;
  }
  public resetAssignments() {
    this._assignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentsInput() {
    return this._assignments.internalValue;
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig = new ManagedFirewallHealthCheckConfigList(this, "health_check_config", true);
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: ManagedFirewallHealthCheckConfig[] | cdktf.IResolvable) {
    this._healthCheckConfig.internalValue = value;
  }
  public resetHealthCheckConfig() {
    this._healthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig.internalValue;
  }

  // scaling_settings - computed: false, optional: false, required: true
  private _scalingSettings = new ManagedFirewallScalingSettingsList(this, "scaling_settings", true);
  public get scalingSettings() {
    return this._scalingSettings;
  }
  public putScalingSettings(value: ManagedFirewallScalingSettings[] | cdktf.IResolvable) {
    this._scalingSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingSettingsInput() {
    return this._scalingSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagedFirewallTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagedFirewallTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_code: cdktf.stringToTerraform(this._authCode),
      auth_key: cdktf.stringToTerraform(this._authKey),
      bootstrap: cdktf.stringToTerraform(this._bootstrap),
      cidr: cdktf.stringToTerraform(this._cidr),
      cloud_creds_name: cdktf.stringToTerraform(this._cloudCredsName),
      cloud_region: cdktf.stringToTerraform(this._cloudRegion),
      decommission: cdktf.booleanToTerraform(this._decommission),
      firewall_type: cdktf.stringToTerraform(this._firewallType),
      instance_size: cdktf.stringToTerraform(this._instanceSize),
      license_settings: cdktf.stringToTerraform(this._licenseSettings),
      name: cdktf.stringToTerraform(this._name),
      onboard: cdktf.booleanToTerraform(this._onboard),
      sic_key: cdktf.stringToTerraform(this._sicKey),
      version: cdktf.stringToTerraform(this._version),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      access_details: cdktf.listMapper(managedFirewallAccessDetailsToTerraform, true)(this._accessDetails.internalValue),
      assignments: cdktf.listMapper(managedFirewallAssignmentsToTerraform, true)(this._assignments.internalValue),
      health_check_config: cdktf.listMapper(managedFirewallHealthCheckConfigToTerraform, true)(this._healthCheckConfig.internalValue),
      scaling_settings: cdktf.listMapper(managedFirewallScalingSettingsToTerraform, true)(this._scalingSettings.internalValue),
      timeouts: managedFirewallTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_code: {
        value: cdktf.stringToHclTerraform(this._authCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap: {
        value: cdktf.stringToHclTerraform(this._bootstrap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_creds_name: {
        value: cdktf.stringToHclTerraform(this._cloudCredsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_region: {
        value: cdktf.stringToHclTerraform(this._cloudRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decommission: {
        value: cdktf.booleanToHclTerraform(this._decommission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_type: {
        value: cdktf.stringToHclTerraform(this._firewallType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_size: {
        value: cdktf.stringToHclTerraform(this._instanceSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_settings: {
        value: cdktf.stringToHclTerraform(this._licenseSettings),
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
      onboard: {
        value: cdktf.booleanToHclTerraform(this._onboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sic_key: {
        value: cdktf.stringToHclTerraform(this._sicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_rollout: {
        value: cdktf.booleanToHclTerraform(this._waitForRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_details: {
        value: cdktf.listMapperHcl(managedFirewallAccessDetailsToHclTerraform, true)(this._accessDetails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedFirewallAccessDetailsList",
      },
      assignments: {
        value: cdktf.listMapperHcl(managedFirewallAssignmentsToHclTerraform, true)(this._assignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedFirewallAssignmentsList",
      },
      health_check_config: {
        value: cdktf.listMapperHcl(managedFirewallHealthCheckConfigToHclTerraform, true)(this._healthCheckConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedFirewallHealthCheckConfigList",
      },
      scaling_settings: {
        value: cdktf.listMapperHcl(managedFirewallScalingSettingsToHclTerraform, true)(this._scalingSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedFirewallScalingSettingsList",
      },
      timeouts: {
        value: managedFirewallTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagedFirewallTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
