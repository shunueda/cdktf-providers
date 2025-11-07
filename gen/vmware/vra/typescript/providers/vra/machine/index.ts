// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * By default, disks are attached after the machine has been built. FCDs cannot be attached to machine as a day 0 task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#attach_disks_before_boot Machine#attach_disks_before_boot}
  */
  readonly attachDisksBeforeBoot?: boolean | cdktf.IResolvable;
  /**
  * Additional custom properties that may be used to extend the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#custom_properties Machine#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * The id of the deployment that is associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#deployment_id Machine#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Describes machine within the scope of your organization and is not propagated to the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#description Machine#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#flavor Machine#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#id Machine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of image used for this machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#image Machine#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#image_ref Machine#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#name Machine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#project_id Machine#project_id}
  */
  readonly projectId: string;
  /**
  * boot_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#boot_config Machine#boot_config}
  */
  readonly bootConfig?: MachineBootConfig;
  /**
  * constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#constraints Machine#constraints}
  */
  readonly constraints?: MachineConstraints[] | cdktf.IResolvable;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#disks Machine#disks}
  */
  readonly disks?: MachineDisks[] | cdktf.IResolvable;
  /**
  * image_disk_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#image_disk_constraints Machine#image_disk_constraints}
  */
  readonly imageDiskConstraints?: MachineImageDiskConstraints[] | cdktf.IResolvable;
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#nics Machine#nics}
  */
  readonly nics?: MachineNics[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#tags Machine#tags}
  */
  readonly tags?: MachineTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#timeouts Machine#timeouts}
  */
  readonly timeouts?: MachineTimeouts;
}
export interface MachineDisksListStruct {
}

export function machineDisksListStructToTerraform(struct?: MachineDisksListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineDisksListStructToHclTerraform(struct?: MachineDisksListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineDisksListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MachineDisksListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineDisksListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_device_id - computed: true, optional: false, required: false
  public get blockDeviceId() {
    return this.getStringAttribute('block_device_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scsi_controller - computed: true, optional: false, required: false
  public get scsiController() {
    return this.getStringAttribute('scsi_controller');
  }

  // unit_number - computed: true, optional: false, required: false
  public get unitNumber() {
    return this.getStringAttribute('unit_number');
  }
}

export class MachineDisksListStructList extends cdktf.ComplexList {

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
  public get(index: number): MachineDisksListStructOutputReference {
    return new MachineDisksListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineLinks {
}

export function machineLinksToTerraform(struct?: MachineLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineLinksToHclTerraform(struct?: MachineLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MachineLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // hrefs - computed: true, optional: false, required: false
  public get hrefs() {
    return cdktf.Fn.tolist(this.getListAttribute('hrefs'));
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class MachineLinksList extends cdktf.ComplexList {

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
  public get(index: number): MachineLinksOutputReference {
    return new MachineLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineBootConfig {
  /**
  * A valid cloud config data in json-escaped yaml syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#content Machine#content}
  */
  readonly content?: string;
}

export function machineBootConfigToTerraform(struct?: MachineBootConfigOutputReference | MachineBootConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function machineBootConfigToHclTerraform(struct?: MachineBootConfigOutputReference | MachineBootConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineBootConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineBootConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineBootConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}
export interface MachineConstraints {
  /**
  * An expression of the form "[!]tag-key[:[tag-value]]", used to indicate a constraint match on keys and values of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#expression Machine#expression}
  */
  readonly expression: string;
  /**
  * Indicates whether this constraint should be strictly enforced or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#mandatory Machine#mandatory}
  */
  readonly mandatory: boolean | cdktf.IResolvable;
}

export function machineConstraintsToTerraform(struct?: MachineConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
  }
}


export function machineConstraintsToHclTerraform(struct?: MachineConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory: {
      value: cdktf.booleanToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._mandatory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._mandatory = value.mandatory;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // mandatory - computed: false, optional: false, required: true
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }
}

export class MachineConstraintsList extends cdktf.ComplexList {
  public internalValue? : MachineConstraints[] | cdktf.IResolvable

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
  public get(index: number): MachineConstraintsOutputReference {
    return new MachineConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineDisks {
  /**
  * The id of the existing block device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#block_device_id Machine#block_device_id}
  */
  readonly blockDeviceId: string;
  /**
  * A human-friendly description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#description Machine#description}
  */
  readonly description?: string;
  /**
  * A human-friendly block-device name used as an identifier in APIs that support this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#name Machine#name}
  */
  readonly name?: string;
  /**
  * The id of the SCSI controller. Example: SCSI_Controller_0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#scsi_controller Machine#scsi_controller}
  */
  readonly scsiController?: string;
  /**
  * The unit number of the SCSI controller. Example: 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#unit_number Machine#unit_number}
  */
  readonly unitNumber?: string;
}

export function machineDisksToTerraform(struct?: MachineDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_device_id: cdktf.stringToTerraform(struct!.blockDeviceId),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    scsi_controller: cdktf.stringToTerraform(struct!.scsiController),
    unit_number: cdktf.stringToTerraform(struct!.unitNumber),
  }
}


export function machineDisksToHclTerraform(struct?: MachineDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_device_id: {
      value: cdktf.stringToHclTerraform(struct!.blockDeviceId),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scsi_controller: {
      value: cdktf.stringToHclTerraform(struct!.scsiController),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_number: {
      value: cdktf.stringToHclTerraform(struct!.unitNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDeviceId = this._blockDeviceId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scsiController !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsiController = this._scsiController;
    }
    if (this._unitNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitNumber = this._unitNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockDeviceId = undefined;
      this._description = undefined;
      this._name = undefined;
      this._scsiController = undefined;
      this._unitNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockDeviceId = value.blockDeviceId;
      this._description = value.description;
      this._name = value.name;
      this._scsiController = value.scsiController;
      this._unitNumber = value.unitNumber;
    }
  }

  // block_device_id - computed: false, optional: false, required: true
  private _blockDeviceId?: string; 
  public get blockDeviceId() {
    return this.getStringAttribute('block_device_id');
  }
  public set blockDeviceId(value: string) {
    this._blockDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceIdInput() {
    return this._blockDeviceId;
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

  // scsi_controller - computed: false, optional: true, required: false
  private _scsiController?: string; 
  public get scsiController() {
    return this.getStringAttribute('scsi_controller');
  }
  public set scsiController(value: string) {
    this._scsiController = value;
  }
  public resetScsiController() {
    this._scsiController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiControllerInput() {
    return this._scsiController;
  }

  // unit_number - computed: false, optional: true, required: false
  private _unitNumber?: string; 
  public get unitNumber() {
    return this.getStringAttribute('unit_number');
  }
  public set unitNumber(value: string) {
    this._unitNumber = value;
  }
  public resetUnitNumber() {
    this._unitNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNumberInput() {
    return this._unitNumber;
  }
}

export class MachineDisksList extends cdktf.ComplexList {
  public internalValue? : MachineDisks[] | cdktf.IResolvable

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
  public get(index: number): MachineDisksOutputReference {
    return new MachineDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineImageDiskConstraints {
  /**
  * An expression of the form "[!]tag-key[:[tag-value]]", used to indicate a constraint match on keys and values of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#expression Machine#expression}
  */
  readonly expression: string;
  /**
  * Indicates whether this constraint should be strictly enforced or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#mandatory Machine#mandatory}
  */
  readonly mandatory: boolean | cdktf.IResolvable;
}

export function machineImageDiskConstraintsToTerraform(struct?: MachineImageDiskConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
  }
}


export function machineImageDiskConstraintsToHclTerraform(struct?: MachineImageDiskConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory: {
      value: cdktf.booleanToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineImageDiskConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineImageDiskConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineImageDiskConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._mandatory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._mandatory = value.mandatory;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // mandatory - computed: false, optional: false, required: true
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }
}

export class MachineImageDiskConstraintsList extends cdktf.ComplexList {
  public internalValue? : MachineImageDiskConstraints[] | cdktf.IResolvable

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
  public get(index: number): MachineImageDiskConstraintsOutputReference {
    return new MachineImageDiskConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineNics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#addresses Machine#addresses}
  */
  readonly addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#custom_properties Machine#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#description Machine#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#device_index Machine#device_index}
  */
  readonly deviceIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#name Machine#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#network_id Machine#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#security_group_ids Machine#security_group_ids}
  */
  readonly securityGroupIds?: string[];
}

export function machineNicsToTerraform(struct?: MachineNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    custom_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customProperties),
    description: cdktf.stringToTerraform(struct!.description),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
  }
}


export function machineNicsToHclTerraform(struct?: MachineNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_index: {
      value: cdktf.numberToHclTerraform(struct!.deviceIndex),
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
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineNics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIndex = this._deviceIndex;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineNics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._customProperties = undefined;
      this._description = undefined;
      this._deviceIndex = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._securityGroupIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._customProperties = value.customProperties;
      this._description = value.description;
      this._deviceIndex = value.deviceIndex;
      this._name = value.name;
      this._networkId = value.networkId;
      this._securityGroupIds = value.securityGroupIds;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
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

  // device_index - computed: false, optional: true, required: false
  private _deviceIndex?: number; 
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }
  public set deviceIndex(value: number) {
    this._deviceIndex = value;
  }
  public resetDeviceIndex() {
    this._deviceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIndexInput() {
    return this._deviceIndex;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }
}

export class MachineNicsList extends cdktf.ComplexList {
  public internalValue? : MachineNics[] | cdktf.IResolvable

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
  public get(index: number): MachineNicsOutputReference {
    return new MachineNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#key Machine#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#value Machine#value}
  */
  readonly value: string;
}

export function machineTagsToTerraform(struct?: MachineTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function machineTagsToHclTerraform(struct?: MachineTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MachineTagsList extends cdktf.ComplexList {
  public internalValue? : MachineTags[] | cdktf.IResolvable

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
  public get(index: number): MachineTagsOutputReference {
    return new MachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#create Machine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#delete Machine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#update Machine#update}
  */
  readonly update?: string;
}

export function machineTimeoutsToTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function machineTimeoutsToHclTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine vra_machine}
*/
export class Machine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Machine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Machine to import
  * @param importFromId The id of the existing Machine that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Machine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/machine vra_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineConfig
  */
  public constructor(scope: Construct, id: string, config: MachineConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_machine',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachDisksBeforeBoot = config.attachDisksBeforeBoot;
    this._customProperties = config.customProperties;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._flavor = config.flavor;
    this._id = config.id;
    this._image = config.image;
    this._imageRef = config.imageRef;
    this._name = config.name;
    this._projectId = config.projectId;
    this._bootConfig.internalValue = config.bootConfig;
    this._constraints.internalValue = config.constraints;
    this._disks.internalValue = config.disks;
    this._imageDiskConstraints.internalValue = config.imageDiskConstraints;
    this._nics.internalValue = config.nics;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // attach_disks_before_boot - computed: false, optional: true, required: false
  private _attachDisksBeforeBoot?: boolean | cdktf.IResolvable; 
  public get attachDisksBeforeBoot() {
    return this.getBooleanAttribute('attach_disks_before_boot');
  }
  public set attachDisksBeforeBoot(value: boolean | cdktf.IResolvable) {
    this._attachDisksBeforeBoot = value;
  }
  public resetAttachDisksBeforeBoot() {
    this._attachDisksBeforeBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachDisksBeforeBootInput() {
    return this._attachDisksBeforeBoot;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_properties - computed: true, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
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

  // disks_list - computed: true, optional: false, required: false
  private _disksList = new MachineDisksListStructList(this, "disks_list", true);
  public get disksList() {
    return this._disksList;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // external_region_id - computed: true, optional: false, required: false
  public get externalRegionId() {
    return this.getStringAttribute('external_region_id');
  }

  // external_zone_id - computed: true, optional: false, required: false
  public get externalZoneId() {
    return this.getStringAttribute('external_zone_id');
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_ref - computed: false, optional: true, required: false
  private _imageRef?: string; 
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }
  public set imageRef(value: string) {
    this._imageRef = value;
  }
  public resetImageRef() {
    this._imageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRefInput() {
    return this._imageRef;
  }

  // links - computed: true, optional: false, required: false
  private _links = new MachineLinksList(this, "links", true);
  public get links() {
    return this._links;
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // boot_config - computed: false, optional: true, required: false
  private _bootConfig = new MachineBootConfigOutputReference(this, "boot_config");
  public get bootConfig() {
    return this._bootConfig;
  }
  public putBootConfig(value: MachineBootConfig) {
    this._bootConfig.internalValue = value;
  }
  public resetBootConfig() {
    this._bootConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootConfigInput() {
    return this._bootConfig.internalValue;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new MachineConstraintsList(this, "constraints", true);
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: MachineConstraints[] | cdktf.IResolvable) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new MachineDisksList(this, "disks", true);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: MachineDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // image_disk_constraints - computed: false, optional: true, required: false
  private _imageDiskConstraints = new MachineImageDiskConstraintsList(this, "image_disk_constraints", true);
  public get imageDiskConstraints() {
    return this._imageDiskConstraints;
  }
  public putImageDiskConstraints(value: MachineImageDiskConstraints[] | cdktf.IResolvable) {
    this._imageDiskConstraints.internalValue = value;
  }
  public resetImageDiskConstraints() {
    this._imageDiskConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDiskConstraintsInput() {
    return this._imageDiskConstraints.internalValue;
  }

  // nics - computed: false, optional: true, required: false
  private _nics = new MachineNicsList(this, "nics", true);
  public get nics() {
    return this._nics;
  }
  public putNics(value: MachineNics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new MachineTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MachineTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineTimeouts) {
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
      attach_disks_before_boot: cdktf.booleanToTerraform(this._attachDisksBeforeBoot),
      custom_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._customProperties),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      description: cdktf.stringToTerraform(this._description),
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      image_ref: cdktf.stringToTerraform(this._imageRef),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      boot_config: machineBootConfigToTerraform(this._bootConfig.internalValue),
      constraints: cdktf.listMapper(machineConstraintsToTerraform, true)(this._constraints.internalValue),
      disks: cdktf.listMapper(machineDisksToTerraform, true)(this._disks.internalValue),
      image_disk_constraints: cdktf.listMapper(machineImageDiskConstraintsToTerraform, true)(this._imageDiskConstraints.internalValue),
      nics: cdktf.listMapper(machineNicsToTerraform, true)(this._nics.internalValue),
      tags: cdktf.listMapper(machineTagsToTerraform, true)(this._tags.internalValue),
      timeouts: machineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_disks_before_boot: {
        value: cdktf.booleanToHclTerraform(this._attachDisksBeforeBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_ref: {
        value: cdktf.stringToHclTerraform(this._imageRef),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_config: {
        value: machineBootConfigToHclTerraform(this._bootConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineBootConfigList",
      },
      constraints: {
        value: cdktf.listMapperHcl(machineConstraintsToHclTerraform, true)(this._constraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineConstraintsList",
      },
      disks: {
        value: cdktf.listMapperHcl(machineDisksToHclTerraform, true)(this._disks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineDisksList",
      },
      image_disk_constraints: {
        value: cdktf.listMapperHcl(machineImageDiskConstraintsToHclTerraform, true)(this._imageDiskConstraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineImageDiskConstraintsList",
      },
      nics: {
        value: cdktf.listMapperHcl(machineNicsToHclTerraform, true)(this._nics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineNicsList",
      },
      tags: {
        value: cdktf.listMapperHcl(machineTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineTagsList",
      },
      timeouts: {
        value: machineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
