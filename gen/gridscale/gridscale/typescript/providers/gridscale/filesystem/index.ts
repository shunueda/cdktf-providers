// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilesystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed CIDR block or IP address in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#allowed_ip_ranges Filesystem#allowed_ip_ranges}
  */
  readonly allowedIpRanges?: string[];
  /**
  * Target group id when root squash is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#anon_gid Filesystem#anon_gid}
  */
  readonly anonGid?: number;
  /**
  * Target user id when root squash is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#anon_uid Filesystem#anon_uid}
  */
  readonly anonUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#id Filesystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#labels Filesystem#labels}
  */
  readonly labels?: string[];
  /**
  * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#name Filesystem#name}
  */
  readonly name: string;
  /**
  * The UUID of the network that the service is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#network_uuid Filesystem#network_uuid}
  */
  readonly networkUuid?: string;
  /**
  * Performance class of Filesystem service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#performance_class Filesystem#performance_class}
  */
  readonly performanceClass: string;
  /**
  * The Filesystem service release of this instance.\n
  * 				For convenience, please use gscloud https://github.com/gridscale/gscloud to get the list of available Filesystem service releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#release Filesystem#release}
  */
  readonly release: string;
  /**
  * Map root user/group ownership to anon_uid/anon_gid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#root_squash Filesystem#root_squash}
  */
  readonly rootSquash?: boolean | cdktf.IResolvable;
  /**
  * Security zone UUID linked to Filesystem service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#security_zone_uuid Filesystem#security_zone_uuid}
  */
  readonly securityZoneUuid?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#timeouts Filesystem#timeouts}
  */
  readonly timeouts?: FilesystemTimeouts;
}
export interface FilesystemListenPort {
}

export function filesystemListenPortToTerraform(struct?: FilesystemListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function filesystemListenPortToHclTerraform(struct?: FilesystemListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FilesystemListenPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilesystemListenPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilesystemListenPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class FilesystemListenPortList extends cdktf.ComplexList {

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
  public get(index: number): FilesystemListenPortOutputReference {
    return new FilesystemListenPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilesystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#create Filesystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#delete Filesystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#update Filesystem#update}
  */
  readonly update?: string;
}

export function filesystemTimeoutsToTerraform(struct?: FilesystemTimeouts | cdktf.IResolvable): any {
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


export function filesystemTimeoutsToHclTerraform(struct?: FilesystemTimeouts | cdktf.IResolvable): any {
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

export class FilesystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FilesystemTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FilesystemTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem gridscale_filesystem}
*/
export class Filesystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_filesystem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Filesystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Filesystem to import
  * @param importFromId The id of the existing Filesystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Filesystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_filesystem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/filesystem gridscale_filesystem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilesystemConfig
  */
  public constructor(scope: Construct, id: string, config: FilesystemConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_filesystem',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedIpRanges = config.allowedIpRanges;
    this._anonGid = config.anonGid;
    this._anonUid = config.anonUid;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._networkUuid = config.networkUuid;
    this._performanceClass = config.performanceClass;
    this._release = config.release;
    this._rootSquash = config.rootSquash;
    this._securityZoneUuid = config.securityZoneUuid;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ip_ranges - computed: false, optional: true, required: false
  private _allowedIpRanges?: string[]; 
  public get allowedIpRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ip_ranges'));
  }
  public set allowedIpRanges(value: string[]) {
    this._allowedIpRanges = value;
  }
  public resetAllowedIpRanges() {
    this._allowedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpRangesInput() {
    return this._allowedIpRanges;
  }

  // anon_gid - computed: false, optional: true, required: false
  private _anonGid?: number; 
  public get anonGid() {
    return this.getNumberAttribute('anon_gid');
  }
  public set anonGid(value: number) {
    this._anonGid = value;
  }
  public resetAnonGid() {
    this._anonGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonGidInput() {
    return this._anonGid;
  }

  // anon_uid - computed: false, optional: true, required: false
  private _anonUid?: number; 
  public get anonUid() {
    return this.getNumberAttribute('anon_uid');
  }
  public set anonUid(value: number) {
    this._anonUid = value;
  }
  public resetAnonUid() {
    this._anonUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonUidInput() {
    return this._anonUid;
  }

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // listen_port - computed: true, optional: false, required: false
  private _listenPort = new FilesystemListenPortList(this, "listen_port", true);
  public get listenPort() {
    return this._listenPort;
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

  // network_uuid - computed: true, optional: true, required: false
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  public resetNetworkUuid() {
    this._networkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // performance_class - computed: false, optional: false, required: true
  private _performanceClass?: string; 
  public get performanceClass() {
    return this.getStringAttribute('performance_class');
  }
  public set performanceClass(value: string) {
    this._performanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceClassInput() {
    return this._performanceClass;
  }

  // release - computed: false, optional: false, required: true
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // root_squash - computed: false, optional: true, required: false
  private _rootSquash?: boolean | cdktf.IResolvable; 
  public get rootSquash() {
    return this.getBooleanAttribute('root_squash');
  }
  public set rootSquash(value: boolean | cdktf.IResolvable) {
    this._rootSquash = value;
  }
  public resetRootSquash() {
    this._rootSquash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashInput() {
    return this._rootSquash;
  }

  // security_zone_uuid - computed: true, optional: true, required: false
  private _securityZoneUuid?: string; 
  public get securityZoneUuid() {
    return this.getStringAttribute('security_zone_uuid');
  }
  public set securityZoneUuid(value: string) {
    this._securityZoneUuid = value;
  }
  public resetSecurityZoneUuid() {
    this._securityZoneUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneUuidInput() {
    return this._securityZoneUuid;
  }

  // service_template_category - computed: true, optional: false, required: false
  public get serviceTemplateCategory() {
    return this.getStringAttribute('service_template_category');
  }

  // service_template_uuid - computed: true, optional: false, required: false
  public get serviceTemplateUuid() {
    return this.getStringAttribute('service_template_uuid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // usage_in_minutes - computed: true, optional: false, required: false
  public get usageInMinutes() {
    return this.getNumberAttribute('usage_in_minutes');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FilesystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FilesystemTimeouts) {
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
      allowed_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIpRanges),
      anon_gid: cdktf.numberToTerraform(this._anonGid),
      anon_uid: cdktf.numberToTerraform(this._anonUid),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_uuid: cdktf.stringToTerraform(this._networkUuid),
      performance_class: cdktf.stringToTerraform(this._performanceClass),
      release: cdktf.stringToTerraform(this._release),
      root_squash: cdktf.booleanToTerraform(this._rootSquash),
      security_zone_uuid: cdktf.stringToTerraform(this._securityZoneUuid),
      timeouts: filesystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIpRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      anon_gid: {
        value: cdktf.numberToHclTerraform(this._anonGid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anon_uid: {
        value: cdktf.numberToHclTerraform(this._anonUid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
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
      network_uuid: {
        value: cdktf.stringToHclTerraform(this._networkUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_class: {
        value: cdktf.stringToHclTerraform(this._performanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release: {
        value: cdktf.stringToHclTerraform(this._release),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_squash: {
        value: cdktf.booleanToHclTerraform(this._rootSquash),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_zone_uuid: {
        value: cdktf.stringToHclTerraform(this._securityZoneUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: filesystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FilesystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
