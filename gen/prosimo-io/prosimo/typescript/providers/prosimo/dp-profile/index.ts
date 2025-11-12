// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DpProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#id DpProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * inprofile_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#inprofile_list DpProfile#inprofile_list}
  */
  readonly inprofileList: DpProfileInprofileListStruct[] | cdktf.IResolvable;
}
export interface DpProfileInprofileListCriteriaOsVersion {
  /**
  * OS Build Number, e.g: 11(21H2) 22000, 10(1511) 10586 etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#build DpProfile#build}
  */
  readonly buildAttribute?: string;
  /**
  * Patch details, e.g: 1540, 1358 etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#patch DpProfile#patch}
  */
  readonly patch?: string;
}

export function dpProfileInprofileListCriteriaOsVersionToTerraform(struct?: DpProfileInprofileListCriteriaOsVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build: cdktf.stringToTerraform(struct!.buildAttribute),
    patch: cdktf.stringToTerraform(struct!.patch),
  }
}


export function dpProfileInprofileListCriteriaOsVersionToHclTerraform(struct?: DpProfileInprofileListCriteriaOsVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build: {
      value: cdktf.stringToHclTerraform(struct!.buildAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DpProfileInprofileListCriteriaOsVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DpProfileInprofileListCriteriaOsVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._build !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildAttribute = this._build;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DpProfileInprofileListCriteriaOsVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._build = undefined;
      this._patch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._build = value.buildAttribute;
      this._patch = value.patch;
    }
  }

  // build - computed: false, optional: true, required: false
  private _build?: string; 
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }
  public set buildAttribute(value: string) {
    this._build = value;
  }
  public resetBuildAttribute() {
    this._build = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }
}

export class DpProfileInprofileListCriteriaOsVersionList extends cdktf.ComplexList {
  public internalValue? : DpProfileInprofileListCriteriaOsVersion[] | cdktf.IResolvable

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
  public get(index: number): DpProfileInprofileListCriteriaOsVersionOutputReference {
    return new DpProfileInprofileListCriteriaOsVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DpProfileInprofileListCriteria {
  /**
  * Set disk encryption status, e.g: enabled, disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#disk_encryption_status DpProfile#disk_encryption_status}
  */
  readonly diskEncryptionStatus?: string;
  /**
  * The user's device should match one of the domains selected from the dropdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#domain_of_interest DpProfile#domain_of_interest}
  */
  readonly domainOfInterest?: string[];
  /**
  * Set firewall status, e.g: enabled, disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#firewall_status DpProfile#firewall_status}
  */
  readonly firewallStatus?: string;
  /**
  * OS type, e.g: windows, mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#os DpProfile#os}
  */
  readonly os: string;
  /**
  * select one of is, is-notm is-atleast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#os_operator DpProfile#os_operator}
  */
  readonly osOperator?: string;
  /**
  * Select the processes that should be running. If more than one process is added, all of them should be running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#running_process DpProfile#running_process}
  */
  readonly runningProcess?: string[];
  /**
  * os_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#os_version DpProfile#os_version}
  */
  readonly osVersion?: DpProfileInprofileListCriteriaOsVersion[] | cdktf.IResolvable;
}

export function dpProfileInprofileListCriteriaToTerraform(struct?: DpProfileInprofileListCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_status: cdktf.stringToTerraform(struct!.diskEncryptionStatus),
    domain_of_interest: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainOfInterest),
    firewall_status: cdktf.stringToTerraform(struct!.firewallStatus),
    os: cdktf.stringToTerraform(struct!.os),
    os_operator: cdktf.stringToTerraform(struct!.osOperator),
    running_process: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runningProcess),
    os_version: cdktf.listMapper(dpProfileInprofileListCriteriaOsVersionToTerraform, true)(struct!.osVersion),
  }
}


export function dpProfileInprofileListCriteriaToHclTerraform(struct?: DpProfileInprofileListCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_status: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_of_interest: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainOfInterest),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    firewall_status: {
      value: cdktf.stringToHclTerraform(struct!.firewallStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_operator: {
      value: cdktf.stringToHclTerraform(struct!.osOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running_process: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runningProcess),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    os_version: {
      value: cdktf.listMapperHcl(dpProfileInprofileListCriteriaOsVersionToHclTerraform, true)(struct!.osVersion),
      isBlock: true,
      type: "list",
      storageClassType: "DpProfileInprofileListCriteriaOsVersionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DpProfileInprofileListCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DpProfileInprofileListCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionStatus = this._diskEncryptionStatus;
    }
    if (this._domainOfInterest !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainOfInterest = this._domainOfInterest;
    }
    if (this._firewallStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallStatus = this._firewallStatus;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._osOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.osOperator = this._osOperator;
    }
    if (this._runningProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningProcess = this._runningProcess;
    }
    if (this._osVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DpProfileInprofileListCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskEncryptionStatus = undefined;
      this._domainOfInterest = undefined;
      this._firewallStatus = undefined;
      this._os = undefined;
      this._osOperator = undefined;
      this._runningProcess = undefined;
      this._osVersion.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskEncryptionStatus = value.diskEncryptionStatus;
      this._domainOfInterest = value.domainOfInterest;
      this._firewallStatus = value.firewallStatus;
      this._os = value.os;
      this._osOperator = value.osOperator;
      this._runningProcess = value.runningProcess;
      this._osVersion.internalValue = value.osVersion;
    }
  }

  // disk_encryption_status - computed: false, optional: true, required: false
  private _diskEncryptionStatus?: string; 
  public get diskEncryptionStatus() {
    return this.getStringAttribute('disk_encryption_status');
  }
  public set diskEncryptionStatus(value: string) {
    this._diskEncryptionStatus = value;
  }
  public resetDiskEncryptionStatus() {
    this._diskEncryptionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionStatusInput() {
    return this._diskEncryptionStatus;
  }

  // domain_of_interest - computed: false, optional: true, required: false
  private _domainOfInterest?: string[]; 
  public get domainOfInterest() {
    return this.getListAttribute('domain_of_interest');
  }
  public set domainOfInterest(value: string[]) {
    this._domainOfInterest = value;
  }
  public resetDomainOfInterest() {
    this._domainOfInterest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainOfInterestInput() {
    return this._domainOfInterest;
  }

  // firewall_status - computed: false, optional: true, required: false
  private _firewallStatus?: string; 
  public get firewallStatus() {
    return this.getStringAttribute('firewall_status');
  }
  public set firewallStatus(value: string) {
    this._firewallStatus = value;
  }
  public resetFirewallStatus() {
    this._firewallStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallStatusInput() {
    return this._firewallStatus;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // os_operator - computed: false, optional: true, required: false
  private _osOperator?: string; 
  public get osOperator() {
    return this.getStringAttribute('os_operator');
  }
  public set osOperator(value: string) {
    this._osOperator = value;
  }
  public resetOsOperator() {
    this._osOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osOperatorInput() {
    return this._osOperator;
  }

  // running_process - computed: false, optional: true, required: false
  private _runningProcess?: string[]; 
  public get runningProcess() {
    return this.getListAttribute('running_process');
  }
  public set runningProcess(value: string[]) {
    this._runningProcess = value;
  }
  public resetRunningProcess() {
    this._runningProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningProcessInput() {
    return this._runningProcess;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion = new DpProfileInprofileListCriteriaOsVersionList(this, "os_version", false);
  public get osVersion() {
    return this._osVersion;
  }
  public putOsVersion(value: DpProfileInprofileListCriteriaOsVersion[] | cdktf.IResolvable) {
    this._osVersion.internalValue = value;
  }
  public resetOsVersion() {
    this._osVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion.internalValue;
  }
}

export class DpProfileInprofileListCriteriaList extends cdktf.ComplexList {
  public internalValue? : DpProfileInprofileListCriteria[] | cdktf.IResolvable

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
  public get(index: number): DpProfileInprofileListCriteriaOutputReference {
    return new DpProfileInprofileListCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DpProfileInprofileListStruct {
  /**
  * Select end point security profiles from the list. If the list is empty, profile needs to created first
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#edr_profiles DpProfile#edr_profiles}
  */
  readonly edrProfiles?: string[];
  /**
  * Set TRUE if you want to enable the profile, else false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#enabled DpProfile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#name DpProfile#name}
  */
  readonly name: string;
  /**
  * Risk level of the profile, e.g: high, medium, low
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#risk_level DpProfile#risk_level}
  */
  readonly riskLevel: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#criteria DpProfile#criteria}
  */
  readonly criteria: DpProfileInprofileListCriteria[] | cdktf.IResolvable;
}

export function dpProfileInprofileListStructToTerraform(struct?: DpProfileInprofileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edr_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.edrProfiles),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    risk_level: cdktf.stringToTerraform(struct!.riskLevel),
    criteria: cdktf.listMapper(dpProfileInprofileListCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function dpProfileInprofileListStructToHclTerraform(struct?: DpProfileInprofileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edr_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.edrProfiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    risk_level: {
      value: cdktf.stringToHclTerraform(struct!.riskLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria: {
      value: cdktf.listMapperHcl(dpProfileInprofileListCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "DpProfileInprofileListCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DpProfileInprofileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DpProfileInprofileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edrProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.edrProfiles = this._edrProfiles;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._riskLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskLevel = this._riskLevel;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DpProfileInprofileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edrProfiles = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._riskLevel = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edrProfiles = value.edrProfiles;
      this._enabled = value.enabled;
      this._name = value.name;
      this._riskLevel = value.riskLevel;
      this._criteria.internalValue = value.criteria;
    }
  }

  // edr_profiles - computed: false, optional: true, required: false
  private _edrProfiles?: string[]; 
  public get edrProfiles() {
    return this.getListAttribute('edr_profiles');
  }
  public set edrProfiles(value: string[]) {
    this._edrProfiles = value;
  }
  public resetEdrProfiles() {
    this._edrProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edrProfilesInput() {
    return this._edrProfiles;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // risk_level - computed: false, optional: false, required: true
  private _riskLevel?: string; 
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
  public set riskLevel(value: string) {
    this._riskLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new DpProfileInprofileListCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: DpProfileInprofileListCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class DpProfileInprofileListStructList extends cdktf.ComplexList {
  public internalValue? : DpProfileInprofileListStruct[] | cdktf.IResolvable

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
  public get(index: number): DpProfileInprofileListStructOutputReference {
    return new DpProfileInprofileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile prosimo_dp_profile}
*/
export class DpProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_dp_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DpProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DpProfile to import
  * @param importFromId The id of the existing DpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DpProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_dp_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/dp_profile prosimo_dp_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DpProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DpProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_dp_profile',
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
    this._id = config.id;
    this._inprofileList.internalValue = config.inprofileList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // inprofile_list - computed: false, optional: false, required: true
  private _inprofileList = new DpProfileInprofileListStructList(this, "inprofile_list", false);
  public get inprofileList() {
    return this._inprofileList;
  }
  public putInprofileList(value: DpProfileInprofileListStruct[] | cdktf.IResolvable) {
    this._inprofileList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inprofileListInput() {
    return this._inprofileList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      inprofile_list: cdktf.listMapper(dpProfileInprofileListStructToTerraform, true)(this._inprofileList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inprofile_list: {
        value: cdktf.listMapperHcl(dpProfileInprofileListStructToHclTerraform, true)(this._inprofileList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DpProfileInprofileListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
