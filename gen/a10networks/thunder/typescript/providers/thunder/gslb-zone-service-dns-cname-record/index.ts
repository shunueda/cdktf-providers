// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbZoneServiceDnsCnameRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify Administrative Preference, default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#admin_preference GslbZoneServiceDnsCnameRecord#admin_preference}
  */
  readonly adminPreference?: number;
  /**
  * Specify the alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#alias_name GslbZoneServiceDnsCnameRecord#alias_name}
  */
  readonly aliasName: string;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#as_backup GslbZoneServiceDnsCnameRecord#as_backup}
  */
  readonly asBackup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#id GslbZoneServiceDnsCnameRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ServiceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#service_name GslbZoneServiceDnsCnameRecord#service_name}
  */
  readonly serviceName: string;
  /**
  * ServicePort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#service_port GslbZoneServiceDnsCnameRecord#service_port}
  */
  readonly servicePort: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#uuid GslbZoneServiceDnsCnameRecord#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify Weight, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#weight GslbZoneServiceDnsCnameRecord#weight}
  */
  readonly weight?: number;
  /**
  * Zone_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#zone_name GslbZoneServiceDnsCnameRecord#zone_name}
  */
  readonly zoneName: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#sampling_enable GslbZoneServiceDnsCnameRecord#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceDnsCnameRecordSamplingEnable[] | cdktf.IResolvable;
}
export interface GslbZoneServiceDnsCnameRecordSamplingEnable {
  /**
  * 'all': all; 'cname-hits': Number of times the CNAME has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#counters1 GslbZoneServiceDnsCnameRecord#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceDnsCnameRecordSamplingEnableToTerraform(struct?: GslbZoneServiceDnsCnameRecordSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceDnsCnameRecordSamplingEnableToHclTerraform(struct?: GslbZoneServiceDnsCnameRecordSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsCnameRecordSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceDnsCnameRecordSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsCnameRecordSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceDnsCnameRecordSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsCnameRecordSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceDnsCnameRecordSamplingEnableOutputReference {
    return new GslbZoneServiceDnsCnameRecordSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record thunder_gslb_zone_service_dns_cname_record}
*/
export class GslbZoneServiceDnsCnameRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service_dns_cname_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbZoneServiceDnsCnameRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbZoneServiceDnsCnameRecord to import
  * @param importFromId The id of the existing GslbZoneServiceDnsCnameRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbZoneServiceDnsCnameRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service_dns_cname_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_dns_cname_record thunder_gslb_zone_service_dns_cname_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbZoneServiceDnsCnameRecordConfig
  */
  public constructor(scope: Construct, id: string, config: GslbZoneServiceDnsCnameRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service_dns_cname_record',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPreference = config.adminPreference;
    this._aliasName = config.aliasName;
    this._asBackup = config.asBackup;
    this._id = config.id;
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
    this._uuid = config.uuid;
    this._weight = config.weight;
    this._zoneName = config.zoneName;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_preference - computed: false, optional: true, required: false
  private _adminPreference?: number; 
  public get adminPreference() {
    return this.getNumberAttribute('admin_preference');
  }
  public set adminPreference(value: number) {
    this._adminPreference = value;
  }
  public resetAdminPreference() {
    this._adminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPreferenceInput() {
    return this._adminPreference;
  }

  // alias_name - computed: false, optional: false, required: true
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
  }

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: string; 
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
  public set servicePort(value: string) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceDnsCnameRecordSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceDnsCnameRecordSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_preference: cdktf.numberToTerraform(this._adminPreference),
      alias_name: cdktf.stringToTerraform(this._aliasName),
      as_backup: cdktf.numberToTerraform(this._asBackup),
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.stringToTerraform(this._servicePort),
      uuid: cdktf.stringToTerraform(this._uuid),
      weight: cdktf.numberToTerraform(this._weight),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      sampling_enable: cdktf.listMapper(gslbZoneServiceDnsCnameRecordSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_preference: {
        value: cdktf.numberToHclTerraform(this._adminPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alias_name: {
        value: cdktf.stringToHclTerraform(this._aliasName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_backup: {
        value: cdktf.numberToHclTerraform(this._asBackup),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.stringToHclTerraform(this._servicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsCnameRecordSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsCnameRecordSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
