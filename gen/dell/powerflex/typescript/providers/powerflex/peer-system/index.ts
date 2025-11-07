// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PeerSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag that if set to true will attempt to add certificate of the peer mdm destination to source. This flag is only used during create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#add_certificate PeerSystem#add_certificate}
  */
  readonly addCertificate?: boolean | cdktf.IResolvable;
  /**
  * Only used if add_certificate is set to true during create. The destination primary mdm information to get the root certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#destination_primary_mdm_information PeerSystem#destination_primary_mdm_information}
  */
  readonly destinationPrimaryMdmInformation?: PeerSystemDestinationPrimaryMdmInformation;
  /**
  * List of ips for the peer mdm system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#ip_list PeerSystem#ip_list}
  */
  readonly ipList: string[];
  /**
  * Name of the peer mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#name PeerSystem#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the peer mdm system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#peer_system_id PeerSystem#peer_system_id}
  */
  readonly peerSystemId: string;
  /**
  * Performance profile of the peer mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#perf_profile PeerSystem#perf_profile}
  */
  readonly perfProfile?: string;
  /**
  * Port of the peer mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#port PeerSystem#port}
  */
  readonly port?: number;
  /**
  * Only used if add_certificate is set to true during create. The source primary mdm information to get the root certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#source_primary_mdm_information PeerSystem#source_primary_mdm_information}
  */
  readonly sourcePrimaryMdmInformation?: PeerSystemSourcePrimaryMdmInformation;
}
export interface PeerSystemDestinationPrimaryMdmInformation {
  /**
  * ip of the primary destination mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#ip PeerSystem#ip}
  */
  readonly ip?: string;
  /**
  * ip of the destination management instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#management_ip PeerSystem#management_ip}
  */
  readonly managementIp?: string;
  /**
  * password of the management instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#management_password PeerSystem#management_password}
  */
  readonly managementPassword?: string;
  /**
  * ssh username of the destination management instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#management_username PeerSystem#management_username}
  */
  readonly managementUsername?: string;
  /**
  * ssh password of the primary destination mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#ssh_password PeerSystem#ssh_password}
  */
  readonly sshPassword?: string;
  /**
  * port of the primary destination mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#ssh_port PeerSystem#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * ssh username of the destination primary mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#ssh_username PeerSystem#ssh_username}
  */
  readonly sshUsername?: string;
}

export function peerSystemDestinationPrimaryMdmInformationToTerraform(struct?: PeerSystemDestinationPrimaryMdmInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    management_ip: cdktf.stringToTerraform(struct!.managementIp),
    management_password: cdktf.stringToTerraform(struct!.managementPassword),
    management_username: cdktf.stringToTerraform(struct!.managementUsername),
    ssh_password: cdktf.stringToTerraform(struct!.sshPassword),
    ssh_port: cdktf.stringToTerraform(struct!.sshPort),
    ssh_username: cdktf.stringToTerraform(struct!.sshUsername),
  }
}


export function peerSystemDestinationPrimaryMdmInformationToHclTerraform(struct?: PeerSystemDestinationPrimaryMdmInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    management_password: {
      value: cdktf.stringToHclTerraform(struct!.managementPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_username: {
      value: cdktf.stringToHclTerraform(struct!.managementUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_password: {
      value: cdktf.stringToHclTerraform(struct!.sshPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_port: {
      value: cdktf.stringToHclTerraform(struct!.sshPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_username: {
      value: cdktf.stringToHclTerraform(struct!.sshUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PeerSystemDestinationPrimaryMdmInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PeerSystemDestinationPrimaryMdmInformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._managementIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIp = this._managementIp;
    }
    if (this._managementPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementPassword = this._managementPassword;
    }
    if (this._managementUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementUsername = this._managementUsername;
    }
    if (this._sshPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPassword = this._sshPassword;
    }
    if (this._sshPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPort = this._sshPort;
    }
    if (this._sshUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUsername = this._sshUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PeerSystemDestinationPrimaryMdmInformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._managementIp = undefined;
      this._managementPassword = undefined;
      this._managementUsername = undefined;
      this._sshPassword = undefined;
      this._sshPort = undefined;
      this._sshUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._managementIp = value.managementIp;
      this._managementPassword = value.managementPassword;
      this._managementUsername = value.managementUsername;
      this._sshPassword = value.sshPassword;
      this._sshPort = value.sshPort;
      this._sshUsername = value.sshUsername;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // management_ip - computed: true, optional: true, required: false
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

  // management_password - computed: true, optional: true, required: false
  private _managementPassword?: string; 
  public get managementPassword() {
    return this.getStringAttribute('management_password');
  }
  public set managementPassword(value: string) {
    this._managementPassword = value;
  }
  public resetManagementPassword() {
    this._managementPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPasswordInput() {
    return this._managementPassword;
  }

  // management_username - computed: true, optional: true, required: false
  private _managementUsername?: string; 
  public get managementUsername() {
    return this.getStringAttribute('management_username');
  }
  public set managementUsername(value: string) {
    this._managementUsername = value;
  }
  public resetManagementUsername() {
    this._managementUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementUsernameInput() {
    return this._managementUsername;
  }

  // ssh_password - computed: true, optional: true, required: false
  private _sshPassword?: string; 
  public get sshPassword() {
    return this.getStringAttribute('ssh_password');
  }
  public set sshPassword(value: string) {
    this._sshPassword = value;
  }
  public resetSshPassword() {
    this._sshPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordInput() {
    return this._sshPassword;
  }

  // ssh_port - computed: true, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // ssh_username - computed: true, optional: true, required: false
  private _sshUsername?: string; 
  public get sshUsername() {
    return this.getStringAttribute('ssh_username');
  }
  public set sshUsername(value: string) {
    this._sshUsername = value;
  }
  public resetSshUsername() {
    this._sshUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUsernameInput() {
    return this._sshUsername;
  }
}
export interface PeerSystemSourcePrimaryMdmInformation {
  /**
  * ip of the primary source mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#ip PeerSystem#ip}
  */
  readonly ip?: string;
  /**
  * ip of the source management instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#management_ip PeerSystem#management_ip}
  */
  readonly managementIp?: string;
  /**
  * password of the source instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#management_password PeerSystem#management_password}
  */
  readonly managementPassword?: string;
  /**
  * ssh username of the source management instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#management_username PeerSystem#management_username}
  */
  readonly managementUsername?: string;
  /**
  * ssh password of the source primary mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#ssh_password PeerSystem#ssh_password}
  */
  readonly sshPassword?: string;
  /**
  * port of the primary source mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#ssh_port PeerSystem#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * ssh username of the source primary mdm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#ssh_username PeerSystem#ssh_username}
  */
  readonly sshUsername?: string;
}

export function peerSystemSourcePrimaryMdmInformationToTerraform(struct?: PeerSystemSourcePrimaryMdmInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    management_ip: cdktf.stringToTerraform(struct!.managementIp),
    management_password: cdktf.stringToTerraform(struct!.managementPassword),
    management_username: cdktf.stringToTerraform(struct!.managementUsername),
    ssh_password: cdktf.stringToTerraform(struct!.sshPassword),
    ssh_port: cdktf.stringToTerraform(struct!.sshPort),
    ssh_username: cdktf.stringToTerraform(struct!.sshUsername),
  }
}


export function peerSystemSourcePrimaryMdmInformationToHclTerraform(struct?: PeerSystemSourcePrimaryMdmInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    management_password: {
      value: cdktf.stringToHclTerraform(struct!.managementPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_username: {
      value: cdktf.stringToHclTerraform(struct!.managementUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_password: {
      value: cdktf.stringToHclTerraform(struct!.sshPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_port: {
      value: cdktf.stringToHclTerraform(struct!.sshPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_username: {
      value: cdktf.stringToHclTerraform(struct!.sshUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PeerSystemSourcePrimaryMdmInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PeerSystemSourcePrimaryMdmInformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._managementIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIp = this._managementIp;
    }
    if (this._managementPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementPassword = this._managementPassword;
    }
    if (this._managementUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementUsername = this._managementUsername;
    }
    if (this._sshPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPassword = this._sshPassword;
    }
    if (this._sshPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPort = this._sshPort;
    }
    if (this._sshUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUsername = this._sshUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PeerSystemSourcePrimaryMdmInformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._managementIp = undefined;
      this._managementPassword = undefined;
      this._managementUsername = undefined;
      this._sshPassword = undefined;
      this._sshPort = undefined;
      this._sshUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._managementIp = value.managementIp;
      this._managementPassword = value.managementPassword;
      this._managementUsername = value.managementUsername;
      this._sshPassword = value.sshPassword;
      this._sshPort = value.sshPort;
      this._sshUsername = value.sshUsername;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // management_ip - computed: true, optional: true, required: false
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

  // management_password - computed: true, optional: true, required: false
  private _managementPassword?: string; 
  public get managementPassword() {
    return this.getStringAttribute('management_password');
  }
  public set managementPassword(value: string) {
    this._managementPassword = value;
  }
  public resetManagementPassword() {
    this._managementPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPasswordInput() {
    return this._managementPassword;
  }

  // management_username - computed: true, optional: true, required: false
  private _managementUsername?: string; 
  public get managementUsername() {
    return this.getStringAttribute('management_username');
  }
  public set managementUsername(value: string) {
    this._managementUsername = value;
  }
  public resetManagementUsername() {
    this._managementUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementUsernameInput() {
    return this._managementUsername;
  }

  // ssh_password - computed: true, optional: true, required: false
  private _sshPassword?: string; 
  public get sshPassword() {
    return this.getStringAttribute('ssh_password');
  }
  public set sshPassword(value: string) {
    this._sshPassword = value;
  }
  public resetSshPassword() {
    this._sshPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordInput() {
    return this._sshPassword;
  }

  // ssh_port - computed: true, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // ssh_username - computed: true, optional: true, required: false
  private _sshUsername?: string; 
  public get sshUsername() {
    return this.getStringAttribute('ssh_username');
  }
  public set sshUsername(value: string) {
    this._sshUsername = value;
  }
  public resetSshUsername() {
    this._sshUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUsernameInput() {
    return this._sshUsername;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system powerflex_peer_system}
*/
export class PeerSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_peer_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PeerSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PeerSystem to import
  * @param importFromId The id of the existing PeerSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PeerSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_peer_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/peer_system powerflex_peer_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PeerSystemConfig
  */
  public constructor(scope: Construct, id: string, config: PeerSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_peer_system',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addCertificate = config.addCertificate;
    this._destinationPrimaryMdmInformation.internalValue = config.destinationPrimaryMdmInformation;
    this._ipList = config.ipList;
    this._name = config.name;
    this._peerSystemId = config.peerSystemId;
    this._perfProfile = config.perfProfile;
    this._port = config.port;
    this._sourcePrimaryMdmInformation.internalValue = config.sourcePrimaryMdmInformation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_certificate - computed: true, optional: true, required: false
  private _addCertificate?: boolean | cdktf.IResolvable; 
  public get addCertificate() {
    return this.getBooleanAttribute('add_certificate');
  }
  public set addCertificate(value: boolean | cdktf.IResolvable) {
    this._addCertificate = value;
  }
  public resetAddCertificate() {
    this._addCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addCertificateInput() {
    return this._addCertificate;
  }

  // coupling_rc - computed: true, optional: false, required: false
  public get couplingRc() {
    return this.getStringAttribute('coupling_rc');
  }

  // destination_primary_mdm_information - computed: true, optional: true, required: false
  private _destinationPrimaryMdmInformation = new PeerSystemDestinationPrimaryMdmInformationOutputReference(this, "destination_primary_mdm_information");
  public get destinationPrimaryMdmInformation() {
    return this._destinationPrimaryMdmInformation;
  }
  public putDestinationPrimaryMdmInformation(value: PeerSystemDestinationPrimaryMdmInformation) {
    this._destinationPrimaryMdmInformation.internalValue = value;
  }
  public resetDestinationPrimaryMdmInformation() {
    this._destinationPrimaryMdmInformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrimaryMdmInformationInput() {
    return this._destinationPrimaryMdmInformation.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_list - computed: false, optional: false, required: true
  private _ipList?: string[]; 
  public get ipList() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_list'));
  }
  public set ipList(value: string[]) {
    this._ipList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // membership_state - computed: true, optional: false, required: false
  public get membershipState() {
    return this.getStringAttribute('membership_state');
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

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // peer_system_id - computed: false, optional: false, required: true
  private _peerSystemId?: string; 
  public get peerSystemId() {
    return this.getStringAttribute('peer_system_id');
  }
  public set peerSystemId(value: string) {
    this._peerSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSystemIdInput() {
    return this._peerSystemId;
  }

  // perf_profile - computed: true, optional: true, required: false
  private _perfProfile?: string; 
  public get perfProfile() {
    return this.getStringAttribute('perf_profile');
  }
  public set perfProfile(value: string) {
    this._perfProfile = value;
  }
  public resetPerfProfile() {
    this._perfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfProfileInput() {
    return this._perfProfile;
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

  // software_version_info - computed: true, optional: false, required: false
  public get softwareVersionInfo() {
    return this.getStringAttribute('software_version_info');
  }

  // source_primary_mdm_information - computed: true, optional: true, required: false
  private _sourcePrimaryMdmInformation = new PeerSystemSourcePrimaryMdmInformationOutputReference(this, "source_primary_mdm_information");
  public get sourcePrimaryMdmInformation() {
    return this._sourcePrimaryMdmInformation;
  }
  public putSourcePrimaryMdmInformation(value: PeerSystemSourcePrimaryMdmInformation) {
    this._sourcePrimaryMdmInformation.internalValue = value;
  }
  public resetSourcePrimaryMdmInformation() {
    this._sourcePrimaryMdmInformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrimaryMdmInformationInput() {
    return this._sourcePrimaryMdmInformation.internalValue;
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_certificate: cdktf.booleanToTerraform(this._addCertificate),
      destination_primary_mdm_information: peerSystemDestinationPrimaryMdmInformationToTerraform(this._destinationPrimaryMdmInformation.internalValue),
      ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipList),
      name: cdktf.stringToTerraform(this._name),
      peer_system_id: cdktf.stringToTerraform(this._peerSystemId),
      perf_profile: cdktf.stringToTerraform(this._perfProfile),
      port: cdktf.numberToTerraform(this._port),
      source_primary_mdm_information: peerSystemSourcePrimaryMdmInformationToTerraform(this._sourcePrimaryMdmInformation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_certificate: {
        value: cdktf.booleanToHclTerraform(this._addCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destination_primary_mdm_information: {
        value: peerSystemDestinationPrimaryMdmInformationToHclTerraform(this._destinationPrimaryMdmInformation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PeerSystemDestinationPrimaryMdmInformation",
      },
      ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipList),
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
      peer_system_id: {
        value: cdktf.stringToHclTerraform(this._peerSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perf_profile: {
        value: cdktf.stringToHclTerraform(this._perfProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_primary_mdm_information: {
        value: peerSystemSourcePrimaryMdmInformationToHclTerraform(this._sourcePrimaryMdmInformation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PeerSystemSourcePrimaryMdmInformation",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
