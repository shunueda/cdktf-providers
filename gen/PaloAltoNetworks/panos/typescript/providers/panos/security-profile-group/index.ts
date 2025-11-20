// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityProfileGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#data_filtering SecurityProfileGroup#data_filtering}
  */
  readonly dataFiltering?: string[];
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#disable_override SecurityProfileGroup#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#file_blocking SecurityProfileGroup#file_blocking}
  */
  readonly fileBlocking?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#gtp SecurityProfileGroup#gtp}
  */
  readonly gtp?: string[];
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#location SecurityProfileGroup#location}
  */
  readonly location: SecurityProfileGroupLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#name SecurityProfileGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#sctp SecurityProfileGroup#sctp}
  */
  readonly sctp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#spyware SecurityProfileGroup#spyware}
  */
  readonly spyware?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#url_filtering SecurityProfileGroup#url_filtering}
  */
  readonly urlFiltering?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#virus SecurityProfileGroup#virus}
  */
  readonly virus?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#vulnerability SecurityProfileGroup#vulnerability}
  */
  readonly vulnerability?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#wildfire_analysis SecurityProfileGroup#wildfire_analysis}
  */
  readonly wildfireAnalysis?: string[];
}
export interface SecurityProfileGroupLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#name SecurityProfileGroup#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#panorama_device SecurityProfileGroup#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function securityProfileGroupLocationDeviceGroupToTerraform(struct?: SecurityProfileGroupLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function securityProfileGroupLocationDeviceGroupToHclTerraform(struct?: SecurityProfileGroupLocationDeviceGroup | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityProfileGroupLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityProfileGroupLocationDeviceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityProfileGroupLocationDeviceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface SecurityProfileGroupLocationShared {
}

export function securityProfileGroupLocationSharedToTerraform(struct?: SecurityProfileGroupLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securityProfileGroupLocationSharedToHclTerraform(struct?: SecurityProfileGroupLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityProfileGroupLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityProfileGroupLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityProfileGroupLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SecurityProfileGroupLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#device_group SecurityProfileGroup#device_group}
  */
  readonly deviceGroup?: SecurityProfileGroupLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#shared SecurityProfileGroup#shared}
  */
  readonly shared?: SecurityProfileGroupLocationShared;
}

export function securityProfileGroupLocationToTerraform(struct?: SecurityProfileGroupLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: securityProfileGroupLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: securityProfileGroupLocationSharedToTerraform(struct!.shared),
  }
}


export function securityProfileGroupLocationToHclTerraform(struct?: SecurityProfileGroupLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: securityProfileGroupLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityProfileGroupLocationDeviceGroup",
    },
    shared: {
      value: securityProfileGroupLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityProfileGroupLocationShared",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityProfileGroupLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityProfileGroupLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityProfileGroupLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = undefined;
      this._shared.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = value.deviceGroup;
      this._shared.internalValue = value.shared;
    }
  }

  // device_group - computed: false, optional: true, required: false
  private _deviceGroup = new SecurityProfileGroupLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: SecurityProfileGroupLocationDeviceGroup) {
    this._deviceGroup.internalValue = value;
  }
  public resetDeviceGroup() {
    this._deviceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new SecurityProfileGroupLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: SecurityProfileGroupLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group panos_security_profile_group}
*/
export class SecurityProfileGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_security_profile_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityProfileGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityProfileGroup to import
  * @param importFromId The id of the existing SecurityProfileGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityProfileGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_security_profile_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/security_profile_group panos_security_profile_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityProfileGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityProfileGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_security_profile_group',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.6',
        providerVersionConstraint: '2.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataFiltering = config.dataFiltering;
    this._disableOverride = config.disableOverride;
    this._fileBlocking = config.fileBlocking;
    this._gtp = config.gtp;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._sctp = config.sctp;
    this._spyware = config.spyware;
    this._urlFiltering = config.urlFiltering;
    this._virus = config.virus;
    this._vulnerability = config.vulnerability;
    this._wildfireAnalysis = config.wildfireAnalysis;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_filtering - computed: false, optional: true, required: false
  private _dataFiltering?: string[]; 
  public get dataFiltering() {
    return this.getListAttribute('data_filtering');
  }
  public set dataFiltering(value: string[]) {
    this._dataFiltering = value;
  }
  public resetDataFiltering() {
    this._dataFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringInput() {
    return this._dataFiltering;
  }

  // disable_override - computed: false, optional: true, required: false
  private _disableOverride?: string; 
  public get disableOverride() {
    return this.getStringAttribute('disable_override');
  }
  public set disableOverride(value: string) {
    this._disableOverride = value;
  }
  public resetDisableOverride() {
    this._disableOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOverrideInput() {
    return this._disableOverride;
  }

  // file_blocking - computed: false, optional: true, required: false
  private _fileBlocking?: string[]; 
  public get fileBlocking() {
    return this.getListAttribute('file_blocking');
  }
  public set fileBlocking(value: string[]) {
    this._fileBlocking = value;
  }
  public resetFileBlocking() {
    this._fileBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingInput() {
    return this._fileBlocking;
  }

  // gtp - computed: false, optional: true, required: false
  private _gtp?: string[]; 
  public get gtp() {
    return this.getListAttribute('gtp');
  }
  public set gtp(value: string[]) {
    this._gtp = value;
  }
  public resetGtp() {
    this._gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
  }

  // location - computed: false, optional: false, required: true
  private _location = new SecurityProfileGroupLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: SecurityProfileGroupLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // sctp - computed: false, optional: true, required: false
  private _sctp?: string[]; 
  public get sctp() {
    return this.getListAttribute('sctp');
  }
  public set sctp(value: string[]) {
    this._sctp = value;
  }
  public resetSctp() {
    this._sctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpInput() {
    return this._sctp;
  }

  // spyware - computed: false, optional: true, required: false
  private _spyware?: string[]; 
  public get spyware() {
    return this.getListAttribute('spyware');
  }
  public set spyware(value: string[]) {
    this._spyware = value;
  }
  public resetSpyware() {
    this._spyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spywareInput() {
    return this._spyware;
  }

  // url_filtering - computed: false, optional: true, required: false
  private _urlFiltering?: string[]; 
  public get urlFiltering() {
    return this.getListAttribute('url_filtering');
  }
  public set urlFiltering(value: string[]) {
    this._urlFiltering = value;
  }
  public resetUrlFiltering() {
    this._urlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringInput() {
    return this._urlFiltering;
  }

  // virus - computed: false, optional: true, required: false
  private _virus?: string[]; 
  public get virus() {
    return this.getListAttribute('virus');
  }
  public set virus(value: string[]) {
    this._virus = value;
  }
  public resetVirus() {
    this._virus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusInput() {
    return this._virus;
  }

  // vulnerability - computed: false, optional: true, required: false
  private _vulnerability?: string[]; 
  public get vulnerability() {
    return this.getListAttribute('vulnerability');
  }
  public set vulnerability(value: string[]) {
    this._vulnerability = value;
  }
  public resetVulnerability() {
    this._vulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability;
  }

  // wildfire_analysis - computed: false, optional: true, required: false
  private _wildfireAnalysis?: string[]; 
  public get wildfireAnalysis() {
    return this.getListAttribute('wildfire_analysis');
  }
  public set wildfireAnalysis(value: string[]) {
    this._wildfireAnalysis = value;
  }
  public resetWildfireAnalysis() {
    this._wildfireAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisInput() {
    return this._wildfireAnalysis;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_filtering: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataFiltering),
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      file_blocking: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileBlocking),
      gtp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gtp),
      location: securityProfileGroupLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      sctp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sctp),
      spyware: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spyware),
      url_filtering: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlFiltering),
      virus: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virus),
      vulnerability: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vulnerability),
      wildfire_analysis: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wildfireAnalysis),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_filtering: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataFiltering),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disable_override: {
        value: cdktf.stringToHclTerraform(this._disableOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_blocking: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileBlocking),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gtp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gtp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: securityProfileGroupLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityProfileGroupLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sctp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      spyware: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spyware),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      url_filtering: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlFiltering),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virus: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vulnerability: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vulnerability),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wildfire_analysis: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wildfireAnalysis),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
