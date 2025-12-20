// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LldpProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#device LldpProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#folder LldpProfile#folder}
  */
  readonly folder?: string;
  /**
  * LLDP mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#mode LldpProfile#mode}
  */
  readonly mode?: string;
  /**
  * LLDP profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#name LldpProfile#name}
  */
  readonly name: string;
  /**
  * Option tlvs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#option_tlvs LldpProfile#option_tlvs}
  */
  readonly optionTlvs?: LldpProfileOptionTlvs;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#snippet LldpProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * SNMP syslog notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#snmp_syslog_notification LldpProfile#snmp_syslog_notification}
  */
  readonly snmpSyslogNotification?: boolean | cdktf.IResolvable;
}
export interface LldpProfileOptionTlvsManagementAddressIplistStruct {
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#interface LldpProfile#interface}
  */
  readonly interface?: string;
  /**
  * IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#ipv4 LldpProfile#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#ipv6 LldpProfile#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#name LldpProfile#name}
  */
  readonly name?: string;
}

export function lldpProfileOptionTlvsManagementAddressIplistStructToTerraform(struct?: LldpProfileOptionTlvsManagementAddressIplistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function lldpProfileOptionTlvsManagementAddressIplistStructToHclTerraform(struct?: LldpProfileOptionTlvsManagementAddressIplistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LldpProfileOptionTlvsManagementAddressIplistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LldpProfileOptionTlvsManagementAddressIplistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LldpProfileOptionTlvsManagementAddressIplistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._name = value.name;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
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
}

export class LldpProfileOptionTlvsManagementAddressIplistStructList extends cdktf.ComplexList {
  public internalValue? : LldpProfileOptionTlvsManagementAddressIplistStruct[] | cdktf.IResolvable

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
  public get(index: number): LldpProfileOptionTlvsManagementAddressIplistStructOutputReference {
    return new LldpProfileOptionTlvsManagementAddressIplistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LldpProfileOptionTlvsManagementAddress {
  /**
  * Management address enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#enabled LldpProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Iplist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#iplist LldpProfile#iplist}
  */
  readonly iplist?: LldpProfileOptionTlvsManagementAddressIplistStruct[] | cdktf.IResolvable;
}

export function lldpProfileOptionTlvsManagementAddressToTerraform(struct?: LldpProfileOptionTlvsManagementAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    iplist: cdktf.listMapper(lldpProfileOptionTlvsManagementAddressIplistStructToTerraform, false)(struct!.iplist),
  }
}


export function lldpProfileOptionTlvsManagementAddressToHclTerraform(struct?: LldpProfileOptionTlvsManagementAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iplist: {
      value: cdktf.listMapperHcl(lldpProfileOptionTlvsManagementAddressIplistStructToHclTerraform, false)(struct!.iplist),
      isBlock: true,
      type: "list",
      storageClassType: "LldpProfileOptionTlvsManagementAddressIplistStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LldpProfileOptionTlvsManagementAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LldpProfileOptionTlvsManagementAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._iplist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iplist = this._iplist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LldpProfileOptionTlvsManagementAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._iplist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._iplist.internalValue = value.iplist;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // iplist - computed: false, optional: true, required: false
  private _iplist = new LldpProfileOptionTlvsManagementAddressIplistStructList(this, "iplist", false);
  public get iplist() {
    return this._iplist;
  }
  public putIplist(value: LldpProfileOptionTlvsManagementAddressIplistStruct[] | cdktf.IResolvable) {
    this._iplist.internalValue = value;
  }
  public resetIplist() {
    this._iplist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iplistInput() {
    return this._iplist.internalValue;
  }
}
export interface LldpProfileOptionTlvs {
  /**
  * Management address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#management_address LldpProfile#management_address}
  */
  readonly managementAddress?: LldpProfileOptionTlvsManagementAddress;
  /**
  * Option TLV Port Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#port_description LldpProfile#port_description}
  */
  readonly portDescription?: boolean | cdktf.IResolvable;
  /**
  * Option TLV System Capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#system_capabilities LldpProfile#system_capabilities}
  */
  readonly systemCapabilities?: boolean | cdktf.IResolvable;
  /**
  * Option TLV System Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#system_description LldpProfile#system_description}
  */
  readonly systemDescription?: boolean | cdktf.IResolvable;
  /**
  * Option TLV System Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#system_name LldpProfile#system_name}
  */
  readonly systemName?: boolean | cdktf.IResolvable;
}

export function lldpProfileOptionTlvsToTerraform(struct?: LldpProfileOptionTlvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_address: lldpProfileOptionTlvsManagementAddressToTerraform(struct!.managementAddress),
    port_description: cdktf.booleanToTerraform(struct!.portDescription),
    system_capabilities: cdktf.booleanToTerraform(struct!.systemCapabilities),
    system_description: cdktf.booleanToTerraform(struct!.systemDescription),
    system_name: cdktf.booleanToTerraform(struct!.systemName),
  }
}


export function lldpProfileOptionTlvsToHclTerraform(struct?: LldpProfileOptionTlvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_address: {
      value: lldpProfileOptionTlvsManagementAddressToHclTerraform(struct!.managementAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "LldpProfileOptionTlvsManagementAddress",
    },
    port_description: {
      value: cdktf.booleanToHclTerraform(struct!.portDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.systemCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_description: {
      value: cdktf.booleanToHclTerraform(struct!.systemDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_name: {
      value: cdktf.booleanToHclTerraform(struct!.systemName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LldpProfileOptionTlvsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LldpProfileOptionTlvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementAddress = this._managementAddress?.internalValue;
    }
    if (this._portDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDescription = this._portDescription;
    }
    if (this._systemCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCapabilities = this._systemCapabilities;
    }
    if (this._systemDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDescription = this._systemDescription;
    }
    if (this._systemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemName = this._systemName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LldpProfileOptionTlvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managementAddress.internalValue = undefined;
      this._portDescription = undefined;
      this._systemCapabilities = undefined;
      this._systemDescription = undefined;
      this._systemName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managementAddress.internalValue = value.managementAddress;
      this._portDescription = value.portDescription;
      this._systemCapabilities = value.systemCapabilities;
      this._systemDescription = value.systemDescription;
      this._systemName = value.systemName;
    }
  }

  // management_address - computed: false, optional: true, required: false
  private _managementAddress = new LldpProfileOptionTlvsManagementAddressOutputReference(this, "management_address");
  public get managementAddress() {
    return this._managementAddress;
  }
  public putManagementAddress(value: LldpProfileOptionTlvsManagementAddress) {
    this._managementAddress.internalValue = value;
  }
  public resetManagementAddress() {
    this._managementAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAddressInput() {
    return this._managementAddress.internalValue;
  }

  // port_description - computed: false, optional: true, required: false
  private _portDescription?: boolean | cdktf.IResolvable; 
  public get portDescription() {
    return this.getBooleanAttribute('port_description');
  }
  public set portDescription(value: boolean | cdktf.IResolvable) {
    this._portDescription = value;
  }
  public resetPortDescription() {
    this._portDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDescriptionInput() {
    return this._portDescription;
  }

  // system_capabilities - computed: false, optional: true, required: false
  private _systemCapabilities?: boolean | cdktf.IResolvable; 
  public get systemCapabilities() {
    return this.getBooleanAttribute('system_capabilities');
  }
  public set systemCapabilities(value: boolean | cdktf.IResolvable) {
    this._systemCapabilities = value;
  }
  public resetSystemCapabilities() {
    this._systemCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCapabilitiesInput() {
    return this._systemCapabilities;
  }

  // system_description - computed: false, optional: true, required: false
  private _systemDescription?: boolean | cdktf.IResolvable; 
  public get systemDescription() {
    return this.getBooleanAttribute('system_description');
  }
  public set systemDescription(value: boolean | cdktf.IResolvable) {
    this._systemDescription = value;
  }
  public resetSystemDescription() {
    this._systemDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDescriptionInput() {
    return this._systemDescription;
  }

  // system_name - computed: false, optional: true, required: false
  private _systemName?: boolean | cdktf.IResolvable; 
  public get systemName() {
    return this.getBooleanAttribute('system_name');
  }
  public set systemName(value: boolean | cdktf.IResolvable) {
    this._systemName = value;
  }
  public resetSystemName() {
    this._systemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile scm_lldp_profile}
*/
export class LldpProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_lldp_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LldpProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LldpProfile to import
  * @param importFromId The id of the existing LldpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LldpProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_lldp_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/lldp_profile scm_lldp_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LldpProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LldpProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_lldp_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._mode = config.mode;
    this._name = config.name;
    this._optionTlvs.internalValue = config.optionTlvs;
    this._snippet = config.snippet;
    this._snmpSyslogNotification = config.snmpSyslogNotification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // option_tlvs - computed: false, optional: true, required: false
  private _optionTlvs = new LldpProfileOptionTlvsOutputReference(this, "option_tlvs");
  public get optionTlvs() {
    return this._optionTlvs;
  }
  public putOptionTlvs(value: LldpProfileOptionTlvs) {
    this._optionTlvs.internalValue = value;
  }
  public resetOptionTlvs() {
    this._optionTlvs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionTlvsInput() {
    return this._optionTlvs.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // snmp_syslog_notification - computed: false, optional: true, required: false
  private _snmpSyslogNotification?: boolean | cdktf.IResolvable; 
  public get snmpSyslogNotification() {
    return this.getBooleanAttribute('snmp_syslog_notification');
  }
  public set snmpSyslogNotification(value: boolean | cdktf.IResolvable) {
    this._snmpSyslogNotification = value;
  }
  public resetSnmpSyslogNotification() {
    this._snmpSyslogNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpSyslogNotificationInput() {
    return this._snmpSyslogNotification;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      option_tlvs: lldpProfileOptionTlvsToTerraform(this._optionTlvs.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
      snmp_syslog_notification: cdktf.booleanToTerraform(this._snmpSyslogNotification),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      option_tlvs: {
        value: lldpProfileOptionTlvsToHclTerraform(this._optionTlvs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LldpProfileOptionTlvs",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_syslog_notification: {
        value: cdktf.booleanToHclTerraform(this._snmpSyslogNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
