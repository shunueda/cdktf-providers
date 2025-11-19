// https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSegmentSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source#id DataSegmentSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source#name DataSegmentSource#name}
  */
  readonly name?: string;
}
export interface DataSegmentSourceLabels {
}

export function dataSegmentSourceLabelsToTerraform(struct?: DataSegmentSourceLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentSourceLabelsToHclTerraform(struct?: DataSegmentSourceLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentSourceLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSegmentSourceLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSegmentSourceLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataSegmentSourceLabelsOutputReference {
    return new DataSegmentSourceLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSegmentSourceMetadataLogos {
}

export function dataSegmentSourceMetadataLogosToTerraform(struct?: DataSegmentSourceMetadataLogos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentSourceMetadataLogosToHclTerraform(struct?: DataSegmentSourceMetadataLogos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentSourceMetadataLogosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentSourceMetadataLogos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceMetadataLogos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alt - computed: true, optional: false, required: false
  public get alt() {
    return this.getStringAttribute('alt');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // mark - computed: true, optional: false, required: false
  public get mark() {
    return this.getStringAttribute('mark');
  }
}
export interface DataSegmentSourceMetadataOptions {
}

export function dataSegmentSourceMetadataOptionsToTerraform(struct?: DataSegmentSourceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentSourceMetadataOptionsToHclTerraform(struct?: DataSegmentSourceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentSourceMetadataOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSegmentSourceMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSegmentSourceMetadataOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSegmentSourceMetadataOptionsOutputReference {
    return new DataSegmentSourceMetadataOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSegmentSourceMetadata {
}

export function dataSegmentSourceMetadataToTerraform(struct?: DataSegmentSourceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentSourceMetadataToHclTerraform(struct?: DataSegmentSourceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentSourceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentSourceMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_cloud_event_source - computed: true, optional: false, required: false
  public get isCloudEventSource() {
    return this.getBooleanAttribute('is_cloud_event_source');
  }

  // logos - computed: true, optional: false, required: false
  private _logos = new DataSegmentSourceMetadataLogosOutputReference(this, "logos");
  public get logos() {
    return this._logos;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataSegmentSourceMetadataOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}
export interface DataSegmentSourceSchemaSettingsGroup {
}

export function dataSegmentSourceSchemaSettingsGroupToTerraform(struct?: DataSegmentSourceSchemaSettingsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentSourceSchemaSettingsGroupToHclTerraform(struct?: DataSegmentSourceSchemaSettingsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentSourceSchemaSettingsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentSourceSchemaSettingsGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceSchemaSettingsGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_traits_on_violations - computed: true, optional: false, required: false
  public get allowTraitsOnViolations() {
    return this.getBooleanAttribute('allow_traits_on_violations');
  }

  // allow_unplanned_traits - computed: true, optional: false, required: false
  public get allowUnplannedTraits() {
    return this.getBooleanAttribute('allow_unplanned_traits');
  }

  // common_event_on_violations - computed: true, optional: false, required: false
  public get commonEventOnViolations() {
    return this.getStringAttribute('common_event_on_violations');
  }
}
export interface DataSegmentSourceSchemaSettingsIdentify {
}

export function dataSegmentSourceSchemaSettingsIdentifyToTerraform(struct?: DataSegmentSourceSchemaSettingsIdentify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentSourceSchemaSettingsIdentifyToHclTerraform(struct?: DataSegmentSourceSchemaSettingsIdentify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentSourceSchemaSettingsIdentifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentSourceSchemaSettingsIdentify | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceSchemaSettingsIdentify | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_traits_on_violations - computed: true, optional: false, required: false
  public get allowTraitsOnViolations() {
    return this.getBooleanAttribute('allow_traits_on_violations');
  }

  // allow_unplanned_traits - computed: true, optional: false, required: false
  public get allowUnplannedTraits() {
    return this.getBooleanAttribute('allow_unplanned_traits');
  }

  // common_event_on_violations - computed: true, optional: false, required: false
  public get commonEventOnViolations() {
    return this.getStringAttribute('common_event_on_violations');
  }
}
export interface DataSegmentSourceSchemaSettingsTrack {
}

export function dataSegmentSourceSchemaSettingsTrackToTerraform(struct?: DataSegmentSourceSchemaSettingsTrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentSourceSchemaSettingsTrackToHclTerraform(struct?: DataSegmentSourceSchemaSettingsTrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentSourceSchemaSettingsTrackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentSourceSchemaSettingsTrack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceSchemaSettingsTrack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_event_on_violations - computed: true, optional: false, required: false
  public get allowEventOnViolations() {
    return this.getBooleanAttribute('allow_event_on_violations');
  }

  // allow_properties_on_violations - computed: true, optional: false, required: false
  public get allowPropertiesOnViolations() {
    return this.getBooleanAttribute('allow_properties_on_violations');
  }

  // allow_unplanned_event_properties - computed: true, optional: false, required: false
  public get allowUnplannedEventProperties() {
    return this.getBooleanAttribute('allow_unplanned_event_properties');
  }

  // allow_unplanned_events - computed: true, optional: false, required: false
  public get allowUnplannedEvents() {
    return this.getBooleanAttribute('allow_unplanned_events');
  }

  // common_event_on_violations - computed: true, optional: false, required: false
  public get commonEventOnViolations() {
    return this.getStringAttribute('common_event_on_violations');
  }
}
export interface DataSegmentSourceSchemaSettings {
}

export function dataSegmentSourceSchemaSettingsToTerraform(struct?: DataSegmentSourceSchemaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentSourceSchemaSettingsToHclTerraform(struct?: DataSegmentSourceSchemaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentSourceSchemaSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentSourceSchemaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceSchemaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forwarding_blocked_events_to - computed: true, optional: false, required: false
  public get forwardingBlockedEventsTo() {
    return this.getStringAttribute('forwarding_blocked_events_to');
  }

  // forwarding_violations_to - computed: true, optional: false, required: false
  public get forwardingViolationsTo() {
    return this.getStringAttribute('forwarding_violations_to');
  }

  // group - computed: true, optional: false, required: false
  private _group = new DataSegmentSourceSchemaSettingsGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }

  // identify - computed: true, optional: false, required: false
  private _identify = new DataSegmentSourceSchemaSettingsIdentifyOutputReference(this, "identify");
  public get identify() {
    return this._identify;
  }

  // track - computed: true, optional: false, required: false
  private _track = new DataSegmentSourceSchemaSettingsTrackOutputReference(this, "track");
  public get track() {
    return this._track;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source segment_source}
*/
export class DataSegmentSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "segment_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSegmentSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSegmentSource to import
  * @param importFromId The id of the existing DataSegmentSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSegmentSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "segment_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source segment_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSegmentSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSegmentSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'segment_source',
      terraformGeneratorMetadata: {
        providerName: 'segment',
        providerVersion: '1.6.1',
        providerVersionConstraint: '1.6.1'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataSegmentSourceLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataSegmentSourceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // schema_settings - computed: true, optional: false, required: false
  private _schemaSettings = new DataSegmentSourceSchemaSettingsOutputReference(this, "schema_settings");
  public get schemaSettings() {
    return this._schemaSettings;
  }

  // settings - computed: true, optional: false, required: false
  public get settings() {
    return this.getStringAttribute('settings');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // write_keys - computed: true, optional: false, required: false
  public get writeKeys() {
    return this.getListAttribute('write_keys');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
