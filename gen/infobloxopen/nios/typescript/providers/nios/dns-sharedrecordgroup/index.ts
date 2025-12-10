// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSharedrecordgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The descriptive comment of this shared record group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup#comment DnsSharedrecordgroup#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup#extattrs DnsSharedrecordgroup#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The name of this shared record group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup#name DnsSharedrecordgroup#name}
  */
  readonly name: string;
  /**
  * The record name policy of this shared record group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup#record_name_policy DnsSharedrecordgroup#record_name_policy}
  */
  readonly recordNamePolicy?: string;
  /**
  * Use flag for: record_name_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup#use_record_name_policy DnsSharedrecordgroup#use_record_name_policy}
  */
  readonly useRecordNamePolicy?: boolean | cdktf.IResolvable;
  /**
  * The list of zones associated with this shared record group. Starting from NIOS-9.0.6, this field has been updated to a structure that includes FQDN and DNS view details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup#zone_associations DnsSharedrecordgroup#zone_associations}
  */
  readonly zoneAssociations?: DnsSharedrecordgroupZoneAssociations[] | cdktf.IResolvable;
}
export interface DnsSharedrecordgroupZoneAssociations {
  /**
  * The FQDN of the authoritative forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup#fqdn DnsSharedrecordgroup#fqdn}
  */
  readonly fqdn: string;
  /**
  * The view to which the zone belongs. If a view is not specified, the default view is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup#view DnsSharedrecordgroup#view}
  */
  readonly view?: string;
}

export function dnsSharedrecordgroupZoneAssociationsToTerraform(struct?: DnsSharedrecordgroupZoneAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function dnsSharedrecordgroupZoneAssociationsToHclTerraform(struct?: DnsSharedrecordgroupZoneAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSharedrecordgroupZoneAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSharedrecordgroupZoneAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSharedrecordgroupZoneAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._view = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._view = value.view;
    }
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}

export class DnsSharedrecordgroupZoneAssociationsList extends cdktf.ComplexList {
  public internalValue? : DnsSharedrecordgroupZoneAssociations[] | cdktf.IResolvable

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
  public get(index: number): DnsSharedrecordgroupZoneAssociationsOutputReference {
    return new DnsSharedrecordgroupZoneAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup nios_dns_sharedrecordgroup}
*/
export class DnsSharedrecordgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_sharedrecordgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsSharedrecordgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsSharedrecordgroup to import
  * @param importFromId The id of the existing DnsSharedrecordgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsSharedrecordgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_sharedrecordgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecordgroup nios_dns_sharedrecordgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsSharedrecordgroupConfig
  */
  public constructor(scope: Construct, id: string, config: DnsSharedrecordgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_sharedrecordgroup',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._extattrs = config.extattrs;
    this._name = config.name;
    this._recordNamePolicy = config.recordNamePolicy;
    this._useRecordNamePolicy = config.useRecordNamePolicy;
    this._zoneAssociations.internalValue = config.zoneAssociations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
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

  // record_name_policy - computed: true, optional: true, required: false
  private _recordNamePolicy?: string; 
  public get recordNamePolicy() {
    return this.getStringAttribute('record_name_policy');
  }
  public set recordNamePolicy(value: string) {
    this._recordNamePolicy = value;
  }
  public resetRecordNamePolicy() {
    this._recordNamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNamePolicyInput() {
    return this._recordNamePolicy;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // use_record_name_policy - computed: true, optional: true, required: false
  private _useRecordNamePolicy?: boolean | cdktf.IResolvable; 
  public get useRecordNamePolicy() {
    return this.getBooleanAttribute('use_record_name_policy');
  }
  public set useRecordNamePolicy(value: boolean | cdktf.IResolvable) {
    this._useRecordNamePolicy = value;
  }
  public resetUseRecordNamePolicy() {
    this._useRecordNamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecordNamePolicyInput() {
    return this._useRecordNamePolicy;
  }

  // zone_associations - computed: false, optional: true, required: false
  private _zoneAssociations = new DnsSharedrecordgroupZoneAssociationsList(this, "zone_associations", false);
  public get zoneAssociations() {
    return this._zoneAssociations;
  }
  public putZoneAssociations(value: DnsSharedrecordgroupZoneAssociations[] | cdktf.IResolvable) {
    this._zoneAssociations.internalValue = value;
  }
  public resetZoneAssociations() {
    this._zoneAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAssociationsInput() {
    return this._zoneAssociations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      name: cdktf.stringToTerraform(this._name),
      record_name_policy: cdktf.stringToTerraform(this._recordNamePolicy),
      use_record_name_policy: cdktf.booleanToTerraform(this._useRecordNamePolicy),
      zone_associations: cdktf.listMapper(dnsSharedrecordgroupZoneAssociationsToTerraform, false)(this._zoneAssociations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_name_policy: {
        value: cdktf.stringToHclTerraform(this._recordNamePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_record_name_policy: {
        value: cdktf.booleanToHclTerraform(this._useRecordNamePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_associations: {
        value: cdktf.listMapperHcl(dnsSharedrecordgroupZoneAssociationsToHclTerraform, false)(this._zoneAssociations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsSharedrecordgroupZoneAssociationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
