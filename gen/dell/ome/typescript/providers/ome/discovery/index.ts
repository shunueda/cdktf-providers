// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Provide a cron expression based on Quartz cron format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#cron Discovery#cron}
  */
  readonly cron?: string;
  /**
  * 
  * 				- Provide the list of discovery targets.
  *       			- Each discovery target is a set of "network_address_detail", "device_types", and one or more protocol credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#discovery_config_targets Discovery#discovery_config_targets}
  */
  readonly discoveryConfigTargets: DiscoveryDiscoveryConfigTargets[] | cdktf.IResolvable;
  /**
  * 
  * 				- Enter the email address to which notifications are to be sent about the discovery job status.
  * 				- Configure the SMTP settings to allow sending notifications to an email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#email_recipient Discovery#email_recipient}
  */
  readonly emailRecipient?: string;
  /**
  * 
  * 				- Enable the use of SNMP community strings to receive SNMP traps using Application Settings in OpenManage Enterprise. 
  * 				- This option is available only for the discovered iDRAC servers and MX7000 chassis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#enable_community_strings Discovery#enable_community_strings}
  */
  readonly enableCommunityStrings?: boolean | cdktf.IResolvable;
  /**
  * Provides the option to ignore partial failures. Partial failures occur when there is a combination of both discovered and undiscovered IPs with Schedule is set to `RunNow`. If `partial_failure` is set `false` then partial_failure is not ignored, and module will error out.If `partial_failure` is set `true` then partial_failure is ignored, and module will not error out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#ignore_partial_failure Discovery#ignore_partial_failure}
  */
  readonly ignorePartialFailure?: boolean | cdktf.IResolvable;
  /**
  * Name of the discovery configuration job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
  /**
  * Provides the option to schedule the discovery job. If `RunLater` is selected, then attribute `cron` must be specified. If `RunNow` is selected, then attribute `timeout` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#schedule Discovery#schedule}
  */
  readonly schedule: string;
  /**
  * Provide a timeout in minute to track the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#timeout Discovery#timeout}
  */
  readonly timeout?: number;
  /**
  * 
  * 				- Enable OpenManage Enterprise to receive the incoming SNMP traps from the discovered devices. 
  * 				- This is effective only for servers discovered by using their iDRAC interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#trap_destination Discovery#trap_destination}
  */
  readonly trapDestination?: boolean | cdktf.IResolvable;
}
export interface DiscoveryDiscoveryConfigTargetsRedfish {
  /**
  * Enable the Certificate Authority (CA) check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#ca_check Discovery#ca_check}
  */
  readonly caCheck?: boolean | cdktf.IResolvable;
  /**
  * Enable the Common Name (CN) check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#cn_check Discovery#cn_check}
  */
  readonly cnCheck?: boolean | cdktf.IResolvable;
  /**
  * Provide a password for the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#password Discovery#password}
  */
  readonly password: string;
  /**
  * Enter the port number that the job must use to discover the devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#port Discovery#port}
  */
  readonly port?: number;
  /**
  * Enter the number of repeated attempts required to discover a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#retries Discovery#retries}
  */
  readonly retries?: number;
  /**
  * Enter the time in seconds after which a job must stop running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#timeout Discovery#timeout}
  */
  readonly timeout?: number;
  /**
  * Provide a username for the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#username Discovery#username}
  */
  readonly username: string;
}

export function discoveryDiscoveryConfigTargetsRedfishToTerraform(struct?: DiscoveryDiscoveryConfigTargetsRedfish | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_check: cdktf.booleanToTerraform(struct!.caCheck),
    cn_check: cdktf.booleanToTerraform(struct!.cnCheck),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function discoveryDiscoveryConfigTargetsRedfishToHclTerraform(struct?: DiscoveryDiscoveryConfigTargetsRedfish | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_check: {
      value: cdktf.booleanToHclTerraform(struct!.caCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cn_check: {
      value: cdktf.booleanToHclTerraform(struct!.cnCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DiscoveryDiscoveryConfigTargetsRedfishOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryDiscoveryConfigTargetsRedfish | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCheck = this._caCheck;
    }
    if (this._cnCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnCheck = this._cnCheck;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConfigTargetsRedfish | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCheck = undefined;
      this._cnCheck = undefined;
      this._password = undefined;
      this._port = undefined;
      this._retries = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCheck = value.caCheck;
      this._cnCheck = value.cnCheck;
      this._password = value.password;
      this._port = value.port;
      this._retries = value.retries;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // ca_check - computed: true, optional: true, required: false
  private _caCheck?: boolean | cdktf.IResolvable; 
  public get caCheck() {
    return this.getBooleanAttribute('ca_check');
  }
  public set caCheck(value: boolean | cdktf.IResolvable) {
    this._caCheck = value;
  }
  public resetCaCheck() {
    this._caCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCheckInput() {
    return this._caCheck;
  }

  // cn_check - computed: true, optional: true, required: false
  private _cnCheck?: boolean | cdktf.IResolvable; 
  public get cnCheck() {
    return this.getBooleanAttribute('cn_check');
  }
  public set cnCheck(value: boolean | cdktf.IResolvable) {
    this._cnCheck = value;
  }
  public resetCnCheck() {
    this._cnCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnCheckInput() {
    return this._cnCheck;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface DiscoveryDiscoveryConfigTargetsSnmp {
  /**
  * Community string for the SNMP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#community Discovery#community}
  */
  readonly community: string;
  /**
  * Enter the port number that the job must use to discover the devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#port Discovery#port}
  */
  readonly port?: number;
  /**
  * Enter the number of repeated attempts required to discover a device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#retries Discovery#retries}
  */
  readonly retries?: number;
  /**
  * Enter the time in seconds after which a job must stop running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#timeout Discovery#timeout}
  */
  readonly timeout?: number;
}

export function discoveryDiscoveryConfigTargetsSnmpToTerraform(struct?: DiscoveryDiscoveryConfigTargetsSnmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
    port: cdktf.numberToTerraform(struct!.port),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function discoveryDiscoveryConfigTargetsSnmpToHclTerraform(struct?: DiscoveryDiscoveryConfigTargetsSnmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConfigTargetsSnmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryDiscoveryConfigTargetsSnmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConfigTargetsSnmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
      this._port = undefined;
      this._retries = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
      this._port = value.port;
      this._retries = value.retries;
      this._timeout = value.timeout;
    }
  }

  // community - computed: false, optional: false, required: true
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DiscoveryDiscoveryConfigTargetsSsh {
  /**
  * Verify the known host key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#check_known_hosts Discovery#check_known_hosts}
  */
  readonly checkKnownHosts?: boolean | cdktf.IResolvable;
  /**
  * Use the SUDO option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#is_sudo_user Discovery#is_sudo_user}
  */
  readonly isSudoUser?: boolean | cdktf.IResolvable;
  /**
  * Provide a password for the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#password Discovery#password}
  */
  readonly password: string;
  /**
  * Enter the port number that the job must use to discover the devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#port Discovery#port}
  */
  readonly port?: number;
  /**
  * Enter the number of repeated attempts required to discover a device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#retries Discovery#retries}
  */
  readonly retries?: number;
  /**
  * Enter the time in seconds after which a job must stop running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#timeout Discovery#timeout}
  */
  readonly timeout?: number;
  /**
  * Provide a username for the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#username Discovery#username}
  */
  readonly username: string;
}

export function discoveryDiscoveryConfigTargetsSshToTerraform(struct?: DiscoveryDiscoveryConfigTargetsSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_known_hosts: cdktf.booleanToTerraform(struct!.checkKnownHosts),
    is_sudo_user: cdktf.booleanToTerraform(struct!.isSudoUser),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function discoveryDiscoveryConfigTargetsSshToHclTerraform(struct?: DiscoveryDiscoveryConfigTargetsSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_known_hosts: {
      value: cdktf.booleanToHclTerraform(struct!.checkKnownHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_sudo_user: {
      value: cdktf.booleanToHclTerraform(struct!.isSudoUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DiscoveryDiscoveryConfigTargetsSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryDiscoveryConfigTargetsSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkKnownHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkKnownHosts = this._checkKnownHosts;
    }
    if (this._isSudoUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSudoUser = this._isSudoUser;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConfigTargetsSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkKnownHosts = undefined;
      this._isSudoUser = undefined;
      this._password = undefined;
      this._port = undefined;
      this._retries = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkKnownHosts = value.checkKnownHosts;
      this._isSudoUser = value.isSudoUser;
      this._password = value.password;
      this._port = value.port;
      this._retries = value.retries;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // check_known_hosts - computed: true, optional: true, required: false
  private _checkKnownHosts?: boolean | cdktf.IResolvable; 
  public get checkKnownHosts() {
    return this.getBooleanAttribute('check_known_hosts');
  }
  public set checkKnownHosts(value: boolean | cdktf.IResolvable) {
    this._checkKnownHosts = value;
  }
  public resetCheckKnownHosts() {
    this._checkKnownHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkKnownHostsInput() {
    return this._checkKnownHosts;
  }

  // is_sudo_user - computed: true, optional: true, required: false
  private _isSudoUser?: boolean | cdktf.IResolvable; 
  public get isSudoUser() {
    return this.getBooleanAttribute('is_sudo_user');
  }
  public set isSudoUser(value: boolean | cdktf.IResolvable) {
    this._isSudoUser = value;
  }
  public resetIsSudoUser() {
    this._isSudoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSudoUserInput() {
    return this._isSudoUser;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface DiscoveryDiscoveryConfigTargetsWsman {
  /**
  * Enable the Certificate Authority (CA) check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#ca_check Discovery#ca_check}
  */
  readonly caCheck?: boolean | cdktf.IResolvable;
  /**
  * Enable the Common Name (CN) check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#cn_check Discovery#cn_check}
  */
  readonly cnCheck?: boolean | cdktf.IResolvable;
  /**
  * Provide a password for the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#password Discovery#password}
  */
  readonly password: string;
  /**
  * Enter the port number that the job must use to discover the devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#port Discovery#port}
  */
  readonly port?: number;
  /**
  * Enter the number of repeated attempts required to discover a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#retries Discovery#retries}
  */
  readonly retries?: number;
  /**
  * Enter the time in seconds after which a job must stop running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#timeout Discovery#timeout}
  */
  readonly timeout?: number;
  /**
  * Provide a username for the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#username Discovery#username}
  */
  readonly username: string;
}

export function discoveryDiscoveryConfigTargetsWsmanToTerraform(struct?: DiscoveryDiscoveryConfigTargetsWsman | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_check: cdktf.booleanToTerraform(struct!.caCheck),
    cn_check: cdktf.booleanToTerraform(struct!.cnCheck),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function discoveryDiscoveryConfigTargetsWsmanToHclTerraform(struct?: DiscoveryDiscoveryConfigTargetsWsman | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_check: {
      value: cdktf.booleanToHclTerraform(struct!.caCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cn_check: {
      value: cdktf.booleanToHclTerraform(struct!.cnCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DiscoveryDiscoveryConfigTargetsWsmanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryDiscoveryConfigTargetsWsman | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCheck = this._caCheck;
    }
    if (this._cnCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnCheck = this._cnCheck;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConfigTargetsWsman | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCheck = undefined;
      this._cnCheck = undefined;
      this._password = undefined;
      this._port = undefined;
      this._retries = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCheck = value.caCheck;
      this._cnCheck = value.cnCheck;
      this._password = value.password;
      this._port = value.port;
      this._retries = value.retries;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // ca_check - computed: true, optional: true, required: false
  private _caCheck?: boolean | cdktf.IResolvable; 
  public get caCheck() {
    return this.getBooleanAttribute('ca_check');
  }
  public set caCheck(value: boolean | cdktf.IResolvable) {
    this._caCheck = value;
  }
  public resetCaCheck() {
    this._caCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCheckInput() {
    return this._caCheck;
  }

  // cn_check - computed: true, optional: true, required: false
  private _cnCheck?: boolean | cdktf.IResolvable; 
  public get cnCheck() {
    return this.getBooleanAttribute('cn_check');
  }
  public set cnCheck(value: boolean | cdktf.IResolvable) {
    this._cnCheck = value;
  }
  public resetCnCheck() {
    this._cnCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnCheckInput() {
    return this._cnCheck;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface DiscoveryDiscoveryConfigTargets {
  /**
  * 
  * 				- Provide the type of devices to be discovered.
  * 				- The accepted types are SERVER, CHASSIS, NETWORK SWITCH, and STORAGE.
  * 				- A combination or all of the above can be provided.
  * 				- "Supported protocols for each device type are:"
  * 				- SERVER - "redfish", "snmp", and "ssh".
  * 				- CHASSIS - "redfish".
  * 				- NETWORK SWITCH - "snmp".
  * 				- STORAGE - "snmp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#device_type Discovery#device_type}
  */
  readonly deviceType: string[];
  /**
  * 
  * 				- "Provide the list of IP addresses, host names, or the range of IP addresses of the devices to be discoveredor included."
  *          		- "Sample Valid IP Range Formats"
  *          		- "   192.35.0.0"
  *          		- "   192.36.0.0-10.36.0.255"
  *          		- "   192.37.0.0/24"
  *          		- "   2345:f2b1:f083:135::5500/118"
  *          		- "   2345:f2b1:f083:135::a500-2607:f2b1:f083:135::a600"
  *          		- "   hostname.domain.tld"
  *          		- "   hostname"
  *          		- "   2345:f2b1:f083:139::22a"
  *          		- "Sample Invalid IP Range Formats"
  *          		- "   192.35.0.*"
  *          		- "   192.36.0.0-255"
  *          		- "   192.35.0.0/255.255.255.0"
  *          		- NOTE: The range size for the number of IP addresses is limited to 16,385 (0x4001).
  *          		- NOTE: Both IPv6 and IPv6 CIDR formats are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#network_address_detail Discovery#network_address_detail}
  */
  readonly networkAddressDetail: string[];
  /**
  * REDFISH protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#redfish Discovery#redfish}
  */
  readonly redfish?: DiscoveryDiscoveryConfigTargetsRedfish;
  /**
  * Simple Network Management Protocol (SNMP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#snmp Discovery#snmp}
  */
  readonly snmp?: DiscoveryDiscoveryConfigTargetsSnmp;
  /**
  * Secure Shell (SSH)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#ssh Discovery#ssh}
  */
  readonly ssh?: DiscoveryDiscoveryConfigTargetsSsh;
  /**
  * WSMAN protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#wsman Discovery#wsman}
  */
  readonly wsman?: DiscoveryDiscoveryConfigTargetsWsman;
}

export function discoveryDiscoveryConfigTargetsToTerraform(struct?: DiscoveryDiscoveryConfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceType),
    network_address_detail: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkAddressDetail),
    redfish: discoveryDiscoveryConfigTargetsRedfishToTerraform(struct!.redfish),
    snmp: discoveryDiscoveryConfigTargetsSnmpToTerraform(struct!.snmp),
    ssh: discoveryDiscoveryConfigTargetsSshToTerraform(struct!.ssh),
    wsman: discoveryDiscoveryConfigTargetsWsmanToTerraform(struct!.wsman),
  }
}


export function discoveryDiscoveryConfigTargetsToHclTerraform(struct?: DiscoveryDiscoveryConfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_address_detail: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkAddressDetail),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redfish: {
      value: discoveryDiscoveryConfigTargetsRedfishToHclTerraform(struct!.redfish),
      isBlock: true,
      type: "struct",
      storageClassType: "DiscoveryDiscoveryConfigTargetsRedfish",
    },
    snmp: {
      value: discoveryDiscoveryConfigTargetsSnmpToHclTerraform(struct!.snmp),
      isBlock: true,
      type: "struct",
      storageClassType: "DiscoveryDiscoveryConfigTargetsSnmp",
    },
    ssh: {
      value: discoveryDiscoveryConfigTargetsSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "struct",
      storageClassType: "DiscoveryDiscoveryConfigTargetsSsh",
    },
    wsman: {
      value: discoveryDiscoveryConfigTargetsWsmanToHclTerraform(struct!.wsman),
      isBlock: true,
      type: "struct",
      storageClassType: "DiscoveryDiscoveryConfigTargetsWsman",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConfigTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDiscoveryConfigTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._networkAddressDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddressDetail = this._networkAddressDetail;
    }
    if (this._redfish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfish = this._redfish?.internalValue;
    }
    if (this._snmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp = this._snmp?.internalValue;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    if (this._wsman?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsman = this._wsman?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConfigTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceType = undefined;
      this._networkAddressDetail = undefined;
      this._redfish.internalValue = undefined;
      this._snmp.internalValue = undefined;
      this._ssh.internalValue = undefined;
      this._wsman.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceType = value.deviceType;
      this._networkAddressDetail = value.networkAddressDetail;
      this._redfish.internalValue = value.redfish;
      this._snmp.internalValue = value.snmp;
      this._ssh.internalValue = value.ssh;
      this._wsman.internalValue = value.wsman;
    }
  }

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string[]; 
  public get deviceType() {
    return this.getListAttribute('device_type');
  }
  public set deviceType(value: string[]) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // network_address_detail - computed: false, optional: false, required: true
  private _networkAddressDetail?: string[]; 
  public get networkAddressDetail() {
    return this.getListAttribute('network_address_detail');
  }
  public set networkAddressDetail(value: string[]) {
    this._networkAddressDetail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressDetailInput() {
    return this._networkAddressDetail;
  }

  // redfish - computed: false, optional: true, required: false
  private _redfish = new DiscoveryDiscoveryConfigTargetsRedfishOutputReference(this, "redfish");
  public get redfish() {
    return this._redfish;
  }
  public putRedfish(value: DiscoveryDiscoveryConfigTargetsRedfish) {
    this._redfish.internalValue = value;
  }
  public resetRedfish() {
    this._redfish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishInput() {
    return this._redfish.internalValue;
  }

  // snmp - computed: false, optional: true, required: false
  private _snmp = new DiscoveryDiscoveryConfigTargetsSnmpOutputReference(this, "snmp");
  public get snmp() {
    return this._snmp;
  }
  public putSnmp(value: DiscoveryDiscoveryConfigTargetsSnmp) {
    this._snmp.internalValue = value;
  }
  public resetSnmp() {
    this._snmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new DiscoveryDiscoveryConfigTargetsSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: DiscoveryDiscoveryConfigTargetsSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // wsman - computed: false, optional: true, required: false
  private _wsman = new DiscoveryDiscoveryConfigTargetsWsmanOutputReference(this, "wsman");
  public get wsman() {
    return this._wsman;
  }
  public putWsman(value: DiscoveryDiscoveryConfigTargetsWsman) {
    this._wsman.internalValue = value;
  }
  public resetWsman() {
    this._wsman.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsmanInput() {
    return this._wsman.internalValue;
  }
}

export class DiscoveryDiscoveryConfigTargetsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDiscoveryConfigTargets[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDiscoveryConfigTargetsOutputReference {
    return new DiscoveryDiscoveryConfigTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryJobTracking {
}

export function discoveryJobTrackingToTerraform(struct?: DiscoveryJobTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function discoveryJobTrackingToHclTerraform(struct?: DiscoveryJobTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DiscoveryJobTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryJobTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryJobTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // discovered_ip - computed: true, optional: false, required: false
  public get discoveredIp() {
    return this.getListAttribute('discovered_ip');
  }

  // job_execution_results - computed: true, optional: false, required: false
  public get jobExecutionResults() {
    return this.getListAttribute('job_execution_results');
  }

  // undiscovered_ip - computed: true, optional: false, required: false
  public get undiscoveredIp() {
    return this.getListAttribute('undiscovered_ip');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery ome_discovery}
*/
export class Discovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Discovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Discovery to import
  * @param importFromId The id of the existing Discovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Discovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/discovery ome_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_discovery',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cron = config.cron;
    this._discoveryConfigTargets.internalValue = config.discoveryConfigTargets;
    this._emailRecipient = config.emailRecipient;
    this._enableCommunityStrings = config.enableCommunityStrings;
    this._ignorePartialFailure = config.ignorePartialFailure;
    this._name = config.name;
    this._schedule = config.schedule;
    this._timeout = config.timeout;
    this._trapDestination = config.trapDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron - computed: true, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // discovery_config_targets - computed: false, optional: false, required: true
  private _discoveryConfigTargets = new DiscoveryDiscoveryConfigTargetsList(this, "discovery_config_targets", true);
  public get discoveryConfigTargets() {
    return this._discoveryConfigTargets;
  }
  public putDiscoveryConfigTargets(value: DiscoveryDiscoveryConfigTargets[] | cdktf.IResolvable) {
    this._discoveryConfigTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryConfigTargetsInput() {
    return this._discoveryConfigTargets.internalValue;
  }

  // email_recipient - computed: false, optional: true, required: false
  private _emailRecipient?: string; 
  public get emailRecipient() {
    return this.getStringAttribute('email_recipient');
  }
  public set emailRecipient(value: string) {
    this._emailRecipient = value;
  }
  public resetEmailRecipient() {
    this._emailRecipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecipientInput() {
    return this._emailRecipient;
  }

  // enable_community_strings - computed: true, optional: true, required: false
  private _enableCommunityStrings?: boolean | cdktf.IResolvable; 
  public get enableCommunityStrings() {
    return this.getBooleanAttribute('enable_community_strings');
  }
  public set enableCommunityStrings(value: boolean | cdktf.IResolvable) {
    this._enableCommunityStrings = value;
  }
  public resetEnableCommunityStrings() {
    this._enableCommunityStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCommunityStringsInput() {
    return this._enableCommunityStrings;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_partial_failure - computed: false, optional: true, required: false
  private _ignorePartialFailure?: boolean | cdktf.IResolvable; 
  public get ignorePartialFailure() {
    return this.getBooleanAttribute('ignore_partial_failure');
  }
  public set ignorePartialFailure(value: boolean | cdktf.IResolvable) {
    this._ignorePartialFailure = value;
  }
  public resetIgnorePartialFailure() {
    this._ignorePartialFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePartialFailureInput() {
    return this._ignorePartialFailure;
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }

  // job_tracking - computed: true, optional: false, required: false
  private _jobTracking = new DiscoveryJobTrackingOutputReference(this, "job_tracking");
  public get jobTracking() {
    return this._jobTracking;
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

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // trap_destination - computed: true, optional: true, required: false
  private _trapDestination?: boolean | cdktf.IResolvable; 
  public get trapDestination() {
    return this.getBooleanAttribute('trap_destination');
  }
  public set trapDestination(value: boolean | cdktf.IResolvable) {
    this._trapDestination = value;
  }
  public resetTrapDestination() {
    this._trapDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapDestinationInput() {
    return this._trapDestination;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron: cdktf.stringToTerraform(this._cron),
      discovery_config_targets: cdktf.listMapper(discoveryDiscoveryConfigTargetsToTerraform, false)(this._discoveryConfigTargets.internalValue),
      email_recipient: cdktf.stringToTerraform(this._emailRecipient),
      enable_community_strings: cdktf.booleanToTerraform(this._enableCommunityStrings),
      ignore_partial_failure: cdktf.booleanToTerraform(this._ignorePartialFailure),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      timeout: cdktf.numberToTerraform(this._timeout),
      trap_destination: cdktf.booleanToTerraform(this._trapDestination),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_config_targets: {
        value: cdktf.listMapperHcl(discoveryDiscoveryConfigTargetsToHclTerraform, false)(this._discoveryConfigTargets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DiscoveryDiscoveryConfigTargetsList",
      },
      email_recipient: {
        value: cdktf.stringToHclTerraform(this._emailRecipient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_community_strings: {
        value: cdktf.booleanToHclTerraform(this._enableCommunityStrings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_partial_failure: {
        value: cdktf.booleanToHclTerraform(this._ignorePartialFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_destination: {
        value: cdktf.booleanToHclTerraform(this._trapDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
