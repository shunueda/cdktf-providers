import * as cdktf from 'cdktf';
export interface SecuremeshSiteBlockedServicesBlockedSevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns SecuremeshSite#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_type SecuremeshSite#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ssh SecuremeshSite#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#web_user_interface SecuremeshSite#web_user_interface}
  */
  readonly webUserInterface?: boolean | cdktf.IResolvable;
}

export function securemeshSiteBlockedServicesBlockedSeviceToTerraform(struct?: SecuremeshSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
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


export function securemeshSiteBlockedServicesBlockedSeviceToHclTerraform(struct?: SecuremeshSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
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

export class SecuremeshSiteBlockedServicesBlockedSeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteBlockedServicesBlockedSeviceList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteBlockedServicesBlockedSeviceOutputReference {
    return new SecuremeshSiteBlockedServicesBlockedSeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteBlockedServices {
  /**
  * blocked_sevice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#blocked_sevice SecuremeshSite#blocked_sevice}
  */
  readonly blockedSevice?: SecuremeshSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable;
}

export function securemeshSiteBlockedServicesToTerraform(struct?: SecuremeshSiteBlockedServicesOutputReference | SecuremeshSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_sevice: cdktf.listMapper(securemeshSiteBlockedServicesBlockedSeviceToTerraform, true)(struct!.blockedSevice),
  }
}


export function securemeshSiteBlockedServicesToHclTerraform(struct?: SecuremeshSiteBlockedServicesOutputReference | SecuremeshSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_sevice: {
      value: cdktf.listMapperHcl(securemeshSiteBlockedServicesBlockedSeviceToHclTerraform, true)(struct!.blockedSevice),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteBlockedServicesBlockedSeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteBlockedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteBlockedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedSevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedSevice = this._blockedSevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteBlockedServices | undefined) {
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
  private _blockedSevice = new SecuremeshSiteBlockedServicesBlockedSeviceList(this, "blocked_sevice", false);
  public get blockedSevice() {
    return this._blockedSevice;
  }
  public putBlockedSevice(value: SecuremeshSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable) {
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
export interface SecuremeshSiteBondDeviceListBondDevicesLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#rate SecuremeshSite#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteBondDeviceListBondDevicesLacpToTerraform(struct?: SecuremeshSiteBondDeviceListBondDevicesLacpOutputReference | SecuremeshSiteBondDeviceListBondDevicesLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteBondDeviceListBondDevicesLacpToHclTerraform(struct?: SecuremeshSiteBondDeviceListBondDevicesLacpOutputReference | SecuremeshSiteBondDeviceListBondDevicesLacp): any {
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

export class SecuremeshSiteBondDeviceListBondDevicesLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteBondDeviceListBondDevicesLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteBondDeviceListBondDevicesLacp | undefined) {
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
export interface SecuremeshSiteBondDeviceListBondDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#active_backup SecuremeshSite#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#devices SecuremeshSite#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#link_polling_interval SecuremeshSite#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#link_up_delay SecuremeshSite#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#lacp SecuremeshSite#lacp}
  */
  readonly lacp?: SecuremeshSiteBondDeviceListBondDevicesLacp;
}

export function securemeshSiteBondDeviceListBondDevicesToTerraform(struct?: SecuremeshSiteBondDeviceListBondDevices | cdktf.IResolvable): any {
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
    lacp: securemeshSiteBondDeviceListBondDevicesLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteBondDeviceListBondDevicesToHclTerraform(struct?: SecuremeshSiteBondDeviceListBondDevices | cdktf.IResolvable): any {
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
      value: securemeshSiteBondDeviceListBondDevicesLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteBondDeviceListBondDevicesLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteBondDeviceListBondDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteBondDeviceListBondDevices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteBondDeviceListBondDevices | cdktf.IResolvable | undefined) {
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
  private _lacp = new SecuremeshSiteBondDeviceListBondDevicesLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteBondDeviceListBondDevicesLacp) {
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

export class SecuremeshSiteBondDeviceListBondDevicesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteBondDeviceListBondDevices[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteBondDeviceListBondDevicesOutputReference {
    return new SecuremeshSiteBondDeviceListBondDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteBondDeviceListStruct {
  /**
  * bond_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#bond_devices SecuremeshSite#bond_devices}
  */
  readonly bondDevices: SecuremeshSiteBondDeviceListBondDevices[] | cdktf.IResolvable;
}

export function securemeshSiteBondDeviceListStructToTerraform(struct?: SecuremeshSiteBondDeviceListStructOutputReference | SecuremeshSiteBondDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_devices: cdktf.listMapper(securemeshSiteBondDeviceListBondDevicesToTerraform, true)(struct!.bondDevices),
  }
}


export function securemeshSiteBondDeviceListStructToHclTerraform(struct?: SecuremeshSiteBondDeviceListStructOutputReference | SecuremeshSiteBondDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_devices: {
      value: cdktf.listMapperHcl(securemeshSiteBondDeviceListBondDevicesToHclTerraform, true)(struct!.bondDevices),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteBondDeviceListBondDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteBondDeviceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteBondDeviceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondDevices = this._bondDevices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteBondDeviceListStruct | undefined) {
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
  private _bondDevices = new SecuremeshSiteBondDeviceListBondDevicesList(this, "bond_devices", false);
  public get bondDevices() {
    return this._bondDevices;
  }
  public putBondDevices(value: SecuremeshSiteBondDeviceListBondDevices[] | cdktf.IResolvable) {
    this._bondDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bondDevicesInput() {
    return this._bondDevices.internalValue;
  }
}
export interface SecuremeshSiteCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#latitude SecuremeshSite#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#longitude SecuremeshSite#longitude}
  */
  readonly longitude?: number;
}

export function securemeshSiteCoordinatesToTerraform(struct?: SecuremeshSiteCoordinatesOutputReference | SecuremeshSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function securemeshSiteCoordinatesToHclTerraform(struct?: SecuremeshSiteCoordinatesOutputReference | SecuremeshSiteCoordinates): any {
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

export class SecuremeshSiteCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCoordinates | undefined {
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

  public set internalValue(value: SecuremeshSiteCoordinates | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#enhanced_firewall_policies SecuremeshSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference | SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(securemeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function securemeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference | SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPolicies | undefined) {
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
  private _enhancedFirewallPolicies = new SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#forward_proxy_policies SecuremeshSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigActiveForwardProxyPoliciesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference | SecuremeshSiteCustomNetworkConfigActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(securemeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function securemeshSiteCustomNetworkConfigActiveForwardProxyPoliciesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference | SecuremeshSiteCustomNetworkConfigActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPolicies | undefined) {
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
  private _forwardProxyPolicies = new SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_policies SecuremeshSite#network_policies}
  */
  readonly networkPolicies: SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigActiveNetworkPoliciesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference | SecuremeshSiteCustomNetworkConfigActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(securemeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function securemeshSiteCustomNetworkConfigActiveNetworkPoliciesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference | SecuremeshSiteCustomNetworkConfigActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigActiveNetworkPolicies | undefined) {
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
  private _networkPolicies = new SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#hash_algorithms SecuremeshSite#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling {
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#decryption_provider SecuremeshSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#location SecuremeshSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#store_provider SecuremeshSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#decryption_provider SecuremeshSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#location SecuremeshSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#store_provider SecuremeshSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#provider SecuremeshSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#url SecuremeshSite#url}
  */
  readonly url: string;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#key SecuremeshSite#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#location SecuremeshSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#provider SecuremeshSite#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#secret_encoding SecuremeshSite#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#version SecuremeshSite#version}
  */
  readonly version?: number;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
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


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name: string;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#secret_encoding_type SecuremeshSite#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#blindfold_secret_info SecuremeshSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#blindfold_secret_info_internal SecuremeshSite#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#clear_secret_info SecuremeshSite#clear_secret_info}
  */
  readonly clearSecretInfo?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#vault_secret_info SecuremeshSite#vault_secret_info}
  */
  readonly vaultSecretInfo?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#wingman_secret_info SecuremeshSite#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
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
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults {
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#certificate_url SecuremeshSite#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#description SecuremeshSite#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#custom_hash_algorithms SecuremeshSite#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#disable_ocsp_stapling SecuremeshSite#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#private_key SecuremeshSite#private_key}
  */
  readonly privateKey: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#use_system_defaults SecuremeshSite#use_system_defaults}
  */
  readonly useSystemDefaults?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
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
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingList",
    },
    private_key: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyList",
    },
    use_system_defaults: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined) {
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
  private _customHashAlgorithms = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms) {
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
  private _disableOcspStapling = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling) {
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
  private _privateKey = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#exact_value SecuremeshSite#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#regex_value SecuremeshSite#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#suffix_value SecuremeshSite#suffix_value}
  */
  readonly suffixValue?: string;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
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


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#disable_interception SecuremeshSite#disable_interception}
  */
  readonly disableInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#enable_interception SecuremeshSite#enable_interception}
  */
  readonly enableInterception?: boolean | cdktf.IResolvable;
  /**
  * domain_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#domain_match SecuremeshSite#domain_match}
  */
  readonly domainMatch: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_interception: cdktf.booleanToTerraform(struct!.disableInterception),
    enable_interception: cdktf.booleanToTerraform(struct!.enableInterception),
    domain_match: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct!.domainMatch),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct!.domainMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined) {
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
  private _domainMatch = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference(this, "domain_match");
  public get domainMatch() {
    return this._domainMatch;
  }
  public putDomainMatch(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch) {
    this._domainMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchInput() {
    return this._domainMatch.internalValue;
  }
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference {
    return new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy {
  /**
  * interception_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interception_rules SecuremeshSite#interception_rules}
  */
  readonly interceptionRules: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interception_rules: cdktf.listMapper(securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform, true)(struct!.interceptionRules),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interception_rules: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform, true)(struct!.interceptionRules),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptionRules = this._interceptionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined) {
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
  private _interceptionRules = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList(this, "interception_rules", false);
  public get interceptionRules() {
    return this._interceptionRules;
  }
  public putInterceptionRules(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable) {
    this._interceptionRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionRulesInput() {
    return this._interceptionRules.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#enable_for_all_domains SecuremeshSite#enable_for_all_domains}
  */
  readonly enableForAllDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#trusted_ca_url SecuremeshSite#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#volterra_certificate SecuremeshSite#volterra_certificate}
  */
  readonly volterraCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#volterra_trusted_ca SecuremeshSite#volterra_trusted_ca}
  */
  readonly volterraTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * custom_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#custom_certificate SecuremeshSite#custom_certificate}
  */
  readonly customCertificate?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#policy SecuremeshSite#policy}
  */
  readonly policy?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_for_all_domains: cdktf.booleanToTerraform(struct!.enableForAllDomains),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    volterra_certificate: cdktf.booleanToTerraform(struct!.volterraCertificate),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    custom_certificate: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct!.customCertificate),
    policy: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct!.policy),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
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
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct!.customCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateList",
    },
    policy: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined) {
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
  private _customCertificate = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference(this, "custom_certificate");
  public get customCertificate() {
    return this._customCertificate;
  }
  public putCustomCertificate(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate) {
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
  private _policy = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#connection_timeout SecuremeshSite#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#max_connect_attempts SecuremeshSite#max_connect_attempts}
  */
  readonly maxConnectAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_interception SecuremeshSite#no_interception}
  */
  readonly noInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#white_listed_ports SecuremeshSite#white_listed_ports}
  */
  readonly whiteListedPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#white_listed_prefixes SecuremeshSite#white_listed_prefixes}
  */
  readonly whiteListedPrefixes?: string[];
  /**
  * tls_intercept block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tls_intercept SecuremeshSite#tls_intercept}
  */
  readonly tlsIntercept?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
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
    tls_intercept: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct!.tlsIntercept),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
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
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct!.tlsIntercept),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined) {
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
  private _tlsIntercept = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference(this, "tls_intercept");
  public get tlsIntercept() {
    return this._tlsIntercept;
  }
  public putTlsIntercept(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#global_vn SecuremeshSite#global_vn}
  */
  readonly globalVn: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined) {
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
  private _globalVn = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#global_vn SecuremeshSite#global_vn}
  */
  readonly globalVn: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined) {
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
  private _globalVn = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#disable_forward_proxy SecuremeshSite#disable_forward_proxy}
  */
  readonly disableForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * enable_forward_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#enable_forward_proxy SecuremeshSite#enable_forward_proxy}
  */
  readonly enableForwardProxy?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy;
  /**
  * sli_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#sli_to_global_dr SecuremeshSite#sli_to_global_dr}
  */
  readonly sliToGlobalDr?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr;
  /**
  * slo_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#slo_to_global_dr SecuremeshSite#slo_to_global_dr}
  */
  readonly sloToGlobalDr?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_forward_proxy: cdktf.booleanToTerraform(struct!.disableForwardProxy),
    enable_forward_proxy: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct!.enableForwardProxy),
    sli_to_global_dr: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct!.sliToGlobalDr),
    slo_to_global_dr: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct!.sloToGlobalDr),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct!.enableForwardProxy),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyList",
    },
    sli_to_global_dr: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct!.sliToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrList",
    },
    slo_to_global_dr: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct!.sloToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined) {
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
  private _enableForwardProxy = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference(this, "enable_forward_proxy");
  public get enableForwardProxy() {
    return this._enableForwardProxy;
  }
  public putEnableForwardProxy(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy) {
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
  private _sliToGlobalDr = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference(this, "sli_to_global_dr");
  public get sliToGlobalDr() {
    return this._sliToGlobalDr;
  }
  public putSliToGlobalDr(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr) {
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
  private _sloToGlobalDr = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference(this, "slo_to_global_dr");
  public get sloToGlobalDr() {
    return this._sloToGlobalDr;
  }
  public putSloToGlobalDr(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr) {
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

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference {
    return new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigGlobalNetworkListStruct {
  /**
  * global_network_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#global_network_connections SecuremeshSite#global_network_connections}
  */
  readonly globalNetworkConnections: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigGlobalNetworkListStructToTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListStructOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_network_connections: cdktf.listMapper(securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToTerraform, true)(struct!.globalNetworkConnections),
  }
}


export function securemeshSiteCustomNetworkConfigGlobalNetworkListStructToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListStructOutputReference | SecuremeshSiteCustomNetworkConfigGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_network_connections: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToHclTerraform, true)(struct!.globalNetworkConnections),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigGlobalNetworkListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigGlobalNetworkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalNetworkConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkConnections = this._globalNetworkConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListStruct | undefined) {
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
  private _globalNetworkConnections = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsList(this, "global_network_connections", false);
  public get globalNetworkConnections() {
    return this._globalNetworkConnections;
  }
  public putGlobalNetworkConnections(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable) {
    this._globalNetworkConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkConnectionsInput() {
    return this._globalNetworkConnections.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor {
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#cluster SecuremeshSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#device SecuremeshSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#is_primary SecuremeshSite#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#monitor_disabled SecuremeshSite#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#mtu SecuremeshSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node SecuremeshSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#not_primary SecuremeshSite#not_primary}
  */
  readonly notPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#priority SecuremeshSite#priority}
  */
  readonly priority?: number;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#monitor SecuremeshSite#monitor}
  */
  readonly monitor?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface): any {
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
    monitor: securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToTerraform(struct!.monitor),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface | undefined) {
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
  private _monitor = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#cluster SecuremeshSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#device SecuremeshSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#mtu SecuremeshSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node SecuremeshSite#node}
  */
  readonly nodeAttribute?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#end_ip SecuremeshSite#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#exclude SecuremeshSite#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#start_ip SecuremeshSite#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dgw_address SecuremeshSite#dgw_address}
  */
  readonly dgwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_address SecuremeshSite#dns_address}
  */
  readonly dnsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#first_address SecuremeshSite#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#last_address SecuremeshSite#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix SecuremeshSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#pool_settings SecuremeshSite#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#same_as_dgw SecuremeshSite#same_as_dgw}
  */
  readonly sameAsDgw?: boolean | cdktf.IResolvable;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix_allocator SecuremeshSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#pools SecuremeshSite#pools}
  */
  readonly pools?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
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
    network_prefix_allocator: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined) {
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
  private _networkPrefixAllocator = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator) {
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
  private _pools = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable) {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksOutputReference {
    return new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#automatic_from_end SecuremeshSite#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#automatic_from_start SecuremeshSite#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dhcp_option82_tag SecuremeshSite#dhcp_option82_tag}
  */
  readonly dhcpOption82Tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#fixed_ip_map SecuremeshSite#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dhcp_networks SecuremeshSite#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    dhcp_option82_tag: cdktf.stringToTerraform(struct!.dhcpOption82Tag),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer): any {
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
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer | undefined) {
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
  private _dhcpNetworks = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_list SecuremeshSite#dns_list}
  */
  readonly dnsList: string[];
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#configured_address SecuremeshSite#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#first_address SecuremeshSite#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#last_address SecuremeshSite#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#configured_list SecuremeshSite#configured_list}
  */
  readonly configuredList?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#local_dns SecuremeshSite#local_dns}
  */
  readonly localDns?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig | undefined) {
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
  private _configuredList = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
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
  private _localDns = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#end_ip SecuremeshSite#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#exclude SecuremeshSite#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#start_ip SecuremeshSite#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix SecuremeshSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#pool_settings SecuremeshSite#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix_allocator SecuremeshSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#pools SecuremeshSite#pools}
  */
  readonly pools?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    network_prefix_allocator: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
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
  private _networkPrefixAllocator = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator) {
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
  private _pools = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#automatic_from_end SecuremeshSite#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#automatic_from_start SecuremeshSite#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#fixed_ip_map SecuremeshSite#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dhcp_networks SecuremeshSite#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful): any {
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
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful | undefined) {
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
  private _dhcpNetworks = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix SecuremeshSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_config SecuremeshSite#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#stateful SecuremeshSite#stateful}
  */
  readonly stateful?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter | undefined) {
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
  private _dnsConfig = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig) {
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
  private _stateful = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#host SecuremeshSite#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#router SecuremeshSite#router}
  */
  readonly router?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig | undefined) {
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
  private _router = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor {
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#value SecuremeshSite#value}
  */
  readonly value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined) {
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
  private _value = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp | undefined) {
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
  private _interfaceIpMap = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix_allocator SecuremeshSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp | undefined) {
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
  private _networkPrefixAllocator = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#cluster_static_ip SecuremeshSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#fleet_static_ip SecuremeshSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node_static_ip SecuremeshSite#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpList",
    },
    fleet_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp | undefined) {
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
  private _clusterStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp) {
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
  private _fleetStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpFleetStaticIp) {
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
  private _nodeStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#value SecuremeshSite#value}
  */
  readonly value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
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
  private _value = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp | undefined) {
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
  private _interfaceIpMap = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix_allocator SecuremeshSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp | undefined) {
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
  private _networkPrefixAllocator = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#cluster_static_ip SecuremeshSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#fleet_static_ip SecuremeshSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node_static_ip SecuremeshSite#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpList",
    },
    fleet_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address | undefined) {
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
  private _clusterStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp) {
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
  private _fleetStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressFleetStaticIp) {
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
  private _nodeStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#cluster SecuremeshSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#device SecuremeshSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dhcp_client SecuremeshSite#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_fabric_network SecuremeshSite#ip_fabric_network}
  */
  readonly ipFabricNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#is_primary SecuremeshSite#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#monitor_disabled SecuremeshSite#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#mtu SecuremeshSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_ipv6_address SecuremeshSite#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node SecuremeshSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#not_primary SecuremeshSite#not_primary}
  */
  readonly notPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#priority SecuremeshSite#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#site_local_inside_network SecuremeshSite#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#site_local_network SecuremeshSite#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#storage_network SecuremeshSite#storage_network}
  */
  readonly storageNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#untagged SecuremeshSite#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#vlan_id SecuremeshSite#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dhcp_server SecuremeshSite#dhcp_server}
  */
  readonly dhcpServer?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer;
  /**
  * inside_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#inside_network SecuremeshSite#inside_network}
  */
  readonly insideNetwork?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ipv6_auto_config SecuremeshSite#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#monitor SecuremeshSite#monitor}
  */
  readonly monitor?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#segment_network SecuremeshSite#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork;
  /**
  * srv6_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#srv6_network SecuremeshSite#srv6_network}
  */
  readonly srv6Network?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_ip SecuremeshSite#static_ip}
  */
  readonly staticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_ipv6_address SecuremeshSite#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface): any {
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
    dhcp_server: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToTerraform(struct!.dhcpServer),
    inside_network: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkToTerraform(struct!.insideNetwork),
    ipv6_auto_config: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToTerraform(struct!.monitor),
    segment_network: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToTerraform(struct!.segmentNetwork),
    srv6_network: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkToTerraform(struct!.srv6Network),
    static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerList",
    },
    inside_network: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkToHclTerraform(struct!.insideNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkList",
    },
    ipv6_auto_config: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigList",
    },
    monitor: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorList",
    },
    segment_network: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkList",
    },
    srv6_network: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkToHclTerraform(struct!.srv6Network),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkList",
    },
    static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface | undefined) {
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
  private _dhcpServer = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer) {
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
  private _insideNetwork = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetworkOutputReference(this, "inside_network");
  public get insideNetwork() {
    return this._insideNetwork;
  }
  public putInsideNetwork(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceInsideNetwork) {
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
  private _ipv6AutoConfig = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig) {
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
  private _monitor = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor) {
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
  private _segmentNetwork = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork) {
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
  private _srv6Network = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6NetworkOutputReference(this, "srv6_network");
  public get srv6Network() {
    return this._srv6Network;
  }
  public putSrv6Network(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSrv6Network) {
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
  private _staticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp) {
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
  private _staticIpv6Address = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#end_ip SecuremeshSite#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#exclude SecuremeshSite#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#start_ip SecuremeshSite#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dgw_address SecuremeshSite#dgw_address}
  */
  readonly dgwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_address SecuremeshSite#dns_address}
  */
  readonly dnsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#first_address SecuremeshSite#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#last_address SecuremeshSite#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix SecuremeshSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#pool_settings SecuremeshSite#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#same_as_dgw SecuremeshSite#same_as_dgw}
  */
  readonly sameAsDgw?: boolean | cdktf.IResolvable;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix_allocator SecuremeshSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#pools SecuremeshSite#pools}
  */
  readonly pools?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
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
    network_prefix_allocator: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined) {
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
  private _networkPrefixAllocator = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksNetworkPrefixAllocator) {
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
  private _pools = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable) {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksOutputReference {
    return new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#automatic_from_end SecuremeshSite#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#automatic_from_start SecuremeshSite#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dhcp_option82_tag SecuremeshSite#dhcp_option82_tag}
  */
  readonly dhcpOption82Tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#fixed_ip_map SecuremeshSite#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dhcp_networks SecuremeshSite#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    dhcp_option82_tag: cdktf.stringToTerraform(struct!.dhcpOption82Tag),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer): any {
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
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer | undefined) {
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
  private _dhcpNetworks = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerInterfaceIpMap) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#value SecuremeshSite#value}
  */
  readonly value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined) {
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
  private _value = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp | undefined) {
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
  private _interfaceIpMap = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpInterfaceIpMap) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix_allocator SecuremeshSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp | undefined) {
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
  private _networkPrefixAllocator = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpNetworkPrefixAllocator) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#cluster_static_ip SecuremeshSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#fleet_static_ip SecuremeshSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node_static_ip SecuremeshSite#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpList",
    },
    fleet_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp | undefined) {
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
  private _clusterStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpClusterStaticIp) {
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
  private _fleetStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpFleetStaticIp) {
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
  private _nodeStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpNodeStaticIp) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#value SecuremeshSite#value}
  */
  readonly value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
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
  private _value = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_ip_map SecuremeshSite#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp | undefined) {
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
  private _interfaceIpMap = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#network_prefix_allocator SecuremeshSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp | undefined) {
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
  private _networkPrefixAllocator = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gw SecuremeshSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dns_server SecuremeshSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp): any {
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


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp): any {
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

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#cluster_static_ip SecuremeshSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#fleet_static_ip SecuremeshSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node_static_ip SecuremeshSite#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpList",
    },
    fleet_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address | undefined) {
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
  private _clusterStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressClusterStaticIp) {
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
  private _fleetStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressFleetStaticIp) {
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
  private _nodeStaticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressNodeStaticIp) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#cluster SecuremeshSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#device SecuremeshSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dhcp_client SecuremeshSite#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_fabric_network SecuremeshSite#ip_fabric_network}
  */
  readonly ipFabricNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#mtu SecuremeshSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_ipv6_address SecuremeshSite#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node SecuremeshSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#site_local_inside_network SecuremeshSite#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#site_local_network SecuremeshSite#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dhcp_server SecuremeshSite#dhcp_server}
  */
  readonly dhcpServer?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_ip SecuremeshSite#static_ip}
  */
  readonly staticIp?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_ipv6_address SecuremeshSite#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface): any {
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
    dhcp_server: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerToTerraform(struct!.dhcpServer),
    static_ip: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerList",
    },
    static_ip: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface | undefined) {
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
  private _dhcpServer = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceDhcpServer) {
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
  private _staticIp = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIp) {
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
  private _staticIpv6Address = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceStaticIpv6Address) {
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
export interface SecuremeshSiteCustomNetworkConfigInterfaceListInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dc_cluster_group_connectivity_interface_disabled SecuremeshSite#dc_cluster_group_connectivity_interface_disabled}
  */
  readonly dcClusterGroupConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dc_cluster_group_connectivity_interface_enabled SecuremeshSite#dc_cluster_group_connectivity_interface_enabled}
  */
  readonly dcClusterGroupConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#description SecuremeshSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#labels SecuremeshSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * dedicated_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dedicated_interface SecuremeshSite#dedicated_interface}
  */
  readonly dedicatedInterface?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface;
  /**
  * dedicated_management_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dedicated_management_interface SecuremeshSite#dedicated_management_interface}
  */
  readonly dedicatedManagementInterface?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ethernet_interface SecuremeshSite#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface;
  /**
  * loopback_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#loopback_interface SecuremeshSite#loopback_interface}
  */
  readonly loopbackInterface?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface;
}

export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dc_cluster_group_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.dcClusterGroupConnectivityInterfaceDisabled),
    dc_cluster_group_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.dcClusterGroupConnectivityInterfaceEnabled),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    dedicated_interface: securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToTerraform(struct!.dedicatedInterface),
    dedicated_management_interface: securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToTerraform(struct!.dedicatedManagementInterface),
    ethernet_interface: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToTerraform(struct!.ethernetInterface),
    loopback_interface: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceToTerraform(struct!.loopbackInterface),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListInterfacesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToHclTerraform(struct!.dedicatedInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceList",
    },
    dedicated_management_interface: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToHclTerraform(struct!.dedicatedManagementInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceList",
    },
    ethernet_interface: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceList",
    },
    loopback_interface: {
      value: securemeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceToHclTerraform(struct!.loopbackInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable | undefined) {
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
  private _dedicatedInterface = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference(this, "dedicated_interface");
  public get dedicatedInterface() {
    return this._dedicatedInterface;
  }
  public putDedicatedInterface(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface) {
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
  private _dedicatedManagementInterface = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference(this, "dedicated_management_interface");
  public get dedicatedManagementInterface() {
    return this._dedicatedManagementInterface;
  }
  public putDedicatedManagementInterface(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface) {
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
  private _ethernetInterface = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface) {
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
  private _loopbackInterface = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterfaceOutputReference(this, "loopback_interface");
  public get loopbackInterface() {
    return this._loopbackInterface;
  }
  public putLoopbackInterface(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesLoopbackInterface) {
    this._loopbackInterface.internalValue = value;
  }
  public resetLoopbackInterface() {
    this._loopbackInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInterfaceInput() {
    return this._loopbackInterface.internalValue;
  }
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigInterfaceListInterfaces[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesOutputReference {
    return new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigInterfaceListStruct {
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interfaces SecuremeshSite#interfaces}
  */
  readonly interfaces: SecuremeshSiteCustomNetworkConfigInterfaceListInterfaces[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigInterfaceListStructToTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListStructOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(securemeshSiteCustomNetworkConfigInterfaceListInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function securemeshSiteCustomNetworkConfigInterfaceListStructToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigInterfaceListStructOutputReference | SecuremeshSiteCustomNetworkConfigInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigInterfaceListInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigInterfaceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigInterfaceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigInterfaceListStruct | undefined) {
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
  private _interfaces = new SecuremeshSiteCustomNetworkConfigInterfaceListInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: SecuremeshSiteCustomNetworkConfigInterfaceListInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSliConfigDcClusterGroupToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroup): any {
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


export function securemeshSiteCustomNetworkConfigSliConfigDcClusterGroupToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroup): any {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroup | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroup | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterface | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterface | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterface | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterface[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface): any {
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


export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface): any {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node SecuremeshSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface SecuremeshSite#interface}
  */
  readonly interface?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    interface: cdktf.listMapper(securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToTerraform, true)(struct!.interface),
  }
}


export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined) {
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
  private _interface = new SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable) {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#list SecuremeshSite#list}
  */
  readonly list?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructToTerraform, true)(struct!.list),
  }
}


export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface | undefined) {
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
  private _list = new SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable) {
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
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#attrs SecuremeshSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gateway SecuremeshSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_prefixes SecuremeshSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface SecuremeshSite#interface}
  */
  readonly interface?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface;
  /**
  * node_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node_interface SecuremeshSite#node_interface}
  */
  readonly nodeInterface?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct!.interface),
    node_interface: securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceToTerraform(struct!.nodeInterface),
  }
}


export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceList",
    },
    node_interface: {
      value: securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceToHclTerraform(struct!.nodeInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined) {
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
  private _interface = new SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesInterface) {
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
  private _nodeInterface = new SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference(this, "node_interface");
  public get nodeInterface() {
    return this._nodeInterface;
  }
  public putNodeInterface(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesNodeInterface) {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_routes SecuremeshSite#static_routes}
  */
  readonly staticRoutes: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function securemeshSiteCustomNetworkConfigSliConfigStaticRoutesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutes | undefined) {
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
  private _staticRoutes = new SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface): any {
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


export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface): any {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node SecuremeshSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface SecuremeshSite#interface}
  */
  readonly interface?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    interface: cdktf.listMapper(securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToTerraform, true)(struct!.interface),
  }
}


export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined) {
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
  private _interface = new SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable) {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#list SecuremeshSite#list}
  */
  readonly list?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToTerraform, true)(struct!.list),
  }
}


export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface | undefined) {
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
  private _list = new SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable) {
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
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#attrs SecuremeshSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gateway SecuremeshSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_prefixes SecuremeshSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface SecuremeshSite#interface}
  */
  readonly interface?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface;
  /**
  * node_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node_interface SecuremeshSite#node_interface}
  */
  readonly nodeInterface?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct!.interface),
    node_interface: securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceToTerraform(struct!.nodeInterface),
  }
}


export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceList",
    },
    node_interface: {
      value: securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceToHclTerraform(struct!.nodeInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined) {
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
  private _interface = new SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesInterface) {
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
  private _nodeInterface = new SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference(this, "node_interface");
  public get nodeInterface() {
    return this._nodeInterface;
  }
  public putNodeInterface(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesNodeInterface) {
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

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfigStaticV6Routes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_routes SecuremeshSite#static_routes}
  */
  readonly staticRoutes: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesOutputReference | SecuremeshSiteCustomNetworkConfigSliConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfigStaticV6Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6Routes | undefined) {
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
  private _staticRoutes = new SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigSliConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#labels SecuremeshSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#nameserver SecuremeshSite#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#nameserver_v6 SecuremeshSite#nameserver_v6}
  */
  readonly nameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_dc_cluster_group SecuremeshSite#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_static_routes SecuremeshSite#no_static_routes}
  */
  readonly noStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_v6_static_routes SecuremeshSite#no_v6_static_routes}
  */
  readonly noV6StaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#vip SecuremeshSite#vip}
  */
  readonly vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#vip_v6 SecuremeshSite#vip_v6}
  */
  readonly vipV6?: string;
  /**
  * dc_cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dc_cluster_group SecuremeshSite#dc_cluster_group}
  */
  readonly dcClusterGroup?: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroup;
  /**
  * dc_cluster_group_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dc_cluster_group_interface SecuremeshSite#dc_cluster_group_interface}
  */
  readonly dcClusterGroupInterface?: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterface[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_routes SecuremeshSite#static_routes}
  */
  readonly staticRoutes?: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutes;
  /**
  * static_v6_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_v6_routes SecuremeshSite#static_v6_routes}
  */
  readonly staticV6Routes?: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6Routes;
}

export function securemeshSiteCustomNetworkConfigSliConfigToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigOutputReference | SecuremeshSiteCustomNetworkConfigSliConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nameserver: cdktf.stringToTerraform(struct!.nameserver),
    nameserver_v6: cdktf.stringToTerraform(struct!.nameserverV6),
    no_dc_cluster_group: cdktf.booleanToTerraform(struct!.noDcClusterGroup),
    no_static_routes: cdktf.booleanToTerraform(struct!.noStaticRoutes),
    no_v6_static_routes: cdktf.booleanToTerraform(struct!.noV6StaticRoutes),
    vip: cdktf.stringToTerraform(struct!.vip),
    vip_v6: cdktf.stringToTerraform(struct!.vipV6),
    dc_cluster_group: securemeshSiteCustomNetworkConfigSliConfigDcClusterGroupToTerraform(struct!.dcClusterGroup),
    dc_cluster_group_interface: cdktf.listMapper(securemeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceToTerraform, true)(struct!.dcClusterGroupInterface),
    static_routes: securemeshSiteCustomNetworkConfigSliConfigStaticRoutesToTerraform(struct!.staticRoutes),
    static_v6_routes: securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesToTerraform(struct!.staticV6Routes),
  }
}


export function securemeshSiteCustomNetworkConfigSliConfigToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSliConfigOutputReference | SecuremeshSiteCustomNetworkConfigSliConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nameserver: {
      value: cdktf.stringToHclTerraform(struct!.nameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.nameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_dc_cluster_group: {
      value: cdktf.booleanToHclTerraform(struct!.noDcClusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_v6: {
      value: cdktf.stringToHclTerraform(struct!.vipV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dc_cluster_group: {
      value: securemeshSiteCustomNetworkConfigSliConfigDcClusterGroupToHclTerraform(struct!.dcClusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupList",
    },
    dc_cluster_group_interface: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceToHclTerraform, true)(struct!.dcClusterGroupInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceList",
    },
    static_routes: {
      value: securemeshSiteCustomNetworkConfigSliConfigStaticRoutesToHclTerraform(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesList",
    },
    static_v6_routes: {
      value: securemeshSiteCustomNetworkConfigSliConfigStaticV6RoutesToHclTerraform(struct!.staticV6Routes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSliConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSliConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserver = this._nameserver;
    }
    if (this._nameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserverV6 = this._nameserverV6;
    }
    if (this._noDcClusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDcClusterGroup = this._noDcClusterGroup;
    }
    if (this._noStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStaticRoutes = this._noStaticRoutes;
    }
    if (this._noV6StaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noV6StaticRoutes = this._noV6StaticRoutes;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    if (this._vipV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipV6 = this._vipV6;
    }
    if (this._dcClusterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroup = this._dcClusterGroup?.internalValue;
    }
    if (this._dcClusterGroupInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupInterface = this._dcClusterGroupInterface?.internalValue;
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSliConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._nameserver = undefined;
      this._nameserverV6 = undefined;
      this._noDcClusterGroup = undefined;
      this._noStaticRoutes = undefined;
      this._noV6StaticRoutes = undefined;
      this._vip = undefined;
      this._vipV6 = undefined;
      this._dcClusterGroup.internalValue = undefined;
      this._dcClusterGroupInterface.internalValue = undefined;
      this._staticRoutes.internalValue = undefined;
      this._staticV6Routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._nameserver = value.nameserver;
      this._nameserverV6 = value.nameserverV6;
      this._noDcClusterGroup = value.noDcClusterGroup;
      this._noStaticRoutes = value.noStaticRoutes;
      this._noV6StaticRoutes = value.noV6StaticRoutes;
      this._vip = value.vip;
      this._vipV6 = value.vipV6;
      this._dcClusterGroup.internalValue = value.dcClusterGroup;
      this._dcClusterGroupInterface.internalValue = value.dcClusterGroupInterface;
      this._staticRoutes.internalValue = value.staticRoutes;
      this._staticV6Routes.internalValue = value.staticV6Routes;
    }
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

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // nameserver_v6 - computed: false, optional: true, required: false
  private _nameserverV6?: string; 
  public get nameserverV6() {
    return this.getStringAttribute('nameserver_v6');
  }
  public set nameserverV6(value: string) {
    this._nameserverV6 = value;
  }
  public resetNameserverV6() {
    this._nameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverV6Input() {
    return this._nameserverV6;
  }

  // no_dc_cluster_group - computed: false, optional: true, required: false
  private _noDcClusterGroup?: boolean | cdktf.IResolvable; 
  public get noDcClusterGroup() {
    return this.getBooleanAttribute('no_dc_cluster_group');
  }
  public set noDcClusterGroup(value: boolean | cdktf.IResolvable) {
    this._noDcClusterGroup = value;
  }
  public resetNoDcClusterGroup() {
    this._noDcClusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDcClusterGroupInput() {
    return this._noDcClusterGroup;
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

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_v6 - computed: false, optional: true, required: false
  private _vipV6?: string; 
  public get vipV6() {
    return this.getStringAttribute('vip_v6');
  }
  public set vipV6(value: string) {
    this._vipV6 = value;
  }
  public resetVipV6() {
    this._vipV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipV6Input() {
    return this._vipV6;
  }

  // dc_cluster_group - computed: false, optional: true, required: false
  private _dcClusterGroup = new SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupOutputReference(this, "dc_cluster_group");
  public get dcClusterGroup() {
    return this._dcClusterGroup;
  }
  public putDcClusterGroup(value: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroup) {
    this._dcClusterGroup.internalValue = value;
  }
  public resetDcClusterGroup() {
    this._dcClusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInput() {
    return this._dcClusterGroup.internalValue;
  }

  // dc_cluster_group_interface - computed: false, optional: true, required: false
  private _dcClusterGroupInterface = new SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterfaceList(this, "dc_cluster_group_interface", false);
  public get dcClusterGroupInterface() {
    return this._dcClusterGroupInterface;
  }
  public putDcClusterGroupInterface(value: SecuremeshSiteCustomNetworkConfigSliConfigDcClusterGroupInterface[] | cdktf.IResolvable) {
    this._dcClusterGroupInterface.internalValue = value;
  }
  public resetDcClusterGroupInterface() {
    this._dcClusterGroupInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInterfaceInput() {
    return this._dcClusterGroupInterface.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutesOutputReference(this, "static_routes");
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticRoutes) {
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
  private _staticV6Routes = new SecuremeshSiteCustomNetworkConfigSliConfigStaticV6RoutesOutputReference(this, "static_v6_routes");
  public get staticV6Routes() {
    return this._staticV6Routes;
  }
  public putStaticV6Routes(value: SecuremeshSiteCustomNetworkConfigSliConfigStaticV6Routes) {
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
export interface SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSloConfigDcClusterGroupToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroup): any {
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


export function securemeshSiteCustomNetworkConfigSloConfigDcClusterGroupToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroup): any {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroup | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroup | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterface | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterface | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterface | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterface[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface): any {
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


export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface): any {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node SecuremeshSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface SecuremeshSite#interface}
  */
  readonly interface?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    interface: cdktf.listMapper(securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToTerraform, true)(struct!.interface),
  }
}


export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined) {
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
  private _interface = new SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable) {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#list SecuremeshSite#list}
  */
  readonly list?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructToTerraform, true)(struct!.list),
  }
}


export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface | undefined) {
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
  private _list = new SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable) {
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
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#attrs SecuremeshSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gateway SecuremeshSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_prefixes SecuremeshSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface SecuremeshSite#interface}
  */
  readonly interface?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface;
  /**
  * node_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node_interface SecuremeshSite#node_interface}
  */
  readonly nodeInterface?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct!.interface),
    node_interface: securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceToTerraform(struct!.nodeInterface),
  }
}


export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceList",
    },
    node_interface: {
      value: securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceToHclTerraform(struct!.nodeInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined) {
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
  private _interface = new SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface) {
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
  private _nodeInterface = new SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterfaceOutputReference(this, "node_interface");
  public get nodeInterface() {
    return this._nodeInterface;
  }
  public putNodeInterface(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesNodeInterface) {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_routes SecuremeshSite#static_routes}
  */
  readonly staticRoutes: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function securemeshSiteCustomNetworkConfigSloConfigStaticRoutesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutes | undefined) {
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
  private _staticRoutes = new SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface): any {
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


export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface): any {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface | undefined) {
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
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tenant SecuremeshSite#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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


export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node SecuremeshSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface SecuremeshSite#interface}
  */
  readonly interface?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    interface: cdktf.listMapper(securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToTerraform, true)(struct!.interface),
  }
}


export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined) {
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
  private _interface = new SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable) {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterface {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#list SecuremeshSite#list}
  */
  readonly list?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToTerraform, true)(struct!.list),
  }
}


export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterface | undefined) {
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
  private _list = new SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable) {
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
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#attrs SecuremeshSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_gateway SecuremeshSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_address SecuremeshSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#ip_prefixes SecuremeshSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface SecuremeshSite#interface}
  */
  readonly interface?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface;
  /**
  * node_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#node_interface SecuremeshSite#node_interface}
  */
  readonly nodeInterface?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterface;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct!.interface),
    node_interface: securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceToTerraform(struct!.nodeInterface),
  }
}


export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
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
      value: securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceList",
    },
    node_interface: {
      value: securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceToHclTerraform(struct!.nodeInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined) {
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
  private _interface = new SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface) {
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
  private _nodeInterface = new SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterfaceOutputReference(this, "node_interface");
  public get nodeInterface() {
    return this._nodeInterface;
  }
  public putNodeInterface(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesNodeInterface) {
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

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesOutputReference {
    return new SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteCustomNetworkConfigSloConfigStaticV6Routes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_routes SecuremeshSite#static_routes}
  */
  readonly staticRoutes: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable;
}

export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesOutputReference | SecuremeshSiteCustomNetworkConfigSloConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfigStaticV6Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6Routes | undefined) {
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
  private _staticRoutes = new SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface SecuremeshSiteCustomNetworkConfigSloConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#labels SecuremeshSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#nameserver SecuremeshSite#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#nameserver_v6 SecuremeshSite#nameserver_v6}
  */
  readonly nameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_dc_cluster_group SecuremeshSite#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_static_routes SecuremeshSite#no_static_routes}
  */
  readonly noStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_v6_static_routes SecuremeshSite#no_v6_static_routes}
  */
  readonly noV6StaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#vip SecuremeshSite#vip}
  */
  readonly vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#vip_v6 SecuremeshSite#vip_v6}
  */
  readonly vipV6?: string;
  /**
  * dc_cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dc_cluster_group SecuremeshSite#dc_cluster_group}
  */
  readonly dcClusterGroup?: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroup;
  /**
  * dc_cluster_group_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#dc_cluster_group_interface SecuremeshSite#dc_cluster_group_interface}
  */
  readonly dcClusterGroupInterface?: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterface[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_routes SecuremeshSite#static_routes}
  */
  readonly staticRoutes?: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutes;
  /**
  * static_v6_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#static_v6_routes SecuremeshSite#static_v6_routes}
  */
  readonly staticV6Routes?: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6Routes;
}

export function securemeshSiteCustomNetworkConfigSloConfigToTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigOutputReference | SecuremeshSiteCustomNetworkConfigSloConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nameserver: cdktf.stringToTerraform(struct!.nameserver),
    nameserver_v6: cdktf.stringToTerraform(struct!.nameserverV6),
    no_dc_cluster_group: cdktf.booleanToTerraform(struct!.noDcClusterGroup),
    no_static_routes: cdktf.booleanToTerraform(struct!.noStaticRoutes),
    no_v6_static_routes: cdktf.booleanToTerraform(struct!.noV6StaticRoutes),
    vip: cdktf.stringToTerraform(struct!.vip),
    vip_v6: cdktf.stringToTerraform(struct!.vipV6),
    dc_cluster_group: securemeshSiteCustomNetworkConfigSloConfigDcClusterGroupToTerraform(struct!.dcClusterGroup),
    dc_cluster_group_interface: cdktf.listMapper(securemeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceToTerraform, true)(struct!.dcClusterGroupInterface),
    static_routes: securemeshSiteCustomNetworkConfigSloConfigStaticRoutesToTerraform(struct!.staticRoutes),
    static_v6_routes: securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesToTerraform(struct!.staticV6Routes),
  }
}


export function securemeshSiteCustomNetworkConfigSloConfigToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigSloConfigOutputReference | SecuremeshSiteCustomNetworkConfigSloConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nameserver: {
      value: cdktf.stringToHclTerraform(struct!.nameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.nameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_dc_cluster_group: {
      value: cdktf.booleanToHclTerraform(struct!.noDcClusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_v6: {
      value: cdktf.stringToHclTerraform(struct!.vipV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dc_cluster_group: {
      value: securemeshSiteCustomNetworkConfigSloConfigDcClusterGroupToHclTerraform(struct!.dcClusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupList",
    },
    dc_cluster_group_interface: {
      value: cdktf.listMapperHcl(securemeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceToHclTerraform, true)(struct!.dcClusterGroupInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceList",
    },
    static_routes: {
      value: securemeshSiteCustomNetworkConfigSloConfigStaticRoutesToHclTerraform(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesList",
    },
    static_v6_routes: {
      value: securemeshSiteCustomNetworkConfigSloConfigStaticV6RoutesToHclTerraform(struct!.staticV6Routes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigSloConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfigSloConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserver = this._nameserver;
    }
    if (this._nameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserverV6 = this._nameserverV6;
    }
    if (this._noDcClusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDcClusterGroup = this._noDcClusterGroup;
    }
    if (this._noStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStaticRoutes = this._noStaticRoutes;
    }
    if (this._noV6StaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noV6StaticRoutes = this._noV6StaticRoutes;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    if (this._vipV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipV6 = this._vipV6;
    }
    if (this._dcClusterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroup = this._dcClusterGroup?.internalValue;
    }
    if (this._dcClusterGroupInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupInterface = this._dcClusterGroupInterface?.internalValue;
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

  public set internalValue(value: SecuremeshSiteCustomNetworkConfigSloConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._nameserver = undefined;
      this._nameserverV6 = undefined;
      this._noDcClusterGroup = undefined;
      this._noStaticRoutes = undefined;
      this._noV6StaticRoutes = undefined;
      this._vip = undefined;
      this._vipV6 = undefined;
      this._dcClusterGroup.internalValue = undefined;
      this._dcClusterGroupInterface.internalValue = undefined;
      this._staticRoutes.internalValue = undefined;
      this._staticV6Routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._nameserver = value.nameserver;
      this._nameserverV6 = value.nameserverV6;
      this._noDcClusterGroup = value.noDcClusterGroup;
      this._noStaticRoutes = value.noStaticRoutes;
      this._noV6StaticRoutes = value.noV6StaticRoutes;
      this._vip = value.vip;
      this._vipV6 = value.vipV6;
      this._dcClusterGroup.internalValue = value.dcClusterGroup;
      this._dcClusterGroupInterface.internalValue = value.dcClusterGroupInterface;
      this._staticRoutes.internalValue = value.staticRoutes;
      this._staticV6Routes.internalValue = value.staticV6Routes;
    }
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

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // nameserver_v6 - computed: false, optional: true, required: false
  private _nameserverV6?: string; 
  public get nameserverV6() {
    return this.getStringAttribute('nameserver_v6');
  }
  public set nameserverV6(value: string) {
    this._nameserverV6 = value;
  }
  public resetNameserverV6() {
    this._nameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverV6Input() {
    return this._nameserverV6;
  }

  // no_dc_cluster_group - computed: false, optional: true, required: false
  private _noDcClusterGroup?: boolean | cdktf.IResolvable; 
  public get noDcClusterGroup() {
    return this.getBooleanAttribute('no_dc_cluster_group');
  }
  public set noDcClusterGroup(value: boolean | cdktf.IResolvable) {
    this._noDcClusterGroup = value;
  }
  public resetNoDcClusterGroup() {
    this._noDcClusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDcClusterGroupInput() {
    return this._noDcClusterGroup;
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

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_v6 - computed: false, optional: true, required: false
  private _vipV6?: string; 
  public get vipV6() {
    return this.getStringAttribute('vip_v6');
  }
  public set vipV6(value: string) {
    this._vipV6 = value;
  }
  public resetVipV6() {
    this._vipV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipV6Input() {
    return this._vipV6;
  }

  // dc_cluster_group - computed: false, optional: true, required: false
  private _dcClusterGroup = new SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference(this, "dc_cluster_group");
  public get dcClusterGroup() {
    return this._dcClusterGroup;
  }
  public putDcClusterGroup(value: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroup) {
    this._dcClusterGroup.internalValue = value;
  }
  public resetDcClusterGroup() {
    this._dcClusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInput() {
    return this._dcClusterGroup.internalValue;
  }

  // dc_cluster_group_interface - computed: false, optional: true, required: false
  private _dcClusterGroupInterface = new SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterfaceList(this, "dc_cluster_group_interface", false);
  public get dcClusterGroupInterface() {
    return this._dcClusterGroupInterface;
  }
  public putDcClusterGroupInterface(value: SecuremeshSiteCustomNetworkConfigSloConfigDcClusterGroupInterface[] | cdktf.IResolvable) {
    this._dcClusterGroupInterface.internalValue = value;
  }
  public resetDcClusterGroupInterface() {
    this._dcClusterGroupInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInterfaceInput() {
    return this._dcClusterGroupInterface.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference(this, "static_routes");
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticRoutes) {
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
  private _staticV6Routes = new SecuremeshSiteCustomNetworkConfigSloConfigStaticV6RoutesOutputReference(this, "static_v6_routes");
  public get staticV6Routes() {
    return this._staticV6Routes;
  }
  public putStaticV6Routes(value: SecuremeshSiteCustomNetworkConfigSloConfigStaticV6Routes) {
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
export interface SecuremeshSiteCustomNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#bgp_peer_address SecuremeshSite#bgp_peer_address}
  */
  readonly bgpPeerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#bgp_peer_address_v6 SecuremeshSite#bgp_peer_address_v6}
  */
  readonly bgpPeerAddressV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#bgp_router_id SecuremeshSite#bgp_router_id}
  */
  readonly bgpRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_config SecuremeshSite#default_config}
  */
  readonly defaultConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_interface_config SecuremeshSite#default_interface_config}
  */
  readonly defaultInterfaceConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_sli_config SecuremeshSite#default_sli_config}
  */
  readonly defaultSliConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#forward_proxy_allow_all SecuremeshSite#forward_proxy_allow_all}
  */
  readonly forwardProxyAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_forward_proxy SecuremeshSite#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_global_network SecuremeshSite#no_global_network}
  */
  readonly noGlobalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_network_policy SecuremeshSite#no_network_policy}
  */
  readonly noNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#sm_connection_public_ip SecuremeshSite#sm_connection_public_ip}
  */
  readonly smConnectionPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#sm_connection_pvt_ip SecuremeshSite#sm_connection_pvt_ip}
  */
  readonly smConnectionPvtIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#tunnel_dead_timeout SecuremeshSite#tunnel_dead_timeout}
  */
  readonly tunnelDeadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#vip_vrrp_mode SecuremeshSite#vip_vrrp_mode}
  */
  readonly vipVrrpMode?: string;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#active_enhanced_firewall_policies SecuremeshSite#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#active_forward_proxy_policies SecuremeshSite#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPolicies;
  /**
  * active_network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#active_network_policies SecuremeshSite#active_network_policies}
  */
  readonly activeNetworkPolicies?: SecuremeshSiteCustomNetworkConfigActiveNetworkPolicies;
  /**
  * global_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#global_network_list SecuremeshSite#global_network_list}
  */
  readonly globalNetworkList?: SecuremeshSiteCustomNetworkConfigGlobalNetworkListStruct;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#interface_list SecuremeshSite#interface_list}
  */
  readonly interfaceList?: SecuremeshSiteCustomNetworkConfigInterfaceListStruct;
  /**
  * sli_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#sli_config SecuremeshSite#sli_config}
  */
  readonly sliConfig?: SecuremeshSiteCustomNetworkConfigSliConfig;
  /**
  * slo_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#slo_config SecuremeshSite#slo_config}
  */
  readonly sloConfig?: SecuremeshSiteCustomNetworkConfigSloConfig;
}

export function securemeshSiteCustomNetworkConfigToTerraform(struct?: SecuremeshSiteCustomNetworkConfigOutputReference | SecuremeshSiteCustomNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_peer_address: cdktf.stringToTerraform(struct!.bgpPeerAddress),
    bgp_peer_address_v6: cdktf.stringToTerraform(struct!.bgpPeerAddressV6),
    bgp_router_id: cdktf.stringToTerraform(struct!.bgpRouterId),
    default_config: cdktf.booleanToTerraform(struct!.defaultConfig),
    default_interface_config: cdktf.booleanToTerraform(struct!.defaultInterfaceConfig),
    default_sli_config: cdktf.booleanToTerraform(struct!.defaultSliConfig),
    forward_proxy_allow_all: cdktf.booleanToTerraform(struct!.forwardProxyAllowAll),
    no_forward_proxy: cdktf.booleanToTerraform(struct!.noForwardProxy),
    no_global_network: cdktf.booleanToTerraform(struct!.noGlobalNetwork),
    no_network_policy: cdktf.booleanToTerraform(struct!.noNetworkPolicy),
    sm_connection_public_ip: cdktf.booleanToTerraform(struct!.smConnectionPublicIp),
    sm_connection_pvt_ip: cdktf.booleanToTerraform(struct!.smConnectionPvtIp),
    tunnel_dead_timeout: cdktf.numberToTerraform(struct!.tunnelDeadTimeout),
    vip_vrrp_mode: cdktf.stringToTerraform(struct!.vipVrrpMode),
    active_enhanced_firewall_policies: securemeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: securemeshSiteCustomNetworkConfigActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_network_policies: securemeshSiteCustomNetworkConfigActiveNetworkPoliciesToTerraform(struct!.activeNetworkPolicies),
    global_network_list: securemeshSiteCustomNetworkConfigGlobalNetworkListStructToTerraform(struct!.globalNetworkList),
    interface_list: securemeshSiteCustomNetworkConfigInterfaceListStructToTerraform(struct!.interfaceList),
    sli_config: securemeshSiteCustomNetworkConfigSliConfigToTerraform(struct!.sliConfig),
    slo_config: securemeshSiteCustomNetworkConfigSloConfigToTerraform(struct!.sloConfig),
  }
}


export function securemeshSiteCustomNetworkConfigToHclTerraform(struct?: SecuremeshSiteCustomNetworkConfigOutputReference | SecuremeshSiteCustomNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_peer_address: {
      value: cdktf.stringToHclTerraform(struct!.bgpPeerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_peer_address_v6: {
      value: cdktf.stringToHclTerraform(struct!.bgpPeerAddressV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_router_id: {
      value: cdktf.stringToHclTerraform(struct!.bgpRouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_config: {
      value: cdktf.booleanToHclTerraform(struct!.defaultConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_interface_config: {
      value: cdktf.booleanToHclTerraform(struct!.defaultInterfaceConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_sli_config: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSliConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_proxy_allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.forwardProxyAllowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.noForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_global_network: {
      value: cdktf.booleanToHclTerraform(struct!.noGlobalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_network_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noNetworkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_pvt_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPvtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tunnel_dead_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tunnelDeadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_vrrp_mode: {
      value: cdktf.stringToHclTerraform(struct!.vipVrrpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_enhanced_firewall_policies: {
      value: securemeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: securemeshSiteCustomNetworkConfigActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesList",
    },
    active_network_policies: {
      value: securemeshSiteCustomNetworkConfigActiveNetworkPoliciesToHclTerraform(struct!.activeNetworkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesList",
    },
    global_network_list: {
      value: securemeshSiteCustomNetworkConfigGlobalNetworkListStructToHclTerraform(struct!.globalNetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigGlobalNetworkListStructList",
    },
    interface_list: {
      value: securemeshSiteCustomNetworkConfigInterfaceListStructToHclTerraform(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigInterfaceListStructList",
    },
    sli_config: {
      value: securemeshSiteCustomNetworkConfigSliConfigToHclTerraform(struct!.sliConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSliConfigList",
    },
    slo_config: {
      value: securemeshSiteCustomNetworkConfigSloConfigToHclTerraform(struct!.sloConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteCustomNetworkConfigSloConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteCustomNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteCustomNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpPeerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeerAddress = this._bgpPeerAddress;
    }
    if (this._bgpPeerAddressV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeerAddressV6 = this._bgpPeerAddressV6;
    }
    if (this._bgpRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRouterId = this._bgpRouterId;
    }
    if (this._defaultConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConfig = this._defaultConfig;
    }
    if (this._defaultInterfaceConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInterfaceConfig = this._defaultInterfaceConfig;
    }
    if (this._defaultSliConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSliConfig = this._defaultSliConfig;
    }
    if (this._forwardProxyAllowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyAllowAll = this._forwardProxyAllowAll;
    }
    if (this._noForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noForwardProxy = this._noForwardProxy;
    }
    if (this._noGlobalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGlobalNetwork = this._noGlobalNetwork;
    }
    if (this._noNetworkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNetworkPolicy = this._noNetworkPolicy;
    }
    if (this._smConnectionPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPublicIp = this._smConnectionPublicIp;
    }
    if (this._smConnectionPvtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPvtIp = this._smConnectionPvtIp;
    }
    if (this._tunnelDeadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDeadTimeout = this._tunnelDeadTimeout;
    }
    if (this._vipVrrpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipVrrpMode = this._vipVrrpMode;
    }
    if (this._activeEnhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEnhancedFirewallPolicies = this._activeEnhancedFirewallPolicies?.internalValue;
    }
    if (this._activeForwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeForwardProxyPolicies = this._activeForwardProxyPolicies?.internalValue;
    }
    if (this._activeNetworkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNetworkPolicies = this._activeNetworkPolicies?.internalValue;
    }
    if (this._globalNetworkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkList = this._globalNetworkList?.internalValue;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    if (this._sliConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliConfig = this._sliConfig?.internalValue;
    }
    if (this._sloConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloConfig = this._sloConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteCustomNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpPeerAddress = undefined;
      this._bgpPeerAddressV6 = undefined;
      this._bgpRouterId = undefined;
      this._defaultConfig = undefined;
      this._defaultInterfaceConfig = undefined;
      this._defaultSliConfig = undefined;
      this._forwardProxyAllowAll = undefined;
      this._noForwardProxy = undefined;
      this._noGlobalNetwork = undefined;
      this._noNetworkPolicy = undefined;
      this._smConnectionPublicIp = undefined;
      this._smConnectionPvtIp = undefined;
      this._tunnelDeadTimeout = undefined;
      this._vipVrrpMode = undefined;
      this._activeEnhancedFirewallPolicies.internalValue = undefined;
      this._activeForwardProxyPolicies.internalValue = undefined;
      this._activeNetworkPolicies.internalValue = undefined;
      this._globalNetworkList.internalValue = undefined;
      this._interfaceList.internalValue = undefined;
      this._sliConfig.internalValue = undefined;
      this._sloConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpPeerAddress = value.bgpPeerAddress;
      this._bgpPeerAddressV6 = value.bgpPeerAddressV6;
      this._bgpRouterId = value.bgpRouterId;
      this._defaultConfig = value.defaultConfig;
      this._defaultInterfaceConfig = value.defaultInterfaceConfig;
      this._defaultSliConfig = value.defaultSliConfig;
      this._forwardProxyAllowAll = value.forwardProxyAllowAll;
      this._noForwardProxy = value.noForwardProxy;
      this._noGlobalNetwork = value.noGlobalNetwork;
      this._noNetworkPolicy = value.noNetworkPolicy;
      this._smConnectionPublicIp = value.smConnectionPublicIp;
      this._smConnectionPvtIp = value.smConnectionPvtIp;
      this._tunnelDeadTimeout = value.tunnelDeadTimeout;
      this._vipVrrpMode = value.vipVrrpMode;
      this._activeEnhancedFirewallPolicies.internalValue = value.activeEnhancedFirewallPolicies;
      this._activeForwardProxyPolicies.internalValue = value.activeForwardProxyPolicies;
      this._activeNetworkPolicies.internalValue = value.activeNetworkPolicies;
      this._globalNetworkList.internalValue = value.globalNetworkList;
      this._interfaceList.internalValue = value.interfaceList;
      this._sliConfig.internalValue = value.sliConfig;
      this._sloConfig.internalValue = value.sloConfig;
    }
  }

  // bgp_peer_address - computed: false, optional: true, required: false
  private _bgpPeerAddress?: string; 
  public get bgpPeerAddress() {
    return this.getStringAttribute('bgp_peer_address');
  }
  public set bgpPeerAddress(value: string) {
    this._bgpPeerAddress = value;
  }
  public resetBgpPeerAddress() {
    this._bgpPeerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerAddressInput() {
    return this._bgpPeerAddress;
  }

  // bgp_peer_address_v6 - computed: false, optional: true, required: false
  private _bgpPeerAddressV6?: string; 
  public get bgpPeerAddressV6() {
    return this.getStringAttribute('bgp_peer_address_v6');
  }
  public set bgpPeerAddressV6(value: string) {
    this._bgpPeerAddressV6 = value;
  }
  public resetBgpPeerAddressV6() {
    this._bgpPeerAddressV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerAddressV6Input() {
    return this._bgpPeerAddressV6;
  }

  // bgp_router_id - computed: false, optional: true, required: false
  private _bgpRouterId?: string; 
  public get bgpRouterId() {
    return this.getStringAttribute('bgp_router_id');
  }
  public set bgpRouterId(value: string) {
    this._bgpRouterId = value;
  }
  public resetBgpRouterId() {
    this._bgpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdInput() {
    return this._bgpRouterId;
  }

  // default_config - computed: false, optional: true, required: false
  private _defaultConfig?: boolean | cdktf.IResolvable; 
  public get defaultConfig() {
    return this.getBooleanAttribute('default_config');
  }
  public set defaultConfig(value: boolean | cdktf.IResolvable) {
    this._defaultConfig = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig;
  }

  // default_interface_config - computed: false, optional: true, required: false
  private _defaultInterfaceConfig?: boolean | cdktf.IResolvable; 
  public get defaultInterfaceConfig() {
    return this.getBooleanAttribute('default_interface_config');
  }
  public set defaultInterfaceConfig(value: boolean | cdktf.IResolvable) {
    this._defaultInterfaceConfig = value;
  }
  public resetDefaultInterfaceConfig() {
    this._defaultInterfaceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInterfaceConfigInput() {
    return this._defaultInterfaceConfig;
  }

  // default_sli_config - computed: false, optional: true, required: false
  private _defaultSliConfig?: boolean | cdktf.IResolvable; 
  public get defaultSliConfig() {
    return this.getBooleanAttribute('default_sli_config');
  }
  public set defaultSliConfig(value: boolean | cdktf.IResolvable) {
    this._defaultSliConfig = value;
  }
  public resetDefaultSliConfig() {
    this._defaultSliConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSliConfigInput() {
    return this._defaultSliConfig;
  }

  // forward_proxy_allow_all - computed: false, optional: true, required: false
  private _forwardProxyAllowAll?: boolean | cdktf.IResolvable; 
  public get forwardProxyAllowAll() {
    return this.getBooleanAttribute('forward_proxy_allow_all');
  }
  public set forwardProxyAllowAll(value: boolean | cdktf.IResolvable) {
    this._forwardProxyAllowAll = value;
  }
  public resetForwardProxyAllowAll() {
    this._forwardProxyAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyAllowAllInput() {
    return this._forwardProxyAllowAll;
  }

  // no_forward_proxy - computed: false, optional: true, required: false
  private _noForwardProxy?: boolean | cdktf.IResolvable; 
  public get noForwardProxy() {
    return this.getBooleanAttribute('no_forward_proxy');
  }
  public set noForwardProxy(value: boolean | cdktf.IResolvable) {
    this._noForwardProxy = value;
  }
  public resetNoForwardProxy() {
    this._noForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noForwardProxyInput() {
    return this._noForwardProxy;
  }

  // no_global_network - computed: false, optional: true, required: false
  private _noGlobalNetwork?: boolean | cdktf.IResolvable; 
  public get noGlobalNetwork() {
    return this.getBooleanAttribute('no_global_network');
  }
  public set noGlobalNetwork(value: boolean | cdktf.IResolvable) {
    this._noGlobalNetwork = value;
  }
  public resetNoGlobalNetwork() {
    this._noGlobalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGlobalNetworkInput() {
    return this._noGlobalNetwork;
  }

  // no_network_policy - computed: false, optional: true, required: false
  private _noNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get noNetworkPolicy() {
    return this.getBooleanAttribute('no_network_policy');
  }
  public set noNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._noNetworkPolicy = value;
  }
  public resetNoNetworkPolicy() {
    this._noNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNetworkPolicyInput() {
    return this._noNetworkPolicy;
  }

  // sm_connection_public_ip - computed: false, optional: true, required: false
  private _smConnectionPublicIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPublicIp() {
    return this.getBooleanAttribute('sm_connection_public_ip');
  }
  public set smConnectionPublicIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPublicIp = value;
  }
  public resetSmConnectionPublicIp() {
    this._smConnectionPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPublicIpInput() {
    return this._smConnectionPublicIp;
  }

  // sm_connection_pvt_ip - computed: false, optional: true, required: false
  private _smConnectionPvtIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPvtIp() {
    return this.getBooleanAttribute('sm_connection_pvt_ip');
  }
  public set smConnectionPvtIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPvtIp = value;
  }
  public resetSmConnectionPvtIp() {
    this._smConnectionPvtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPvtIpInput() {
    return this._smConnectionPvtIp;
  }

  // tunnel_dead_timeout - computed: false, optional: true, required: false
  private _tunnelDeadTimeout?: number; 
  public get tunnelDeadTimeout() {
    return this.getNumberAttribute('tunnel_dead_timeout');
  }
  public set tunnelDeadTimeout(value: number) {
    this._tunnelDeadTimeout = value;
  }
  public resetTunnelDeadTimeout() {
    this._tunnelDeadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDeadTimeoutInput() {
    return this._tunnelDeadTimeout;
  }

  // vip_vrrp_mode - computed: false, optional: true, required: false
  private _vipVrrpMode?: string; 
  public get vipVrrpMode() {
    return this.getStringAttribute('vip_vrrp_mode');
  }
  public set vipVrrpMode(value: string) {
    this._vipVrrpMode = value;
  }
  public resetVipVrrpMode() {
    this._vipVrrpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipVrrpModeInput() {
    return this._vipVrrpMode;
  }

  // active_enhanced_firewall_policies - computed: false, optional: true, required: false
  private _activeEnhancedFirewallPolicies = new SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: SecuremeshSiteCustomNetworkConfigActiveEnhancedFirewallPolicies) {
    this._activeEnhancedFirewallPolicies.internalValue = value;
  }
  public resetActiveEnhancedFirewallPolicies() {
    this._activeEnhancedFirewallPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeEnhancedFirewallPoliciesInput() {
    return this._activeEnhancedFirewallPolicies.internalValue;
  }

  // active_forward_proxy_policies - computed: false, optional: true, required: false
  private _activeForwardProxyPolicies = new SecuremeshSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: SecuremeshSiteCustomNetworkConfigActiveForwardProxyPolicies) {
    this._activeForwardProxyPolicies.internalValue = value;
  }
  public resetActiveForwardProxyPolicies() {
    this._activeForwardProxyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeForwardProxyPoliciesInput() {
    return this._activeForwardProxyPolicies.internalValue;
  }

  // active_network_policies - computed: false, optional: true, required: false
  private _activeNetworkPolicies = new SecuremeshSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference(this, "active_network_policies");
  public get activeNetworkPolicies() {
    return this._activeNetworkPolicies;
  }
  public putActiveNetworkPolicies(value: SecuremeshSiteCustomNetworkConfigActiveNetworkPolicies) {
    this._activeNetworkPolicies.internalValue = value;
  }
  public resetActiveNetworkPolicies() {
    this._activeNetworkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNetworkPoliciesInput() {
    return this._activeNetworkPolicies.internalValue;
  }

  // global_network_list - computed: false, optional: true, required: false
  private _globalNetworkList = new SecuremeshSiteCustomNetworkConfigGlobalNetworkListStructOutputReference(this, "global_network_list");
  public get globalNetworkList() {
    return this._globalNetworkList;
  }
  public putGlobalNetworkList(value: SecuremeshSiteCustomNetworkConfigGlobalNetworkListStruct) {
    this._globalNetworkList.internalValue = value;
  }
  public resetGlobalNetworkList() {
    this._globalNetworkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkListInput() {
    return this._globalNetworkList.internalValue;
  }

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new SecuremeshSiteCustomNetworkConfigInterfaceListStructOutputReference(this, "interface_list");
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteCustomNetworkConfigInterfaceListStruct) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }

  // sli_config - computed: false, optional: true, required: false
  private _sliConfig = new SecuremeshSiteCustomNetworkConfigSliConfigOutputReference(this, "sli_config");
  public get sliConfig() {
    return this._sliConfig;
  }
  public putSliConfig(value: SecuremeshSiteCustomNetworkConfigSliConfig) {
    this._sliConfig.internalValue = value;
  }
  public resetSliConfig() {
    this._sliConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliConfigInput() {
    return this._sliConfig.internalValue;
  }

  // slo_config - computed: false, optional: true, required: false
  private _sloConfig = new SecuremeshSiteCustomNetworkConfigSloConfigOutputReference(this, "slo_config");
  public get sloConfig() {
    return this._sloConfig;
  }
  public putSloConfig(value: SecuremeshSiteCustomNetworkConfigSloConfig) {
    this._sloConfig.internalValue = value;
  }
  public resetSloConfig() {
    this._sloConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloConfigInput() {
    return this._sloConfig.internalValue;
  }
}
export interface SecuremeshSiteKubernetesUpgradeDrainEnableUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#disable_vega_upgrade_mode SecuremeshSite#disable_vega_upgrade_mode}
  */
  readonly disableVegaUpgradeMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#drain_max_unavailable_node_count SecuremeshSite#drain_max_unavailable_node_count}
  */
  readonly drainMaxUnavailableNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#drain_max_unavailable_node_percentage SecuremeshSite#drain_max_unavailable_node_percentage}
  */
  readonly drainMaxUnavailableNodePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#drain_node_timeout SecuremeshSite#drain_node_timeout}
  */
  readonly drainNodeTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#enable_vega_upgrade_mode SecuremeshSite#enable_vega_upgrade_mode}
  */
  readonly enableVegaUpgradeMode?: boolean | cdktf.IResolvable;
}

export function securemeshSiteKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct?: SecuremeshSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | SecuremeshSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.disableVegaUpgradeMode),
    drain_max_unavailable_node_count: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodeCount),
    drain_max_unavailable_node_percentage: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodePercentage),
    drain_node_timeout: cdktf.numberToTerraform(struct!.drainNodeTimeout),
    enable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.enableVegaUpgradeMode),
  }
}


export function securemeshSiteKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct?: SecuremeshSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | SecuremeshSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.disableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drain_max_unavailable_node_count: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_max_unavailable_node_percentage: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_node_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainNodeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVegaUpgradeMode = this._disableVegaUpgradeMode;
    }
    if (this._drainMaxUnavailableNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodeCount = this._drainMaxUnavailableNodeCount;
    }
    if (this._drainMaxUnavailableNodePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodePercentage = this._drainMaxUnavailableNodePercentage;
    }
    if (this._drainNodeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainNodeTimeout = this._drainNodeTimeout;
    }
    if (this._enableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVegaUpgradeMode = this._enableVegaUpgradeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVegaUpgradeMode = undefined;
      this._drainMaxUnavailableNodeCount = undefined;
      this._drainMaxUnavailableNodePercentage = undefined;
      this._drainNodeTimeout = undefined;
      this._enableVegaUpgradeMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVegaUpgradeMode = value.disableVegaUpgradeMode;
      this._drainMaxUnavailableNodeCount = value.drainMaxUnavailableNodeCount;
      this._drainMaxUnavailableNodePercentage = value.drainMaxUnavailableNodePercentage;
      this._drainNodeTimeout = value.drainNodeTimeout;
      this._enableVegaUpgradeMode = value.enableVegaUpgradeMode;
    }
  }

  // disable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _disableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get disableVegaUpgradeMode() {
    return this.getBooleanAttribute('disable_vega_upgrade_mode');
  }
  public set disableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._disableVegaUpgradeMode = value;
  }
  public resetDisableVegaUpgradeMode() {
    this._disableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVegaUpgradeModeInput() {
    return this._disableVegaUpgradeMode;
  }

  // drain_max_unavailable_node_count - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodeCount?: number; 
  public get drainMaxUnavailableNodeCount() {
    return this.getNumberAttribute('drain_max_unavailable_node_count');
  }
  public set drainMaxUnavailableNodeCount(value: number) {
    this._drainMaxUnavailableNodeCount = value;
  }
  public resetDrainMaxUnavailableNodeCount() {
    this._drainMaxUnavailableNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodeCountInput() {
    return this._drainMaxUnavailableNodeCount;
  }

  // drain_max_unavailable_node_percentage - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodePercentage?: number; 
  public get drainMaxUnavailableNodePercentage() {
    return this.getNumberAttribute('drain_max_unavailable_node_percentage');
  }
  public set drainMaxUnavailableNodePercentage(value: number) {
    this._drainMaxUnavailableNodePercentage = value;
  }
  public resetDrainMaxUnavailableNodePercentage() {
    this._drainMaxUnavailableNodePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodePercentageInput() {
    return this._drainMaxUnavailableNodePercentage;
  }

  // drain_node_timeout - computed: false, optional: false, required: true
  private _drainNodeTimeout?: number; 
  public get drainNodeTimeout() {
    return this.getNumberAttribute('drain_node_timeout');
  }
  public set drainNodeTimeout(value: number) {
    this._drainNodeTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNodeTimeoutInput() {
    return this._drainNodeTimeout;
  }

  // enable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _enableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get enableVegaUpgradeMode() {
    return this.getBooleanAttribute('enable_vega_upgrade_mode');
  }
  public set enableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._enableVegaUpgradeMode = value;
  }
  public resetEnableVegaUpgradeMode() {
    this._enableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVegaUpgradeModeInput() {
    return this._enableVegaUpgradeMode;
  }
}
