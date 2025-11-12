// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointProtectionProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#antiransomware EndpointProtectionProfiles#antiransomware}
  */
  readonly antiransomware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#antivirus EndpointProtectionProfiles#antivirus}
  */
  readonly antivirus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#automatic_vulnerability_patch_level EndpointProtectionProfiles#automatic_vulnerability_patch_level}
  */
  readonly automaticVulnerabilityPatchLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#automatically_patch_vulnerabilities EndpointProtectionProfiles#automatically_patch_vulnerabilities}
  */
  readonly automaticallyPatchVulnerabilities?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#default_action EndpointProtectionProfiles#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#event_based_scanning EndpointProtectionProfiles#event_based_scanning}
  */
  readonly eventBasedScanning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#exclusions EndpointProtectionProfiles#exclusions}
  */
  readonly exclusions?: EndpointProtectionProfilesExclusions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#notify_endpoint_of_blocks EndpointProtectionProfiles#notify_endpoint_of_blocks}
  */
  readonly notifyEndpointOfBlocks?: string;
  /**
  * The primary key of the object. Can be found in the response from the get request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#primary_key EndpointProtectionProfiles#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#protected_folders_path EndpointProtectionProfiles#protected_folders_path}
  */
  readonly protectedFoldersPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#rules EndpointProtectionProfiles#rules}
  */
  readonly rules?: EndpointProtectionProfilesRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#scheduled_scan EndpointProtectionProfiles#scheduled_scan}
  */
  readonly scheduledScan?: EndpointProtectionProfilesScheduledScan;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#vulnerability_scan EndpointProtectionProfiles#vulnerability_scan}
  */
  readonly vulnerabilityScan?: string;
}
export interface EndpointProtectionProfilesExclusions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#files EndpointProtectionProfiles#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#folders EndpointProtectionProfiles#folders}
  */
  readonly folders?: string[];
}

export function endpointProtectionProfilesExclusionsToTerraform(struct?: EndpointProtectionProfilesExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.files),
    folders: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.folders),
  }
}


export function endpointProtectionProfilesExclusionsToHclTerraform(struct?: EndpointProtectionProfilesExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.files),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    folders: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.folders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointProtectionProfilesExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EndpointProtectionProfilesExclusions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._folders !== undefined) {
      hasAnyValues = true;
      internalValueResult.folders = this._folders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointProtectionProfilesExclusions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files = undefined;
      this._folders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files = value.files;
      this._folders = value.folders;
    }
  }

  // files - computed: true, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return cdktf.Fn.tolist(this.getListAttribute('files'));
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // folders - computed: true, optional: true, required: false
  private _folders?: string[]; 
  public get folders() {
    return cdktf.Fn.tolist(this.getListAttribute('folders'));
  }
  public set folders(value: string[]) {
    this._folders = value;
  }
  public resetFolders() {
    this._folders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foldersInput() {
    return this._folders;
  }
}
export interface EndpointProtectionProfilesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#action EndpointProtectionProfiles#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#class EndpointProtectionProfiles#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#description EndpointProtectionProfiles#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#manufacturer EndpointProtectionProfiles#manufacturer}
  */
  readonly manufacturer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#product_id EndpointProtectionProfiles#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#revision EndpointProtectionProfiles#revision}
  */
  readonly revision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#type EndpointProtectionProfiles#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#vendor_id EndpointProtectionProfiles#vendor_id}
  */
  readonly vendorId?: string;
}

export function endpointProtectionProfilesRulesToTerraform(struct?: EndpointProtectionProfilesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    class: cdktf.stringToTerraform(struct!.class),
    description: cdktf.stringToTerraform(struct!.description),
    manufacturer: cdktf.stringToTerraform(struct!.manufacturer),
    product_id: cdktf.stringToTerraform(struct!.productId),
    revision: cdktf.stringToTerraform(struct!.revision),
    type: cdktf.stringToTerraform(struct!.type),
    vendor_id: cdktf.stringToTerraform(struct!.vendorId),
  }
}


export function endpointProtectionProfilesRulesToHclTerraform(struct?: EndpointProtectionProfilesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
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
    manufacturer: {
      value: cdktf.stringToHclTerraform(struct!.manufacturer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_id: {
      value: cdktf.stringToHclTerraform(struct!.productId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_id: {
      value: cdktf.stringToHclTerraform(struct!.vendorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointProtectionProfilesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointProtectionProfilesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._manufacturer !== undefined) {
      hasAnyValues = true;
      internalValueResult.manufacturer = this._manufacturer;
    }
    if (this._productId !== undefined) {
      hasAnyValues = true;
      internalValueResult.productId = this._productId;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vendorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorId = this._vendorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointProtectionProfilesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._class = undefined;
      this._description = undefined;
      this._manufacturer = undefined;
      this._productId = undefined;
      this._revision = undefined;
      this._type = undefined;
      this._vendorId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._class = value.class;
      this._description = value.description;
      this._manufacturer = value.manufacturer;
      this._productId = value.productId;
      this._revision = value.revision;
      this._type = value.type;
      this._vendorId = value.vendorId;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // class - computed: true, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // description - computed: true, optional: true, required: false
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

  // manufacturer - computed: true, optional: true, required: false
  private _manufacturer?: string; 
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }
  public set manufacturer(value: string) {
    this._manufacturer = value;
  }
  public resetManufacturer() {
    this._manufacturer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerInput() {
    return this._manufacturer;
  }

  // product_id - computed: true, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // revision - computed: true, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vendor_id - computed: true, optional: true, required: false
  private _vendorId?: string; 
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
  public set vendorId(value: string) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }
}

export class EndpointProtectionProfilesRulesList extends cdktf.ComplexList {
  public internalValue? : EndpointProtectionProfilesRules[] | cdktf.IResolvable

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
  public get(index: number): EndpointProtectionProfilesRulesOutputReference {
    return new EndpointProtectionProfilesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointProtectionProfilesScheduledScan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#day EndpointProtectionProfiles#day}
  */
  readonly day?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#repeat EndpointProtectionProfiles#repeat}
  */
  readonly repeat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#time EndpointProtectionProfiles#time}
  */
  readonly time?: string;
}

export function endpointProtectionProfilesScheduledScanToTerraform(struct?: EndpointProtectionProfilesScheduledScan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function endpointProtectionProfilesScheduledScanToHclTerraform(struct?: EndpointProtectionProfilesScheduledScan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointProtectionProfilesScheduledScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EndpointProtectionProfilesScheduledScan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointProtectionProfilesScheduledScan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._repeat = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._repeat = value.repeat;
      this._time = value.time;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time - computed: true, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles fortisase_endpoint_protection_profiles}
*/
export class EndpointProtectionProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoint_protection_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointProtectionProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointProtectionProfiles to import
  * @param importFromId The id of the existing EndpointProtectionProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointProtectionProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoint_protection_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_protection_profiles fortisase_endpoint_protection_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointProtectionProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointProtectionProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoint_protection_profiles',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiransomware = config.antiransomware;
    this._antivirus = config.antivirus;
    this._automaticVulnerabilityPatchLevel = config.automaticVulnerabilityPatchLevel;
    this._automaticallyPatchVulnerabilities = config.automaticallyPatchVulnerabilities;
    this._defaultAction = config.defaultAction;
    this._eventBasedScanning = config.eventBasedScanning;
    this._exclusions.internalValue = config.exclusions;
    this._notifyEndpointOfBlocks = config.notifyEndpointOfBlocks;
    this._primaryKey = config.primaryKey;
    this._protectedFoldersPath = config.protectedFoldersPath;
    this._rules.internalValue = config.rules;
    this._scheduledScan.internalValue = config.scheduledScan;
    this._vulnerabilityScan = config.vulnerabilityScan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // antiransomware - computed: true, optional: true, required: false
  private _antiransomware?: string; 
  public get antiransomware() {
    return this.getStringAttribute('antiransomware');
  }
  public set antiransomware(value: string) {
    this._antiransomware = value;
  }
  public resetAntiransomware() {
    this._antiransomware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiransomwareInput() {
    return this._antiransomware;
  }

  // antivirus - computed: true, optional: true, required: false
  private _antivirus?: string; 
  public get antivirus() {
    return this.getStringAttribute('antivirus');
  }
  public set antivirus(value: string) {
    this._antivirus = value;
  }
  public resetAntivirus() {
    this._antivirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus;
  }

  // automatic_vulnerability_patch_level - computed: true, optional: true, required: false
  private _automaticVulnerabilityPatchLevel?: string; 
  public get automaticVulnerabilityPatchLevel() {
    return this.getStringAttribute('automatic_vulnerability_patch_level');
  }
  public set automaticVulnerabilityPatchLevel(value: string) {
    this._automaticVulnerabilityPatchLevel = value;
  }
  public resetAutomaticVulnerabilityPatchLevel() {
    this._automaticVulnerabilityPatchLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticVulnerabilityPatchLevelInput() {
    return this._automaticVulnerabilityPatchLevel;
  }

  // automatically_patch_vulnerabilities - computed: true, optional: true, required: false
  private _automaticallyPatchVulnerabilities?: string; 
  public get automaticallyPatchVulnerabilities() {
    return this.getStringAttribute('automatically_patch_vulnerabilities');
  }
  public set automaticallyPatchVulnerabilities(value: string) {
    this._automaticallyPatchVulnerabilities = value;
  }
  public resetAutomaticallyPatchVulnerabilities() {
    this._automaticallyPatchVulnerabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticallyPatchVulnerabilitiesInput() {
    return this._automaticallyPatchVulnerabilities;
  }

  // default_action - computed: true, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // event_based_scanning - computed: true, optional: true, required: false
  private _eventBasedScanning?: string; 
  public get eventBasedScanning() {
    return this.getStringAttribute('event_based_scanning');
  }
  public set eventBasedScanning(value: string) {
    this._eventBasedScanning = value;
  }
  public resetEventBasedScanning() {
    this._eventBasedScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBasedScanningInput() {
    return this._eventBasedScanning;
  }

  // exclusions - computed: true, optional: true, required: false
  private _exclusions = new EndpointProtectionProfilesExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: EndpointProtectionProfilesExclusions) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notify_endpoint_of_blocks - computed: true, optional: true, required: false
  private _notifyEndpointOfBlocks?: string; 
  public get notifyEndpointOfBlocks() {
    return this.getStringAttribute('notify_endpoint_of_blocks');
  }
  public set notifyEndpointOfBlocks(value: string) {
    this._notifyEndpointOfBlocks = value;
  }
  public resetNotifyEndpointOfBlocks() {
    this._notifyEndpointOfBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEndpointOfBlocksInput() {
    return this._notifyEndpointOfBlocks;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // protected_folders_path - computed: true, optional: true, required: false
  private _protectedFoldersPath?: string[]; 
  public get protectedFoldersPath() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_folders_path'));
  }
  public set protectedFoldersPath(value: string[]) {
    this._protectedFoldersPath = value;
  }
  public resetProtectedFoldersPath() {
    this._protectedFoldersPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedFoldersPathInput() {
    return this._protectedFoldersPath;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new EndpointProtectionProfilesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EndpointProtectionProfilesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // scheduled_scan - computed: true, optional: true, required: false
  private _scheduledScan = new EndpointProtectionProfilesScheduledScanOutputReference(this, "scheduled_scan");
  public get scheduledScan() {
    return this._scheduledScan;
  }
  public putScheduledScan(value: EndpointProtectionProfilesScheduledScan) {
    this._scheduledScan.internalValue = value;
  }
  public resetScheduledScan() {
    this._scheduledScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledScanInput() {
    return this._scheduledScan.internalValue;
  }

  // vulnerability_scan - computed: true, optional: true, required: false
  private _vulnerabilityScan?: string; 
  public get vulnerabilityScan() {
    return this.getStringAttribute('vulnerability_scan');
  }
  public set vulnerabilityScan(value: string) {
    this._vulnerabilityScan = value;
  }
  public resetVulnerabilityScan() {
    this._vulnerabilityScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityScanInput() {
    return this._vulnerabilityScan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      antiransomware: cdktf.stringToTerraform(this._antiransomware),
      antivirus: cdktf.stringToTerraform(this._antivirus),
      automatic_vulnerability_patch_level: cdktf.stringToTerraform(this._automaticVulnerabilityPatchLevel),
      automatically_patch_vulnerabilities: cdktf.stringToTerraform(this._automaticallyPatchVulnerabilities),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      event_based_scanning: cdktf.stringToTerraform(this._eventBasedScanning),
      exclusions: endpointProtectionProfilesExclusionsToTerraform(this._exclusions.internalValue),
      notify_endpoint_of_blocks: cdktf.stringToTerraform(this._notifyEndpointOfBlocks),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      protected_folders_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protectedFoldersPath),
      rules: cdktf.listMapper(endpointProtectionProfilesRulesToTerraform, false)(this._rules.internalValue),
      scheduled_scan: endpointProtectionProfilesScheduledScanToTerraform(this._scheduledScan.internalValue),
      vulnerability_scan: cdktf.stringToTerraform(this._vulnerabilityScan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      antiransomware: {
        value: cdktf.stringToHclTerraform(this._antiransomware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antivirus: {
        value: cdktf.stringToHclTerraform(this._antivirus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_vulnerability_patch_level: {
        value: cdktf.stringToHclTerraform(this._automaticVulnerabilityPatchLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatically_patch_vulnerabilities: {
        value: cdktf.stringToHclTerraform(this._automaticallyPatchVulnerabilities),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_based_scanning: {
        value: cdktf.stringToHclTerraform(this._eventBasedScanning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusions: {
        value: endpointProtectionProfilesExclusionsToHclTerraform(this._exclusions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EndpointProtectionProfilesExclusions",
      },
      notify_endpoint_of_blocks: {
        value: cdktf.stringToHclTerraform(this._notifyEndpointOfBlocks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_folders_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protectedFoldersPath),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rules: {
        value: cdktf.listMapperHcl(endpointProtectionProfilesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointProtectionProfilesRulesList",
      },
      scheduled_scan: {
        value: endpointProtectionProfilesScheduledScanToHclTerraform(this._scheduledScan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EndpointProtectionProfilesScheduledScan",
      },
      vulnerability_scan: {
        value: cdktf.stringToHclTerraform(this._vulnerabilityScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
