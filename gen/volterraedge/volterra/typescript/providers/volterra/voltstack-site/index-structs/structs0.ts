import * as cdktf from 'cdktf';
export interface VoltstackSiteBlockedServicesBlockedSevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns VoltstackSite#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_type VoltstackSite#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ssh VoltstackSite#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#web_user_interface VoltstackSite#web_user_interface}
  */
  readonly webUserInterface?: boolean | cdktf.IResolvable;
}

export function voltstackSiteBlockedServicesBlockedSeviceToTerraform(struct?: VoltstackSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.booleanToTerraform(struct!.dns),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ssh: cdktf.booleanToTerraform(struct!.ssh),
    web_user_interface: cdktf.booleanToTerraform(struct!.webUserInterface),
  }
}


export function voltstackSiteBlockedServicesBlockedSeviceToHclTerraform(struct?: VoltstackSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.booleanToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh: {
      value: cdktf.booleanToHclTerraform(struct!.ssh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_user_interface: {
      value: cdktf.booleanToHclTerraform(struct!.webUserInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBlockedServicesBlockedSeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ssh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh;
    }
    if (this._webUserInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.webUserInterface = this._webUserInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._networkType = undefined;
      this._ssh = undefined;
      this._webUserInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._networkType = value.networkType;
      this._ssh = value.ssh;
      this._webUserInterface = value.webUserInterface;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: boolean | cdktf.IResolvable; 
  public get ssh() {
    return this.getBooleanAttribute('ssh');
  }
  public set ssh(value: boolean | cdktf.IResolvable) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // web_user_interface - computed: false, optional: true, required: false
  private _webUserInterface?: boolean | cdktf.IResolvable; 
  public get webUserInterface() {
    return this.getBooleanAttribute('web_user_interface');
  }
  public set webUserInterface(value: boolean | cdktf.IResolvable) {
    this._webUserInterface = value;
  }
  public resetWebUserInterface() {
    this._webUserInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUserInterfaceInput() {
    return this._webUserInterface;
  }
}

export class VoltstackSiteBlockedServicesBlockedSeviceList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteBlockedServicesBlockedSeviceOutputReference {
    return new VoltstackSiteBlockedServicesBlockedSeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteBlockedServices {
  /**
  * blocked_sevice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#blocked_sevice VoltstackSite#blocked_sevice}
  */
  readonly blockedSevice?: VoltstackSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable;
}

export function voltstackSiteBlockedServicesToTerraform(struct?: VoltstackSiteBlockedServicesOutputReference | VoltstackSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_sevice: cdktf.listMapper(voltstackSiteBlockedServicesBlockedSeviceToTerraform, true)(struct!.blockedSevice),
  }
}


export function voltstackSiteBlockedServicesToHclTerraform(struct?: VoltstackSiteBlockedServicesOutputReference | VoltstackSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_sevice: {
      value: cdktf.listMapperHcl(voltstackSiteBlockedServicesBlockedSeviceToHclTerraform, true)(struct!.blockedSevice),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteBlockedServicesBlockedSeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBlockedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteBlockedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedSevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedSevice = this._blockedSevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBlockedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedSevice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedSevice.internalValue = value.blockedSevice;
    }
  }

  // blocked_sevice - computed: false, optional: true, required: false
  private _blockedSevice = new VoltstackSiteBlockedServicesBlockedSeviceList(this, "blocked_sevice", false);
  public get blockedSevice() {
    return this._blockedSevice;
  }
  public putBlockedSevice(value: VoltstackSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable) {
    this._blockedSevice.internalValue = value;
  }
  public resetBlockedSevice() {
    this._blockedSevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedSeviceInput() {
    return this._blockedSevice.internalValue;
  }
}
export interface VoltstackSiteBondDeviceListBondDevicesLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#rate VoltstackSite#rate}
  */
  readonly rate?: number;
}

export function voltstackSiteBondDeviceListBondDevicesLacpToTerraform(struct?: VoltstackSiteBondDeviceListBondDevicesLacpOutputReference | VoltstackSiteBondDeviceListBondDevicesLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function voltstackSiteBondDeviceListBondDevicesLacpToHclTerraform(struct?: VoltstackSiteBondDeviceListBondDevicesLacpOutputReference | VoltstackSiteBondDeviceListBondDevicesLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBondDeviceListBondDevicesLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteBondDeviceListBondDevicesLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBondDeviceListBondDevicesLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface VoltstackSiteBondDeviceListBondDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#active_backup VoltstackSite#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#devices VoltstackSite#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#link_polling_interval VoltstackSite#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#link_up_delay VoltstackSite#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#lacp VoltstackSite#lacp}
  */
  readonly lacp?: VoltstackSiteBondDeviceListBondDevicesLacp;
}

export function voltstackSiteBondDeviceListBondDevicesToTerraform(struct?: VoltstackSiteBondDeviceListBondDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_backup: cdktf.booleanToTerraform(struct!.activeBackup),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    link_polling_interval: cdktf.numberToTerraform(struct!.linkPollingInterval),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    name: cdktf.stringToTerraform(struct!.name),
    lacp: voltstackSiteBondDeviceListBondDevicesLacpToTerraform(struct!.lacp),
  }
}


export function voltstackSiteBondDeviceListBondDevicesToHclTerraform(struct?: VoltstackSiteBondDeviceListBondDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_backup: {
      value: cdktf.booleanToHclTerraform(struct!.activeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp: {
      value: voltstackSiteBondDeviceListBondDevicesLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteBondDeviceListBondDevicesLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBondDeviceListBondDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteBondDeviceListBondDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBackup = this._activeBackup;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._linkPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkPollingInterval = this._linkPollingInterval;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBondDeviceListBondDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeBackup = undefined;
      this._devices = undefined;
      this._linkPollingInterval = undefined;
      this._linkUpDelay = undefined;
      this._name = undefined;
      this._lacp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeBackup = value.activeBackup;
      this._devices = value.devices;
      this._linkPollingInterval = value.linkPollingInterval;
      this._linkUpDelay = value.linkUpDelay;
      this._name = value.name;
      this._lacp.internalValue = value.lacp;
    }
  }

  // active_backup - computed: false, optional: true, required: false
  private _activeBackup?: boolean | cdktf.IResolvable; 
  public get activeBackup() {
    return this.getBooleanAttribute('active_backup');
  }
  public set activeBackup(value: boolean | cdktf.IResolvable) {
    this._activeBackup = value;
  }
  public resetActiveBackup() {
    this._activeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBackupInput() {
    return this._activeBackup;
  }

  // devices - computed: false, optional: false, required: true
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // link_polling_interval - computed: false, optional: false, required: true
  private _linkPollingInterval?: number; 
  public get linkPollingInterval() {
    return this.getNumberAttribute('link_polling_interval');
  }
  public set linkPollingInterval(value: number) {
    this._linkPollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollingIntervalInput() {
    return this._linkPollingInterval;
  }

  // link_up_delay - computed: false, optional: false, required: true
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
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

  // lacp - computed: false, optional: true, required: false
  private _lacp = new VoltstackSiteBondDeviceListBondDevicesLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: VoltstackSiteBondDeviceListBondDevicesLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }
}

export class VoltstackSiteBondDeviceListBondDevicesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteBondDeviceListBondDevices[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteBondDeviceListBondDevicesOutputReference {
    return new VoltstackSiteBondDeviceListBondDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteBondDeviceListStruct {
  /**
  * bond_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#bond_devices VoltstackSite#bond_devices}
  */
  readonly bondDevices: VoltstackSiteBondDeviceListBondDevices[] | cdktf.IResolvable;
}

export function voltstackSiteBondDeviceListStructToTerraform(struct?: VoltstackSiteBondDeviceListStructOutputReference | VoltstackSiteBondDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_devices: cdktf.listMapper(voltstackSiteBondDeviceListBondDevicesToTerraform, true)(struct!.bondDevices),
  }
}


export function voltstackSiteBondDeviceListStructToHclTerraform(struct?: VoltstackSiteBondDeviceListStructOutputReference | VoltstackSiteBondDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_devices: {
      value: cdktf.listMapperHcl(voltstackSiteBondDeviceListBondDevicesToHclTerraform, true)(struct!.bondDevices),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteBondDeviceListBondDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBondDeviceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteBondDeviceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondDevices = this._bondDevices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBondDeviceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bondDevices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bondDevices.internalValue = value.bondDevices;
    }
  }

  // bond_devices - computed: false, optional: false, required: true
  private _bondDevices = new VoltstackSiteBondDeviceListBondDevicesList(this, "bond_devices", false);
  public get bondDevices() {
    return this._bondDevices;
  }
  public putBondDevices(value: VoltstackSiteBondDeviceListBondDevices[] | cdktf.IResolvable) {
    this._bondDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bondDevicesInput() {
    return this._bondDevices.internalValue;
  }
}
export interface VoltstackSiteCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#latitude VoltstackSite#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#longitude VoltstackSite#longitude}
  */
  readonly longitude?: number;
}

export function voltstackSiteCoordinatesToTerraform(struct?: VoltstackSiteCoordinatesOutputReference | VoltstackSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function voltstackSiteCoordinatesToHclTerraform(struct?: VoltstackSiteCoordinatesOutputReference | VoltstackSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCoordinates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCoordinates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}
export interface VoltstackSiteCustomDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#inside_nameserver VoltstackSite#inside_nameserver}
  */
  readonly insideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#inside_nameserver_v6 VoltstackSite#inside_nameserver_v6}
  */
  readonly insideNameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#outside_nameserver VoltstackSite#outside_nameserver}
  */
  readonly outsideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#outside_nameserver_v6 VoltstackSite#outside_nameserver_v6}
  */
  readonly outsideNameserverV6?: string;
}

export function voltstackSiteCustomDnsToTerraform(struct?: VoltstackSiteCustomDnsOutputReference | VoltstackSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_nameserver: cdktf.stringToTerraform(struct!.insideNameserver),
    inside_nameserver_v6: cdktf.stringToTerraform(struct!.insideNameserverV6),
    outside_nameserver: cdktf.stringToTerraform(struct!.outsideNameserver),
    outside_nameserver_v6: cdktf.stringToTerraform(struct!.outsideNameserverV6),
  }
}


export function voltstackSiteCustomDnsToHclTerraform(struct?: VoltstackSiteCustomDnsOutputReference | VoltstackSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserver = this._insideNameserver;
    }
    if (this._insideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserverV6 = this._insideNameserverV6;
    }
    if (this._outsideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserver = this._outsideNameserver;
    }
    if (this._outsideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserverV6 = this._outsideNameserverV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNameserver = undefined;
      this._insideNameserverV6 = undefined;
      this._outsideNameserver = undefined;
      this._outsideNameserverV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNameserver = value.insideNameserver;
      this._insideNameserverV6 = value.insideNameserverV6;
      this._outsideNameserver = value.outsideNameserver;
      this._outsideNameserverV6 = value.outsideNameserverV6;
    }
  }

  // inside_nameserver - computed: false, optional: true, required: false
  private _insideNameserver?: string; 
  public get insideNameserver() {
    return this.getStringAttribute('inside_nameserver');
  }
  public set insideNameserver(value: string) {
    this._insideNameserver = value;
  }
  public resetInsideNameserver() {
    this._insideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverInput() {
    return this._insideNameserver;
  }

  // inside_nameserver_v6 - computed: false, optional: true, required: false
  private _insideNameserverV6?: string; 
  public get insideNameserverV6() {
    return this.getStringAttribute('inside_nameserver_v6');
  }
  public set insideNameserverV6(value: string) {
    this._insideNameserverV6 = value;
  }
  public resetInsideNameserverV6() {
    this._insideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverV6Input() {
    return this._insideNameserverV6;
  }

  // outside_nameserver - computed: false, optional: true, required: false
  private _outsideNameserver?: string; 
  public get outsideNameserver() {
    return this.getStringAttribute('outside_nameserver');
  }
  public set outsideNameserver(value: string) {
    this._outsideNameserver = value;
  }
  public resetOutsideNameserver() {
    this._outsideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverInput() {
    return this._outsideNameserver;
  }

  // outside_nameserver_v6 - computed: false, optional: true, required: false
  private _outsideNameserverV6?: string; 
  public get outsideNameserverV6() {
    return this.getStringAttribute('outside_nameserver_v6');
  }
  public set outsideNameserverV6(value: string) {
    this._outsideNameserverV6 = value;
  }
  public resetOutsideNameserverV6() {
    this._outsideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverV6Input() {
    return this._outsideNameserverV6;
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#enhanced_firewall_policies VoltstackSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enhancedFirewallPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enhancedFirewallPolicies.internalValue = value.enhancedFirewallPolicies;
    }
  }

  // enhanced_firewall_policies - computed: false, optional: false, required: true
  private _enhancedFirewallPolicies = new VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#forward_proxy_policies VoltstackSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardProxyPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardProxyPolicies.internalValue = value.forwardProxyPolicies;
    }
  }

  // forward_proxy_policies - computed: false, optional: false, required: true
  private _forwardProxyPolicies = new VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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


export function voltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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

export class VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_policies VoltstackSite#network_policies}
  */
  readonly networkPolicies: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigActiveNetworkPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(voltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function voltstackSiteCustomNetworkConfigActiveNetworkPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveNetworkPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicies.internalValue = value.networkPolicies;
    }
  }

  // network_policies - computed: false, optional: false, required: true
  private _networkPolicies = new VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#hash_algorithms VoltstackSite#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
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

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling {
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
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

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#key VoltstackSite#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#secret_encoding VoltstackSite#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#version VoltstackSite#version}
  */
  readonly version?: number;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#secret_encoding_type VoltstackSite#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#blindfold_secret_info_internal VoltstackSite#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#vault_secret_info VoltstackSite#vault_secret_info}
  */
  readonly vaultSecretInfo?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#wingman_secret_info VoltstackSite#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults {
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#certificate_url VoltstackSite#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#description VoltstackSite#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#custom_hash_algorithms VoltstackSite#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#disable_ocsp_stapling VoltstackSite#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#private_key VoltstackSite#private_key}
  */
  readonly privateKey: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#use_system_defaults VoltstackSite#use_system_defaults}
  */
  readonly useSystemDefaults?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
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
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingList",
    },
    private_key: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyList",
    },
    use_system_defaults: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _customHashAlgorithms = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms) {
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
  private _disableOcspStapling = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling) {
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
  private _privateKey = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults) {
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
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#exact_value VoltstackSite#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#regex_value VoltstackSite#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#suffix_value VoltstackSite#suffix_value}
  */
  readonly suffixValue?: string;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#disable_interception VoltstackSite#disable_interception}
  */
  readonly disableInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#enable_interception VoltstackSite#enable_interception}
  */
  readonly enableInterception?: boolean | cdktf.IResolvable;
  /**
  * domain_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#domain_match VoltstackSite#domain_match}
  */
  readonly domainMatch: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_interception: cdktf.booleanToTerraform(struct!.disableInterception),
    enable_interception: cdktf.booleanToTerraform(struct!.enableInterception),
    domain_match: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct!.domainMatch),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_interception: {
      value: cdktf.booleanToHclTerraform(struct!.disableInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_interception: {
      value: cdktf.booleanToHclTerraform(struct!.enableInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_match: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct!.domainMatch),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInterception = this._disableInterception;
    }
    if (this._enableInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterception = this._enableInterception;
    }
    if (this._domainMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatch = this._domainMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableInterception = undefined;
      this._enableInterception = undefined;
      this._domainMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableInterception = value.disableInterception;
      this._enableInterception = value.enableInterception;
      this._domainMatch.internalValue = value.domainMatch;
    }
  }

  // disable_interception - computed: false, optional: true, required: false
  private _disableInterception?: boolean | cdktf.IResolvable; 
  public get disableInterception() {
    return this.getBooleanAttribute('disable_interception');
  }
  public set disableInterception(value: boolean | cdktf.IResolvable) {
    this._disableInterception = value;
  }
  public resetDisableInterception() {
    this._disableInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInterceptionInput() {
    return this._disableInterception;
  }

  // enable_interception - computed: false, optional: true, required: false
  private _enableInterception?: boolean | cdktf.IResolvable; 
  public get enableInterception() {
    return this.getBooleanAttribute('enable_interception');
  }
  public set enableInterception(value: boolean | cdktf.IResolvable) {
    this._enableInterception = value;
  }
  public resetEnableInterception() {
    this._enableInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterceptionInput() {
    return this._enableInterception;
  }

  // domain_match - computed: false, optional: false, required: true
  private _domainMatch = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference(this, "domain_match");
  public get domainMatch() {
    return this._domainMatch;
  }
  public putDomainMatch(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch) {
    this._domainMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchInput() {
    return this._domainMatch.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference {
    return new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy {
  /**
  * interception_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interception_rules VoltstackSite#interception_rules}
  */
  readonly interceptionRules: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interception_rules: cdktf.listMapper(voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform, true)(struct!.interceptionRules),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interception_rules: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform, true)(struct!.interceptionRules),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptionRules = this._interceptionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interceptionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interceptionRules.internalValue = value.interceptionRules;
    }
  }

  // interception_rules - computed: false, optional: false, required: true
  private _interceptionRules = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList(this, "interception_rules", false);
  public get interceptionRules() {
    return this._interceptionRules;
  }
  public putInterceptionRules(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable) {
    this._interceptionRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionRulesInput() {
    return this._interceptionRules.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#enable_for_all_domains VoltstackSite#enable_for_all_domains}
  */
  readonly enableForAllDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#trusted_ca_url VoltstackSite#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#volterra_certificate VoltstackSite#volterra_certificate}
  */
  readonly volterraCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#volterra_trusted_ca VoltstackSite#volterra_trusted_ca}
  */
  readonly volterraTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * custom_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#custom_certificate VoltstackSite#custom_certificate}
  */
  readonly customCertificate?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#policy VoltstackSite#policy}
  */
  readonly policy?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_for_all_domains: cdktf.booleanToTerraform(struct!.enableForAllDomains),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    volterra_certificate: cdktf.booleanToTerraform(struct!.volterraCertificate),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    custom_certificate: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct!.customCertificate),
    policy: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct!.policy),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_for_all_domains: {
      value: cdktf.booleanToHclTerraform(struct!.enableForAllDomains),
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
    volterra_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.volterraCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_trusted_ca: {
      value: cdktf.booleanToHclTerraform(struct!.volterraTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_certificate: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct!.customCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateList",
    },
    policy: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableForAllDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableForAllDomains = this._enableForAllDomains;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._volterraCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraCertificate = this._volterraCertificate;
    }
    if (this._volterraTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraTrustedCa = this._volterraTrustedCa;
    }
    if (this._customCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificate = this._customCertificate?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableForAllDomains = undefined;
      this._trustedCaUrl = undefined;
      this._volterraCertificate = undefined;
      this._volterraTrustedCa = undefined;
      this._customCertificate.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableForAllDomains = value.enableForAllDomains;
      this._trustedCaUrl = value.trustedCaUrl;
      this._volterraCertificate = value.volterraCertificate;
      this._volterraTrustedCa = value.volterraTrustedCa;
      this._customCertificate.internalValue = value.customCertificate;
      this._policy.internalValue = value.policy;
    }
  }

  // enable_for_all_domains - computed: false, optional: true, required: false
  private _enableForAllDomains?: boolean | cdktf.IResolvable; 
  public get enableForAllDomains() {
    return this.getBooleanAttribute('enable_for_all_domains');
  }
  public set enableForAllDomains(value: boolean | cdktf.IResolvable) {
    this._enableForAllDomains = value;
  }
  public resetEnableForAllDomains() {
    this._enableForAllDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForAllDomainsInput() {
    return this._enableForAllDomains;
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

  // volterra_certificate - computed: false, optional: true, required: false
  private _volterraCertificate?: boolean | cdktf.IResolvable; 
  public get volterraCertificate() {
    return this.getBooleanAttribute('volterra_certificate');
  }
  public set volterraCertificate(value: boolean | cdktf.IResolvable) {
    this._volterraCertificate = value;
  }
  public resetVolterraCertificate() {
    this._volterraCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraCertificateInput() {
    return this._volterraCertificate;
  }

  // volterra_trusted_ca - computed: false, optional: true, required: false
  private _volterraTrustedCa?: boolean | cdktf.IResolvable; 
  public get volterraTrustedCa() {
    return this.getBooleanAttribute('volterra_trusted_ca');
  }
  public set volterraTrustedCa(value: boolean | cdktf.IResolvable) {
    this._volterraTrustedCa = value;
  }
  public resetVolterraTrustedCa() {
    this._volterraTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraTrustedCaInput() {
    return this._volterraTrustedCa;
  }

  // custom_certificate - computed: false, optional: true, required: false
  private _customCertificate = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference(this, "custom_certificate");
  public get customCertificate() {
    return this._customCertificate;
  }
  public putCustomCertificate(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate) {
    this._customCertificate.internalValue = value;
  }
  public resetCustomCertificate() {
    this._customCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#connection_timeout VoltstackSite#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#max_connect_attempts VoltstackSite#max_connect_attempts}
  */
  readonly maxConnectAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#no_interception VoltstackSite#no_interception}
  */
  readonly noInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#white_listed_ports VoltstackSite#white_listed_ports}
  */
  readonly whiteListedPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#white_listed_prefixes VoltstackSite#white_listed_prefixes}
  */
  readonly whiteListedPrefixes?: string[];
  /**
  * tls_intercept block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tls_intercept VoltstackSite#tls_intercept}
  */
  readonly tlsIntercept?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    max_connect_attempts: cdktf.numberToTerraform(struct!.maxConnectAttempts),
    no_interception: cdktf.booleanToTerraform(struct!.noInterception),
    white_listed_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.whiteListedPorts),
    white_listed_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whiteListedPrefixes),
    tls_intercept: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct!.tlsIntercept),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connect_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_interception: {
      value: cdktf.booleanToHclTerraform(struct!.noInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    white_listed_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.whiteListedPorts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    white_listed_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whiteListedPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_intercept: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct!.tlsIntercept),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._maxConnectAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectAttempts = this._maxConnectAttempts;
    }
    if (this._noInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInterception = this._noInterception;
    }
    if (this._whiteListedPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListedPorts = this._whiteListedPorts;
    }
    if (this._whiteListedPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListedPrefixes = this._whiteListedPrefixes;
    }
    if (this._tlsIntercept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsIntercept = this._tlsIntercept?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionTimeout = undefined;
      this._maxConnectAttempts = undefined;
      this._noInterception = undefined;
      this._whiteListedPorts = undefined;
      this._whiteListedPrefixes = undefined;
      this._tlsIntercept.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionTimeout = value.connectionTimeout;
      this._maxConnectAttempts = value.maxConnectAttempts;
      this._noInterception = value.noInterception;
      this._whiteListedPorts = value.whiteListedPorts;
      this._whiteListedPrefixes = value.whiteListedPrefixes;
      this._tlsIntercept.internalValue = value.tlsIntercept;
    }
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // max_connect_attempts - computed: false, optional: true, required: false
  private _maxConnectAttempts?: number; 
  public get maxConnectAttempts() {
    return this.getNumberAttribute('max_connect_attempts');
  }
  public set maxConnectAttempts(value: number) {
    this._maxConnectAttempts = value;
  }
  public resetMaxConnectAttempts() {
    this._maxConnectAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectAttemptsInput() {
    return this._maxConnectAttempts;
  }

  // no_interception - computed: false, optional: true, required: false
  private _noInterception?: boolean | cdktf.IResolvable; 
  public get noInterception() {
    return this.getBooleanAttribute('no_interception');
  }
  public set noInterception(value: boolean | cdktf.IResolvable) {
    this._noInterception = value;
  }
  public resetNoInterception() {
    this._noInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInterceptionInput() {
    return this._noInterception;
  }

  // white_listed_ports - computed: false, optional: true, required: false
  private _whiteListedPorts?: number[]; 
  public get whiteListedPorts() {
    return this.getNumberListAttribute('white_listed_ports');
  }
  public set whiteListedPorts(value: number[]) {
    this._whiteListedPorts = value;
  }
  public resetWhiteListedPorts() {
    this._whiteListedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedPortsInput() {
    return this._whiteListedPorts;
  }

  // white_listed_prefixes - computed: false, optional: true, required: false
  private _whiteListedPrefixes?: string[]; 
  public get whiteListedPrefixes() {
    return this.getListAttribute('white_listed_prefixes');
  }
  public set whiteListedPrefixes(value: string[]) {
    this._whiteListedPrefixes = value;
  }
  public resetWhiteListedPrefixes() {
    this._whiteListedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedPrefixesInput() {
    return this._whiteListedPrefixes;
  }

  // tls_intercept - computed: false, optional: true, required: false
  private _tlsIntercept = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference(this, "tls_intercept");
  public get tlsIntercept() {
    return this._tlsIntercept;
  }
  public putTlsIntercept(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept) {
    this._tlsIntercept.internalValue = value;
  }
  public resetTlsIntercept() {
    this._tlsIntercept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInterceptInput() {
    return this._tlsIntercept.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#global_vn VoltstackSite#global_vn}
  */
  readonly globalVn: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#global_vn VoltstackSite#global_vn}
  */
  readonly globalVn: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#disable_forward_proxy VoltstackSite#disable_forward_proxy}
  */
  readonly disableForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * enable_forward_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#enable_forward_proxy VoltstackSite#enable_forward_proxy}
  */
  readonly enableForwardProxy?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy;
  /**
  * sli_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#sli_to_global_dr VoltstackSite#sli_to_global_dr}
  */
  readonly sliToGlobalDr?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr;
  /**
  * slo_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#slo_to_global_dr VoltstackSite#slo_to_global_dr}
  */
  readonly sloToGlobalDr?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_forward_proxy: cdktf.booleanToTerraform(struct!.disableForwardProxy),
    enable_forward_proxy: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct!.enableForwardProxy),
    sli_to_global_dr: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct!.sliToGlobalDr),
    slo_to_global_dr: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct!.sloToGlobalDr),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.disableForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_forward_proxy: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct!.enableForwardProxy),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyList",
    },
    sli_to_global_dr: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct!.sliToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrList",
    },
    slo_to_global_dr: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct!.sloToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableForwardProxy = this._disableForwardProxy;
    }
    if (this._enableForwardProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableForwardProxy = this._enableForwardProxy?.internalValue;
    }
    if (this._sliToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliToGlobalDr = this._sliToGlobalDr?.internalValue;
    }
    if (this._sloToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloToGlobalDr = this._sloToGlobalDr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableForwardProxy = undefined;
      this._enableForwardProxy.internalValue = undefined;
      this._sliToGlobalDr.internalValue = undefined;
      this._sloToGlobalDr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableForwardProxy = value.disableForwardProxy;
      this._enableForwardProxy.internalValue = value.enableForwardProxy;
      this._sliToGlobalDr.internalValue = value.sliToGlobalDr;
      this._sloToGlobalDr.internalValue = value.sloToGlobalDr;
    }
  }

  // disable_forward_proxy - computed: false, optional: true, required: false
  private _disableForwardProxy?: boolean | cdktf.IResolvable; 
  public get disableForwardProxy() {
    return this.getBooleanAttribute('disable_forward_proxy');
  }
  public set disableForwardProxy(value: boolean | cdktf.IResolvable) {
    this._disableForwardProxy = value;
  }
  public resetDisableForwardProxy() {
    this._disableForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableForwardProxyInput() {
    return this._disableForwardProxy;
  }

  // enable_forward_proxy - computed: false, optional: true, required: false
  private _enableForwardProxy = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference(this, "enable_forward_proxy");
  public get enableForwardProxy() {
    return this._enableForwardProxy;
  }
  public putEnableForwardProxy(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy) {
    this._enableForwardProxy.internalValue = value;
  }
  public resetEnableForwardProxy() {
    this._enableForwardProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForwardProxyInput() {
    return this._enableForwardProxy.internalValue;
  }

  // sli_to_global_dr - computed: false, optional: true, required: false
  private _sliToGlobalDr = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference(this, "sli_to_global_dr");
  public get sliToGlobalDr() {
    return this._sliToGlobalDr;
  }
  public putSliToGlobalDr(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr) {
    this._sliToGlobalDr.internalValue = value;
  }
  public resetSliToGlobalDr() {
    this._sliToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliToGlobalDrInput() {
    return this._sliToGlobalDr.internalValue;
  }

  // slo_to_global_dr - computed: false, optional: true, required: false
  private _sloToGlobalDr = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference(this, "slo_to_global_dr");
  public get sloToGlobalDr() {
    return this._sloToGlobalDr;
  }
  public putSloToGlobalDr(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr) {
    this._sloToGlobalDr.internalValue = value;
  }
  public resetSloToGlobalDr() {
    this._sloToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloToGlobalDrInput() {
    return this._sloToGlobalDr.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference {
    return new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct {
  /**
  * global_network_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#global_network_connections VoltstackSite#global_network_connections}
  */
  readonly globalNetworkConnections: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListStructToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListStructOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_network_connections: cdktf.listMapper(voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToTerraform, true)(struct!.globalNetworkConnections),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListStructToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListStructOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_network_connections: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToHclTerraform, true)(struct!.globalNetworkConnections),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalNetworkConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkConnections = this._globalNetworkConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalNetworkConnections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalNetworkConnections.internalValue = value.globalNetworkConnections;
    }
  }

  // global_network_connections - computed: false, optional: false, required: true
  private _globalNetworkConnections = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsList(this, "global_network_connections", false);
  public get globalNetworkConnections() {
    return this._globalNetworkConnections;
  }
  public putGlobalNetworkConnections(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable) {
    this._globalNetworkConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkConnectionsInput() {
    return this._globalNetworkConnections.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor {
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster VoltstackSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#device VoltstackSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#is_primary VoltstackSite#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#monitor_disabled VoltstackSite#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#not_primary VoltstackSite#not_primary}
  */
  readonly notPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#priority VoltstackSite#priority}
  */
  readonly priority?: number;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#monitor VoltstackSite#monitor}
  */
  readonly monitor?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.booleanToTerraform(struct!.cluster),
    device: cdktf.stringToTerraform(struct!.device),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    not_primary: cdktf.booleanToTerraform(struct!.notPrimary),
    priority: cdktf.numberToTerraform(struct!.priority),
    monitor: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToTerraform(struct!.monitor),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.booleanToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_primary: {
      value: cdktf.booleanToHclTerraform(struct!.notPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._notPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrimary = this._notPrimary;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._device = undefined;
      this._isPrimary = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._node = undefined;
      this._notPrimary = undefined;
      this._priority = undefined;
      this._monitor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._device = value.device;
      this._isPrimary = value.isPrimary;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._node = value.nodeAttribute;
      this._notPrimary = value.notPrimary;
      this._priority = value.priority;
      this._monitor.internalValue = value.monitor;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: boolean | cdktf.IResolvable; 
  public get cluster() {
    return this.getBooleanAttribute('cluster');
  }
  public set cluster(value: boolean | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // not_primary - computed: false, optional: true, required: false
  private _notPrimary?: boolean | cdktf.IResolvable; 
  public get notPrimary() {
    return this.getBooleanAttribute('not_primary');
  }
  public set notPrimary(value: boolean | cdktf.IResolvable) {
    this._notPrimary = value;
  }
  public resetNotPrimary() {
    this._notPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrimaryInput() {
    return this._notPrimary;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster VoltstackSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#device VoltstackSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.booleanToTerraform(struct!.cluster),
    device: cdktf.stringToTerraform(struct!.device),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.booleanToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._device = undefined;
      this._mtu = undefined;
      this._node = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._device = value.device;
      this._mtu = value.mtu;
      this._node = value.nodeAttribute;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: boolean | cdktf.IResolvable; 
  public get cluster() {
    return this.getBooleanAttribute('cluster');
  }
  public set cluster(value: boolean | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#end_ip VoltstackSite#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#exclude VoltstackSite#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#start_ip VoltstackSite#start_ip}
  */
  readonly startIp?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._exclude = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._exclude = value.exclude;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dgw_address VoltstackSite#dgw_address}
  */
  readonly dgwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_address VoltstackSite#dns_address}
  */
  readonly dnsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#first_address VoltstackSite#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#last_address VoltstackSite#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix VoltstackSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#pool_settings VoltstackSite#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#same_as_dgw VoltstackSite#same_as_dgw}
  */
  readonly sameAsDgw?: boolean | cdktf.IResolvable;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix_allocator VoltstackSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#pools VoltstackSite#pools}
  */
  readonly pools?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dgw_address: cdktf.stringToTerraform(struct!.dgwAddress),
    dns_address: cdktf.stringToTerraform(struct!.dnsAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    same_as_dgw: cdktf.booleanToTerraform(struct!.sameAsDgw),
    network_prefix_allocator: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dgw_address: {
      value: cdktf.stringToHclTerraform(struct!.dgwAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_address: {
      value: cdktf.stringToHclTerraform(struct!.dnsAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_as_dgw: {
      value: cdktf.booleanToHclTerraform(struct!.sameAsDgw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_prefix_allocator: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dgwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgwAddress = this._dgwAddress;
    }
    if (this._dnsAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAddress = this._dnsAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._sameAsDgw !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameAsDgw = this._sameAsDgw;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dgwAddress = undefined;
      this._dnsAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._sameAsDgw = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dgwAddress = value.dgwAddress;
      this._dnsAddress = value.dnsAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._sameAsDgw = value.sameAsDgw;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
      this._pools.internalValue = value.pools;
    }
  }

  // dgw_address - computed: false, optional: true, required: false
  private _dgwAddress?: string; 
  public get dgwAddress() {
    return this.getStringAttribute('dgw_address');
  }
  public set dgwAddress(value: string) {
    this._dgwAddress = value;
  }
  public resetDgwAddress() {
    this._dgwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgwAddressInput() {
    return this._dgwAddress;
  }

  // dns_address - computed: false, optional: true, required: false
  private _dnsAddress?: string; 
  public get dnsAddress() {
    return this.getStringAttribute('dns_address');
  }
  public set dnsAddress(value: string) {
    this._dnsAddress = value;
  }
  public resetDnsAddress() {
    this._dnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressInput() {
    return this._dnsAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // same_as_dgw - computed: false, optional: true, required: false
  private _sameAsDgw?: boolean | cdktf.IResolvable; 
  public get sameAsDgw() {
    return this.getBooleanAttribute('same_as_dgw');
  }
  public set sameAsDgw(value: boolean | cdktf.IResolvable) {
    this._sameAsDgw = value;
  }
  public resetSameAsDgw() {
    this._sameAsDgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsDgwInput() {
    return this._sameAsDgw;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#automatic_from_end VoltstackSite#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#automatic_from_start VoltstackSite#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dhcp_option82_tag VoltstackSite#dhcp_option82_tag}
  */
  readonly dhcpOption82Tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#fixed_ip_map VoltstackSite#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dhcp_networks VoltstackSite#dhcp_networks}
  */
  readonly dhcpNetworks: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    dhcp_option82_tag: cdktf.stringToTerraform(struct!.dhcpOption82Tag),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_option82_tag: {
      value: cdktf.stringToHclTerraform(struct!.dhcpOption82Tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksList",
    },
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._dhcpOption82Tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOption82Tag = this._dhcpOption82Tag;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._dhcpOption82Tag = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._dhcpOption82Tag = value.dhcpOption82Tag;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // dhcp_option82_tag - computed: false, optional: true, required: false
  private _dhcpOption82Tag?: string; 
  public get dhcpOption82Tag() {
    return this.getStringAttribute('dhcp_option82_tag');
  }
  public set dhcpOption82Tag(value: string) {
    this._dhcpOption82Tag = value;
  }
  public resetDhcpOption82Tag() {
    this._dhcpOption82Tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82TagInput() {
    return this._dhcpOption82Tag;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_list VoltstackSite#dns_list}
  */
  readonly dnsList: string[];
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsList = value.dnsList;
    }
  }

  // dns_list - computed: false, optional: false, required: true
  private _dnsList?: string[]; 
  public get dnsList() {
    return this.getListAttribute('dns_list');
  }
  public set dnsList(value: string[]) {
    this._dnsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#configured_address VoltstackSite#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#first_address VoltstackSite#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#last_address VoltstackSite#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_address: cdktf.stringToTerraform(struct!.configuredAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_address: {
      value: cdktf.stringToHclTerraform(struct!.configuredAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredAddress = this._configuredAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredAddress = value.configuredAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
    }
  }

  // configured_address - computed: false, optional: true, required: false
  private _configuredAddress?: string; 
  public get configuredAddress() {
    return this.getStringAttribute('configured_address');
  }
  public set configuredAddress(value: string) {
    this._configuredAddress = value;
  }
  public resetConfiguredAddress() {
    this._configuredAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredAddressInput() {
    return this._configuredAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#configured_list VoltstackSite#configured_list}
  */
  readonly configuredList?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#local_dns VoltstackSite#local_dns}
  */
  readonly localDns?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredList = this._configuredList?.internalValue;
    }
    if (this._localDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDns = this._localDns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredList.internalValue = undefined;
      this._localDns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredList.internalValue = value.configuredList;
      this._localDns.internalValue = value.localDns;
    }
  }

  // configured_list - computed: false, optional: true, required: false
  private _configuredList = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
    this._configuredList.internalValue = value;
  }
  public resetConfiguredList() {
    this._configuredList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredListInput() {
    return this._configuredList.internalValue;
  }

  // local_dns - computed: false, optional: true, required: false
  private _localDns = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns) {
    this._localDns.internalValue = value;
  }
  public resetLocalDns() {
    this._localDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsInput() {
    return this._localDns.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#end_ip VoltstackSite#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#exclude VoltstackSite#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#start_ip VoltstackSite#start_ip}
  */
  readonly startIp?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._exclude = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._exclude = value.exclude;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix VoltstackSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#pool_settings VoltstackSite#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix_allocator VoltstackSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#pools VoltstackSite#pools}
  */
  readonly pools?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    network_prefix_allocator: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
      this._pools.internalValue = value.pools;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#automatic_from_end VoltstackSite#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#automatic_from_start VoltstackSite#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#fixed_ip_map VoltstackSite#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dhcp_networks VoltstackSite#dhcp_networks}
  */
  readonly dhcpNetworks: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix VoltstackSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_config VoltstackSite#dns_config}
  */
  readonly dnsConfig?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#stateful VoltstackSite#stateful}
  */
  readonly stateful?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_config: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._stateful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPrefix = undefined;
      this._dnsConfig.internalValue = undefined;
      this._stateful.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPrefix = value.networkPrefix;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._stateful.internalValue = value.stateful;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful) {
    this._stateful.internalValue = value;
  }
  public resetStateful() {
    this._stateful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#host VoltstackSite#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#router VoltstackSite#router}
  */
  readonly router?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.booleanToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._router.internalValue = value.router;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // router - computed: false, optional: true, required: false
  private _router = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor {
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#value VoltstackSite#value}
  */
  readonly value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
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
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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
  private _value = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix_allocator VoltstackSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster_static_ip VoltstackSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#fleet_static_ip VoltstackSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node_static_ip VoltstackSite#node_static_ip}
  */
  readonly nodeStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpList",
    },
    fleet_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpList",
    },
    node_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._fleetStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetStaticIp = this._fleetStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._fleetStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._fleetStaticIp.internalValue = value.fleetStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // fleet_static_ip - computed: false, optional: true, required: false
  private _fleetStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp) {
    this._fleetStaticIp.internalValue = value;
  }
  public resetFleetStaticIp() {
    this._fleetStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetStaticIpInput() {
    return this._fleetStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#value VoltstackSite#value}
  */
  readonly value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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
  private _value = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix_allocator VoltstackSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster_static_ip VoltstackSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#fleet_static_ip VoltstackSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node_static_ip VoltstackSite#node_static_ip}
  */
  readonly nodeStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpList",
    },
    fleet_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpList",
    },
    node_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._fleetStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetStaticIp = this._fleetStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._fleetStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._fleetStaticIp.internalValue = value.fleetStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // fleet_static_ip - computed: false, optional: true, required: false
  private _fleetStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp) {
    this._fleetStaticIp.internalValue = value;
  }
  public resetFleetStaticIp() {
    this._fleetStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetStaticIpInput() {
    return this._fleetStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster VoltstackSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#device VoltstackSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dhcp_client VoltstackSite#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_fabric_network VoltstackSite#ip_fabric_network}
  */
  readonly ipFabricNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#is_primary VoltstackSite#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#monitor_disabled VoltstackSite#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#no_ipv6_address VoltstackSite#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#not_primary VoltstackSite#not_primary}
  */
  readonly notPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#priority VoltstackSite#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#site_local_inside_network VoltstackSite#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#site_local_network VoltstackSite#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#storage_network VoltstackSite#storage_network}
  */
  readonly storageNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#untagged VoltstackSite#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#vlan_id VoltstackSite#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dhcp_server VoltstackSite#dhcp_server}
  */
  readonly dhcpServer?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer;
  /**
  * inside_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#inside_network VoltstackSite#inside_network}
  */
  readonly insideNetwork?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ipv6_auto_config VoltstackSite#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#monitor VoltstackSite#monitor}
  */
  readonly monitor?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#segment_network VoltstackSite#segment_network}
  */
  readonly segmentNetwork?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork;
  /**
  * srv6_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#srv6_network VoltstackSite#srv6_network}
  */
  readonly srv6Network?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_ip VoltstackSite#static_ip}
  */
  readonly staticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_ipv6_address VoltstackSite#static_ipv6_address}
  */
  readonly staticIpv6Address?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.booleanToTerraform(struct!.cluster),
    device: cdktf.stringToTerraform(struct!.device),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    ip_fabric_network: cdktf.booleanToTerraform(struct!.ipFabricNetwork),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    not_primary: cdktf.booleanToTerraform(struct!.notPrimary),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    storage_network: cdktf.booleanToTerraform(struct!.storageNetwork),
    untagged: cdktf.booleanToTerraform(struct!.untagged),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    dhcp_server: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToTerraform(struct!.dhcpServer),
    inside_network: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkToTerraform(struct!.insideNetwork),
    ipv6_auto_config: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToTerraform(struct!.monitor),
    segment_network: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToTerraform(struct!.segmentNetwork),
    srv6_network: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkToTerraform(struct!.srv6Network),
    static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.booleanToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_client: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_fabric_network: {
      value: cdktf.booleanToHclTerraform(struct!.ipFabricNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_primary: {
      value: cdktf.booleanToHclTerraform(struct!.notPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_network: {
      value: cdktf.booleanToHclTerraform(struct!.storageNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    untagged: {
      value: cdktf.booleanToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp_server: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerList",
    },
    inside_network: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkToHclTerraform(struct!.insideNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkList",
    },
    ipv6_auto_config: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigList",
    },
    monitor: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorList",
    },
    segment_network: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkList",
    },
    srv6_network: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkToHclTerraform(struct!.srv6Network),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkList",
    },
    static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpList",
    },
    static_ipv6_address: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._ipFabricNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFabricNetwork = this._ipFabricNetwork;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._notPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrimary = this._notPrimary;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._storageNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNetwork = this._storageNetwork;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._insideNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork?.internalValue;
    }
    if (this._ipv6AutoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AutoConfig = this._ipv6AutoConfig?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    if (this._srv6Network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6Network = this._srv6Network?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._device = undefined;
      this._dhcpClient = undefined;
      this._ipFabricNetwork = undefined;
      this._isPrimary = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._noIpv6Address = undefined;
      this._node = undefined;
      this._notPrimary = undefined;
      this._priority = undefined;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._storageNetwork = undefined;
      this._untagged = undefined;
      this._vlanId = undefined;
      this._dhcpServer.internalValue = undefined;
      this._insideNetwork.internalValue = undefined;
      this._ipv6AutoConfig.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._segmentNetwork.internalValue = undefined;
      this._srv6Network.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._device = value.device;
      this._dhcpClient = value.dhcpClient;
      this._ipFabricNetwork = value.ipFabricNetwork;
      this._isPrimary = value.isPrimary;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._noIpv6Address = value.noIpv6Address;
      this._node = value.nodeAttribute;
      this._notPrimary = value.notPrimary;
      this._priority = value.priority;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._storageNetwork = value.storageNetwork;
      this._untagged = value.untagged;
      this._vlanId = value.vlanId;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._insideNetwork.internalValue = value.insideNetwork;
      this._ipv6AutoConfig.internalValue = value.ipv6AutoConfig;
      this._monitor.internalValue = value.monitor;
      this._segmentNetwork.internalValue = value.segmentNetwork;
      this._srv6Network.internalValue = value.srv6Network;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: boolean | cdktf.IResolvable; 
  public get cluster() {
    return this.getBooleanAttribute('cluster');
  }
  public set cluster(value: boolean | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient?: boolean | cdktf.IResolvable; 
  public get dhcpClient() {
    return this.getBooleanAttribute('dhcp_client');
  }
  public set dhcpClient(value: boolean | cdktf.IResolvable) {
    this._dhcpClient = value;
  }
  public resetDhcpClient() {
    this._dhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient;
  }

  // ip_fabric_network - computed: false, optional: true, required: false
  private _ipFabricNetwork?: boolean | cdktf.IResolvable; 
  public get ipFabricNetwork() {
    return this.getBooleanAttribute('ip_fabric_network');
  }
  public set ipFabricNetwork(value: boolean | cdktf.IResolvable) {
    this._ipFabricNetwork = value;
  }
  public resetIpFabricNetwork() {
    this._ipFabricNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFabricNetworkInput() {
    return this._ipFabricNetwork;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // no_ipv6_address - computed: false, optional: true, required: false
  private _noIpv6Address?: boolean | cdktf.IResolvable; 
  public get noIpv6Address() {
    return this.getBooleanAttribute('no_ipv6_address');
  }
  public set noIpv6Address(value: boolean | cdktf.IResolvable) {
    this._noIpv6Address = value;
  }
  public resetNoIpv6Address() {
    this._noIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6AddressInput() {
    return this._noIpv6Address;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // not_primary - computed: false, optional: true, required: false
  private _notPrimary?: boolean | cdktf.IResolvable; 
  public get notPrimary() {
    return this.getBooleanAttribute('not_primary');
  }
  public set notPrimary(value: boolean | cdktf.IResolvable) {
    this._notPrimary = value;
  }
  public resetNotPrimary() {
    this._notPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrimaryInput() {
    return this._notPrimary;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // storage_network - computed: false, optional: true, required: false
  private _storageNetwork?: boolean | cdktf.IResolvable; 
  public get storageNetwork() {
    return this.getBooleanAttribute('storage_network');
  }
  public set storageNetwork(value: boolean | cdktf.IResolvable) {
    this._storageNetwork = value;
  }
  public resetStorageNetwork() {
    this._storageNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkInput() {
    return this._storageNetwork;
  }

  // untagged - computed: false, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // inside_network - computed: false, optional: true, required: false
  private _insideNetwork = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkOutputReference(this, "inside_network");
  public get insideNetwork() {
    return this._insideNetwork;
  }
  public putInsideNetwork(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork) {
    this._insideNetwork.internalValue = value;
  }
  public resetInsideNetwork() {
    this._insideNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetworkInput() {
    return this._insideNetwork.internalValue;
  }

  // ipv6_auto_config - computed: false, optional: true, required: false
  private _ipv6AutoConfig = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig) {
    this._ipv6AutoConfig.internalValue = value;
  }
  public resetIpv6AutoConfig() {
    this._ipv6AutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoConfigInput() {
    return this._ipv6AutoConfig.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }

  // srv6_network - computed: false, optional: true, required: false
  private _srv6Network = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkOutputReference(this, "srv6_network");
  public get srv6Network() {
    return this._srv6Network;
  }
  public putSrv6Network(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network) {
    this._srv6Network.internalValue = value;
  }
  public resetSrv6Network() {
    this._srv6Network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6NetworkInput() {
    return this._srv6Network.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ipv6_address - computed: false, optional: true, required: false
  private _staticIpv6Address = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#end_ip VoltstackSite#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#exclude VoltstackSite#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#start_ip VoltstackSite#start_ip}
  */
  readonly startIp?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._exclude = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._exclude = value.exclude;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dgw_address VoltstackSite#dgw_address}
  */
  readonly dgwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_address VoltstackSite#dns_address}
  */
  readonly dnsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#first_address VoltstackSite#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#last_address VoltstackSite#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix VoltstackSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#pool_settings VoltstackSite#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#same_as_dgw VoltstackSite#same_as_dgw}
  */
  readonly sameAsDgw?: boolean | cdktf.IResolvable;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix_allocator VoltstackSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#pools VoltstackSite#pools}
  */
  readonly pools?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dgw_address: cdktf.stringToTerraform(struct!.dgwAddress),
    dns_address: cdktf.stringToTerraform(struct!.dnsAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    same_as_dgw: cdktf.booleanToTerraform(struct!.sameAsDgw),
    network_prefix_allocator: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dgw_address: {
      value: cdktf.stringToHclTerraform(struct!.dgwAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_address: {
      value: cdktf.stringToHclTerraform(struct!.dnsAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_as_dgw: {
      value: cdktf.booleanToHclTerraform(struct!.sameAsDgw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_prefix_allocator: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dgwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgwAddress = this._dgwAddress;
    }
    if (this._dnsAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAddress = this._dnsAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._sameAsDgw !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameAsDgw = this._sameAsDgw;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dgwAddress = undefined;
      this._dnsAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._sameAsDgw = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dgwAddress = value.dgwAddress;
      this._dnsAddress = value.dnsAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._sameAsDgw = value.sameAsDgw;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
      this._pools.internalValue = value.pools;
    }
  }

  // dgw_address - computed: false, optional: true, required: false
  private _dgwAddress?: string; 
  public get dgwAddress() {
    return this.getStringAttribute('dgw_address');
  }
  public set dgwAddress(value: string) {
    this._dgwAddress = value;
  }
  public resetDgwAddress() {
    this._dgwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgwAddressInput() {
    return this._dgwAddress;
  }

  // dns_address - computed: false, optional: true, required: false
  private _dnsAddress?: string; 
  public get dnsAddress() {
    return this.getStringAttribute('dns_address');
  }
  public set dnsAddress(value: string) {
    this._dnsAddress = value;
  }
  public resetDnsAddress() {
    this._dnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressInput() {
    return this._dnsAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // same_as_dgw - computed: false, optional: true, required: false
  private _sameAsDgw?: boolean | cdktf.IResolvable; 
  public get sameAsDgw() {
    return this.getBooleanAttribute('same_as_dgw');
  }
  public set sameAsDgw(value: boolean | cdktf.IResolvable) {
    this._sameAsDgw = value;
  }
  public resetSameAsDgw() {
    this._sameAsDgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsDgwInput() {
    return this._sameAsDgw;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#automatic_from_end VoltstackSite#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#automatic_from_start VoltstackSite#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dhcp_option82_tag VoltstackSite#dhcp_option82_tag}
  */
  readonly dhcpOption82Tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#fixed_ip_map VoltstackSite#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dhcp_networks VoltstackSite#dhcp_networks}
  */
  readonly dhcpNetworks: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    dhcp_option82_tag: cdktf.stringToTerraform(struct!.dhcpOption82Tag),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_option82_tag: {
      value: cdktf.stringToHclTerraform(struct!.dhcpOption82Tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksList",
    },
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._dhcpOption82Tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOption82Tag = this._dhcpOption82Tag;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._dhcpOption82Tag = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._dhcpOption82Tag = value.dhcpOption82Tag;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // dhcp_option82_tag - computed: false, optional: true, required: false
  private _dhcpOption82Tag?: string; 
  public get dhcpOption82Tag() {
    return this.getStringAttribute('dhcp_option82_tag');
  }
  public set dhcpOption82Tag(value: string) {
    this._dhcpOption82Tag = value;
  }
  public resetDhcpOption82Tag() {
    this._dhcpOption82Tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82TagInput() {
    return this._dhcpOption82Tag;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#value VoltstackSite#value}
  */
  readonly value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
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
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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
  private _value = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix_allocator VoltstackSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster_static_ip VoltstackSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#fleet_static_ip VoltstackSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node_static_ip VoltstackSite#node_static_ip}
  */
  readonly nodeStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpList",
    },
    fleet_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpList",
    },
    node_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._fleetStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetStaticIp = this._fleetStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._fleetStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._fleetStaticIp.internalValue = value.fleetStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // fleet_static_ip - computed: false, optional: true, required: false
  private _fleetStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp) {
    this._fleetStaticIp.internalValue = value;
  }
  public resetFleetStaticIp() {
    this._fleetStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetStaticIpInput() {
    return this._fleetStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#value VoltstackSite#value}
  */
  readonly value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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
  private _value = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix_allocator VoltstackSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster_static_ip VoltstackSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#fleet_static_ip VoltstackSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node_static_ip VoltstackSite#node_static_ip}
  */
  readonly nodeStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpList",
    },
    fleet_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpList",
    },
    node_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._fleetStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetStaticIp = this._fleetStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._fleetStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._fleetStaticIp.internalValue = value.fleetStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // fleet_static_ip - computed: false, optional: true, required: false
  private _fleetStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp) {
    this._fleetStaticIp.internalValue = value;
  }
  public resetFleetStaticIp() {
    this._fleetStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetStaticIpInput() {
    return this._fleetStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster VoltstackSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#device VoltstackSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dhcp_client VoltstackSite#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_fabric_network VoltstackSite#ip_fabric_network}
  */
  readonly ipFabricNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#no_ipv6_address VoltstackSite#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#site_local_inside_network VoltstackSite#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#site_local_network VoltstackSite#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dhcp_server VoltstackSite#dhcp_server}
  */
  readonly dhcpServer?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_ip VoltstackSite#static_ip}
  */
  readonly staticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_ipv6_address VoltstackSite#static_ipv6_address}
  */
  readonly staticIpv6Address?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.booleanToTerraform(struct!.cluster),
    device: cdktf.stringToTerraform(struct!.device),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    ip_fabric_network: cdktf.booleanToTerraform(struct!.ipFabricNetwork),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    dhcp_server: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerToTerraform(struct!.dhcpServer),
    static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.booleanToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_client: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_fabric_network: {
      value: cdktf.booleanToHclTerraform(struct!.ipFabricNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_server: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerList",
    },
    static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpList",
    },
    static_ipv6_address: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._ipFabricNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFabricNetwork = this._ipFabricNetwork;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._device = undefined;
      this._dhcpClient = undefined;
      this._ipFabricNetwork = undefined;
      this._mtu = undefined;
      this._noIpv6Address = undefined;
      this._node = undefined;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._dhcpServer.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._device = value.device;
      this._dhcpClient = value.dhcpClient;
      this._ipFabricNetwork = value.ipFabricNetwork;
      this._mtu = value.mtu;
      this._noIpv6Address = value.noIpv6Address;
      this._node = value.nodeAttribute;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: boolean | cdktf.IResolvable; 
  public get cluster() {
    return this.getBooleanAttribute('cluster');
  }
  public set cluster(value: boolean | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient?: boolean | cdktf.IResolvable; 
  public get dhcpClient() {
    return this.getBooleanAttribute('dhcp_client');
  }
  public set dhcpClient(value: boolean | cdktf.IResolvable) {
    this._dhcpClient = value;
  }
  public resetDhcpClient() {
    this._dhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient;
  }

  // ip_fabric_network - computed: false, optional: true, required: false
  private _ipFabricNetwork?: boolean | cdktf.IResolvable; 
  public get ipFabricNetwork() {
    return this.getBooleanAttribute('ip_fabric_network');
  }
  public set ipFabricNetwork(value: boolean | cdktf.IResolvable) {
    this._ipFabricNetwork = value;
  }
  public resetIpFabricNetwork() {
    this._ipFabricNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFabricNetworkInput() {
    return this._ipFabricNetwork;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // no_ipv6_address - computed: false, optional: true, required: false
  private _noIpv6Address?: boolean | cdktf.IResolvable; 
  public get noIpv6Address() {
    return this.getBooleanAttribute('no_ipv6_address');
  }
  public set noIpv6Address(value: boolean | cdktf.IResolvable) {
    this._noIpv6Address = value;
  }
  public resetNoIpv6Address() {
    this._noIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6AddressInput() {
    return this._noIpv6Address;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ipv6_address - computed: false, optional: true, required: false
  private _staticIpv6Address = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnect | cdktf.IResolvable): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnect | cdktf.IResolvable): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnect[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetworkToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetwork): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetworkToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetwork): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetwork | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetwork | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#value VoltstackSite#value}
  */
  readonly value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
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
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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
  private _value = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#network_prefix_allocator VoltstackSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster_static_ip VoltstackSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#fleet_static_ip VoltstackSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node_static_ip VoltstackSite#node_static_ip}
  */
  readonly nodeStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpList",
    },
    fleet_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpList",
    },
    node_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._fleetStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetStaticIp = this._fleetStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._fleetStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._fleetStaticIp.internalValue = value.fleetStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // fleet_static_ip - computed: false, optional: true, required: false
  private _fleetStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpFleetStaticIp) {
    this._fleetStaticIp.internalValue = value;
  }
  public resetFleetStaticIp() {
    this._fleetStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetStaticIpInput() {
    return this._fleetStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel): any {
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


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel): any {
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

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cluster VoltstackSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#priority VoltstackSite#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#site_local_inside_network VoltstackSite#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#site_local_network VoltstackSite#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * cloud_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#cloud_connect VoltstackSite#cloud_connect}
  */
  readonly cloudConnect?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnect[] | cdktf.IResolvable;
  /**
  * inside_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#inside_network VoltstackSite#inside_network}
  */
  readonly insideNetwork?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetwork;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_ip VoltstackSite#static_ip}
  */
  readonly staticIp: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp;
  /**
  * tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tunnel VoltstackSite#tunnel}
  */
  readonly tunnel: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.booleanToTerraform(struct!.cluster),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    cloud_connect: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectToTerraform, true)(struct!.cloudConnect),
    inside_network: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetworkToTerraform(struct!.insideNetwork),
    static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpToTerraform(struct!.staticIp),
    tunnel: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelToTerraform(struct!.tunnel),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.booleanToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_connect: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectToHclTerraform, true)(struct!.cloudConnect),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectList",
    },
    inside_network: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetworkToHclTerraform(struct!.insideNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetworkList",
    },
    static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpList",
    },
    tunnel: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelToHclTerraform(struct!.tunnel),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._cloudConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudConnect = this._cloudConnect?.internalValue;
    }
    if (this._insideNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._tunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._mtu = undefined;
      this._node = undefined;
      this._priority = undefined;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._cloudConnect.internalValue = undefined;
      this._insideNetwork.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._tunnel.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._mtu = value.mtu;
      this._node = value.nodeAttribute;
      this._priority = value.priority;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._cloudConnect.internalValue = value.cloudConnect;
      this._insideNetwork.internalValue = value.insideNetwork;
      this._staticIp.internalValue = value.staticIp;
      this._tunnel.internalValue = value.tunnel;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: boolean | cdktf.IResolvable; 
  public get cluster() {
    return this.getBooleanAttribute('cluster');
  }
  public set cluster(value: boolean | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // cloud_connect - computed: false, optional: true, required: false
  private _cloudConnect = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnectList(this, "cloud_connect", false);
  public get cloudConnect() {
    return this._cloudConnect;
  }
  public putCloudConnect(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceCloudConnect[] | cdktf.IResolvable) {
    this._cloudConnect.internalValue = value;
  }
  public resetCloudConnect() {
    this._cloudConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectInput() {
    return this._cloudConnect.internalValue;
  }

  // inside_network - computed: false, optional: true, required: false
  private _insideNetwork = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetworkOutputReference(this, "inside_network");
  public get insideNetwork() {
    return this._insideNetwork;
  }
  public putInsideNetwork(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceInsideNetwork) {
    this._insideNetwork.internalValue = value;
  }
  public resetInsideNetwork() {
    this._insideNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetworkInput() {
    return this._insideNetwork.internalValue;
  }

  // static_ip - computed: false, optional: false, required: true
  private _staticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp) {
    this._staticIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // tunnel - computed: false, optional: false, required: true
  private _tunnel = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel) {
    this._tunnel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dc_cluster_group_connectivity_interface_disabled VoltstackSite#dc_cluster_group_connectivity_interface_disabled}
  */
  readonly dcClusterGroupConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dc_cluster_group_connectivity_interface_enabled VoltstackSite#dc_cluster_group_connectivity_interface_enabled}
  */
  readonly dcClusterGroupConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#description VoltstackSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * dedicated_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dedicated_interface VoltstackSite#dedicated_interface}
  */
  readonly dedicatedInterface?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface;
  /**
  * dedicated_management_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#dedicated_management_interface VoltstackSite#dedicated_management_interface}
  */
  readonly dedicatedManagementInterface?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ethernet_interface VoltstackSite#ethernet_interface}
  */
  readonly ethernetInterface?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface;
  /**
  * loopback_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#loopback_interface VoltstackSite#loopback_interface}
  */
  readonly loopbackInterface?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface;
  /**
  * tunnel_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tunnel_interface VoltstackSite#tunnel_interface}
  */
  readonly tunnelInterface?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dc_cluster_group_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.dcClusterGroupConnectivityInterfaceDisabled),
    dc_cluster_group_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.dcClusterGroupConnectivityInterfaceEnabled),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    dedicated_interface: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToTerraform(struct!.dedicatedInterface),
    dedicated_management_interface: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToTerraform(struct!.dedicatedManagementInterface),
    ethernet_interface: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToTerraform(struct!.ethernetInterface),
    loopback_interface: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceToTerraform(struct!.loopbackInterface),
    tunnel_interface: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceToTerraform(struct!.tunnelInterface),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dc_cluster_group_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.dcClusterGroupConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dc_cluster_group_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dcClusterGroupConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dedicated_interface: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToHclTerraform(struct!.dedicatedInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceList",
    },
    dedicated_management_interface: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToHclTerraform(struct!.dedicatedManagementInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceList",
    },
    ethernet_interface: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceList",
    },
    loopback_interface: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceToHclTerraform(struct!.loopbackInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceList",
    },
    tunnel_interface: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceToHclTerraform(struct!.tunnelInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dcClusterGroupConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupConnectivityInterfaceDisabled = this._dcClusterGroupConnectivityInterfaceDisabled;
    }
    if (this._dcClusterGroupConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupConnectivityInterfaceEnabled = this._dcClusterGroupConnectivityInterfaceEnabled;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._dedicatedInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedInterface = this._dedicatedInterface?.internalValue;
    }
    if (this._dedicatedManagementInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedManagementInterface = this._dedicatedManagementInterface?.internalValue;
    }
    if (this._ethernetInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetInterface = this._ethernetInterface?.internalValue;
    }
    if (this._loopbackInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackInterface = this._loopbackInterface?.internalValue;
    }
    if (this._tunnelInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelInterface = this._tunnelInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dcClusterGroupConnectivityInterfaceDisabled = undefined;
      this._dcClusterGroupConnectivityInterfaceEnabled = undefined;
      this._description = undefined;
      this._labels = undefined;
      this._dedicatedInterface.internalValue = undefined;
      this._dedicatedManagementInterface.internalValue = undefined;
      this._ethernetInterface.internalValue = undefined;
      this._loopbackInterface.internalValue = undefined;
      this._tunnelInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dcClusterGroupConnectivityInterfaceDisabled = value.dcClusterGroupConnectivityInterfaceDisabled;
      this._dcClusterGroupConnectivityInterfaceEnabled = value.dcClusterGroupConnectivityInterfaceEnabled;
      this._description = value.description;
      this._labels = value.labels;
      this._dedicatedInterface.internalValue = value.dedicatedInterface;
      this._dedicatedManagementInterface.internalValue = value.dedicatedManagementInterface;
      this._ethernetInterface.internalValue = value.ethernetInterface;
      this._loopbackInterface.internalValue = value.loopbackInterface;
      this._tunnelInterface.internalValue = value.tunnelInterface;
    }
  }

  // dc_cluster_group_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _dcClusterGroupConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get dcClusterGroupConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('dc_cluster_group_connectivity_interface_disabled');
  }
  public set dcClusterGroupConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._dcClusterGroupConnectivityInterfaceDisabled = value;
  }
  public resetDcClusterGroupConnectivityInterfaceDisabled() {
    this._dcClusterGroupConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupConnectivityInterfaceDisabledInput() {
    return this._dcClusterGroupConnectivityInterfaceDisabled;
  }

  // dc_cluster_group_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _dcClusterGroupConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get dcClusterGroupConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('dc_cluster_group_connectivity_interface_enabled');
  }
  public set dcClusterGroupConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._dcClusterGroupConnectivityInterfaceEnabled = value;
  }
  public resetDcClusterGroupConnectivityInterfaceEnabled() {
    this._dcClusterGroupConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupConnectivityInterfaceEnabledInput() {
    return this._dcClusterGroupConnectivityInterfaceEnabled;
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

  // dedicated_interface - computed: false, optional: true, required: false
  private _dedicatedInterface = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference(this, "dedicated_interface");
  public get dedicatedInterface() {
    return this._dedicatedInterface;
  }
  public putDedicatedInterface(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface) {
    this._dedicatedInterface.internalValue = value;
  }
  public resetDedicatedInterface() {
    this._dedicatedInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInterfaceInput() {
    return this._dedicatedInterface.internalValue;
  }

  // dedicated_management_interface - computed: false, optional: true, required: false
  private _dedicatedManagementInterface = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference(this, "dedicated_management_interface");
  public get dedicatedManagementInterface() {
    return this._dedicatedManagementInterface;
  }
  public putDedicatedManagementInterface(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface) {
    this._dedicatedManagementInterface.internalValue = value;
  }
  public resetDedicatedManagementInterface() {
    this._dedicatedManagementInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedManagementInterfaceInput() {
    return this._dedicatedManagementInterface.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface) {
    this._ethernetInterface.internalValue = value;
  }
  public resetEthernetInterface() {
    this._ethernetInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceInput() {
    return this._ethernetInterface.internalValue;
  }

  // loopback_interface - computed: false, optional: true, required: false
  private _loopbackInterface = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceOutputReference(this, "loopback_interface");
  public get loopbackInterface() {
    return this._loopbackInterface;
  }
  public putLoopbackInterface(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface) {
    this._loopbackInterface.internalValue = value;
  }
  public resetLoopbackInterface() {
    this._loopbackInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInterfaceInput() {
    return this._loopbackInterface.internalValue;
  }

  // tunnel_interface - computed: false, optional: true, required: false
  private _tunnelInterface = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceOutputReference(this, "tunnel_interface");
  public get tunnelInterface() {
    return this._tunnelInterface;
  }
  public putTunnelInterface(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface) {
    this._tunnelInterface.internalValue = value;
  }
  public resetTunnelInterface() {
    this._tunnelInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceInput() {
    return this._tunnelInterface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListStruct {
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interfaces VoltstackSite#interfaces}
  */
  readonly interfaces: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigInterfaceListStructToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListStructOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListStructToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListStructOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface): any {
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


export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface): any {
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

export class VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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


export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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

export class VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference {
    return new VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface VoltstackSite#interface}
  */
  readonly interface?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    interface: cdktf.listMapper(voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToTerraform, true)(struct!.interface),
  }
}


export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node = value.nodeAttribute;
      this._interface.internalValue = value.interface;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference {
    return new VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#list VoltstackSite#list}
  */
  readonly list?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructToTerraform, true)(struct!.list),
  }
}


export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._list.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: false, optional: true, required: false
  private _list = new VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#attrs VoltstackSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gateway VoltstackSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_prefixes VoltstackSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface VoltstackSite#interface}
  */
  readonly interface?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface;
  /**
  * node_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node_interface VoltstackSite#node_interface}
  */
  readonly nodeInterface?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct!.interface),
    node_interface: voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceToTerraform(struct!.nodeInterface),
  }
}


export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceList",
    },
    node_interface: {
      value: voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceToHclTerraform(struct!.nodeInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nodeInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeInterface = this._nodeInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
      this._nodeInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
      this._nodeInterface.internalValue = value.nodeInterface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // node_interface - computed: false, optional: true, required: false
  private _nodeInterface = new VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference(this, "node_interface");
  public get nodeInterface() {
    return this._nodeInterface;
  }
  public putNodeInterface(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface) {
    this._nodeInterface.internalValue = value;
  }
  public resetNodeInterface() {
    this._nodeInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInterfaceInput() {
    return this._nodeInterface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesOutputReference {
    return new VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticRoutes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_routes VoltstackSite#static_routes}
  */
  readonly staticRoutes: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function voltstackSiteCustomNetworkConfigSliConfigStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface): any {
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


export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface): any {
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

export class VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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


export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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

export class VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceOutputReference {
    return new VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface VoltstackSite#interface}
  */
  readonly interface?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    interface: cdktf.listMapper(voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToTerraform, true)(struct!.interface),
  }
}


export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node = value.nodeAttribute;
      this._interface.internalValue = value.interface;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructOutputReference {
    return new VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#list VoltstackSite#list}
  */
  readonly list?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToTerraform, true)(struct!.list),
  }
}


export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._list.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: false, optional: true, required: false
  private _list = new VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#attrs VoltstackSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gateway VoltstackSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_prefixes VoltstackSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface VoltstackSite#interface}
  */
  readonly interface?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface;
  /**
  * node_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node_interface VoltstackSite#node_interface}
  */
  readonly nodeInterface?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct!.interface),
    node_interface: voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceToTerraform(struct!.nodeInterface),
  }
}


export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceList",
    },
    node_interface: {
      value: voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceToHclTerraform(struct!.nodeInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nodeInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeInterface = this._nodeInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
      this._nodeInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
      this._nodeInterface.internalValue = value.nodeInterface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // node_interface - computed: false, optional: true, required: false
  private _nodeInterface = new VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference(this, "node_interface");
  public get nodeInterface() {
    return this._nodeInterface;
  }
  public putNodeInterface(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface) {
    this._nodeInterface.internalValue = value;
  }
  public resetNodeInterface() {
    this._nodeInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInterfaceInput() {
    return this._nodeInterface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesOutputReference {
    return new VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfigStaticV6Routes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_routes VoltstackSite#static_routes}
  */
  readonly staticRoutes: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesOutputReference | VoltstackSiteCustomNetworkConfigSliConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfigStaticV6Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6Routes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSliConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#no_static_routes VoltstackSite#no_static_routes}
  */
  readonly noStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#no_v6_static_routes VoltstackSite#no_v6_static_routes}
  */
  readonly noV6StaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_routes VoltstackSite#static_routes}
  */
  readonly staticRoutes?: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutes;
  /**
  * static_v6_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_v6_routes VoltstackSite#static_v6_routes}
  */
  readonly staticV6Routes?: VoltstackSiteCustomNetworkConfigSliConfigStaticV6Routes;
}

export function voltstackSiteCustomNetworkConfigSliConfigToTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigOutputReference | VoltstackSiteCustomNetworkConfigSliConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_static_routes: cdktf.booleanToTerraform(struct!.noStaticRoutes),
    no_v6_static_routes: cdktf.booleanToTerraform(struct!.noV6StaticRoutes),
    static_routes: voltstackSiteCustomNetworkConfigSliConfigStaticRoutesToTerraform(struct!.staticRoutes),
    static_v6_routes: voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesToTerraform(struct!.staticV6Routes),
  }
}


export function voltstackSiteCustomNetworkConfigSliConfigToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSliConfigOutputReference | VoltstackSiteCustomNetworkConfigSliConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_v6_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noV6StaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_routes: {
      value: voltstackSiteCustomNetworkConfigSliConfigStaticRoutesToHclTerraform(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesList",
    },
    static_v6_routes: {
      value: voltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesToHclTerraform(struct!.staticV6Routes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSliConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSliConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStaticRoutes = this._noStaticRoutes;
    }
    if (this._noV6StaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noV6StaticRoutes = this._noV6StaticRoutes;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    if (this._staticV6Routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticV6Routes = this._staticV6Routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSliConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noStaticRoutes = undefined;
      this._noV6StaticRoutes = undefined;
      this._staticRoutes.internalValue = undefined;
      this._staticV6Routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noStaticRoutes = value.noStaticRoutes;
      this._noV6StaticRoutes = value.noV6StaticRoutes;
      this._staticRoutes.internalValue = value.staticRoutes;
      this._staticV6Routes.internalValue = value.staticV6Routes;
    }
  }

  // no_static_routes - computed: false, optional: true, required: false
  private _noStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noStaticRoutes() {
    return this.getBooleanAttribute('no_static_routes');
  }
  public set noStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noStaticRoutes = value;
  }
  public resetNoStaticRoutes() {
    this._noStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStaticRoutesInput() {
    return this._noStaticRoutes;
  }

  // no_v6_static_routes - computed: false, optional: true, required: false
  private _noV6StaticRoutes?: boolean | cdktf.IResolvable; 
  public get noV6StaticRoutes() {
    return this.getBooleanAttribute('no_v6_static_routes');
  }
  public set noV6StaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noV6StaticRoutes = value;
  }
  public resetNoV6StaticRoutes() {
    this._noV6StaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noV6StaticRoutesInput() {
    return this._noV6StaticRoutes;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new VoltstackSiteCustomNetworkConfigSliConfigStaticRoutesOutputReference(this, "static_routes");
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VoltstackSiteCustomNetworkConfigSliConfigStaticRoutes) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // static_v6_routes - computed: false, optional: true, required: false
  private _staticV6Routes = new VoltstackSiteCustomNetworkConfigSliConfigStaticV6RoutesOutputReference(this, "static_v6_routes");
  public get staticV6Routes() {
    return this._staticV6Routes;
  }
  public putStaticV6Routes(value: VoltstackSiteCustomNetworkConfigSliConfigStaticV6Routes) {
    this._staticV6Routes.internalValue = value;
  }
  public resetStaticV6Routes() {
    this._staticV6Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticV6RoutesInput() {
    return this._staticV6Routes.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSloConfigDcClusterGroupToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference | VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup): any {
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


export function voltstackSiteCustomNetworkConfigSloConfigDcClusterGroupToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference | VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup): any {
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

export class VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterface | cdktf.IResolvable): any {
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


export function voltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterface | cdktf.IResolvable): any {
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

export class VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterface[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceOutputReference {
    return new VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface): any {
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


export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface): any {
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

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface | undefined {
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface | undefined) {
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
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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


export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference {
    return new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface VoltstackSite#interface}
  */
  readonly interface?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    interface: cdktf.listMapper(voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToTerraform, true)(struct!.interface),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node = value.nodeAttribute;
      this._interface.internalValue = value.interface;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference {
    return new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#list VoltstackSite#list}
  */
  readonly list?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructToTerraform, true)(struct!.list),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._list.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: false, optional: true, required: false
  private _list = new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#attrs VoltstackSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#default_gateway VoltstackSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#ip_prefixes VoltstackSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#interface VoltstackSite#interface}
  */
  readonly interface?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface;
  /**
  * node_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#node_interface VoltstackSite#node_interface}
  */
  readonly nodeInterface?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct!.interface),
    node_interface: voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceToTerraform(struct!.nodeInterface),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceList",
    },
    node_interface: {
      value: voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceToHclTerraform(struct!.nodeInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nodeInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeInterface = this._nodeInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
      this._nodeInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
      this._nodeInterface.internalValue = value.nodeInterface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // node_interface - computed: false, optional: true, required: false
  private _nodeInterface = new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference(this, "node_interface");
  public get nodeInterface() {
    return this._nodeInterface;
  }
  public putNodeInterface(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface) {
    this._nodeInterface.internalValue = value;
  }
  public resetNodeInterface() {
    this._nodeInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInterfaceInput() {
    return this._nodeInterface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesOutputReference {
    return new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/voltstack_site#static_routes VoltstackSite#static_routes}
  */
  readonly staticRoutes: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
