// https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#base_volume_id Volume#base_volume_id}
  */
  readonly baseVolumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#base_volume_name Volume#base_volume_name}
  */
  readonly baseVolumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#base_volume_pool Volume#base_volume_pool}
  */
  readonly baseVolumePool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#format Volume#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#id Volume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#pool Volume#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#size Volume#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#source Volume#source}
  */
  readonly source?: string;
  /**
  * xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#xml Volume#xml}
  */
  readonly xml?: VolumeXml;
}
export interface VolumeXml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#xslt Volume#xslt}
  */
  readonly xslt?: string;
}

export function volumeXmlToTerraform(struct?: VolumeXmlOutputReference | VolumeXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xslt: cdktf.stringToTerraform(struct!.xslt),
  }
}


export function volumeXmlToHclTerraform(struct?: VolumeXmlOutputReference | VolumeXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xslt: {
      value: cdktf.stringToHclTerraform(struct!.xslt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeXmlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VolumeXml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xslt !== undefined) {
      hasAnyValues = true;
      internalValueResult.xslt = this._xslt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeXml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xslt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xslt = value.xslt;
    }
  }

  // xslt - computed: false, optional: true, required: false
  private _xslt?: string; 
  public get xslt() {
    return this.getStringAttribute('xslt');
  }
  public set xslt(value: string) {
    this._xslt = value;
  }
  public resetXslt() {
    this._xslt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsltInput() {
    return this._xslt;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume libvirt_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/volume libvirt_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_volume',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.8.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseVolumeId = config.baseVolumeId;
    this._baseVolumeName = config.baseVolumeName;
    this._baseVolumePool = config.baseVolumePool;
    this._format = config.format;
    this._id = config.id;
    this._name = config.name;
    this._pool = config.pool;
    this._size = config.size;
    this._source = config.source;
    this._xml.internalValue = config.xml;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_volume_id - computed: false, optional: true, required: false
  private _baseVolumeId?: string; 
  public get baseVolumeId() {
    return this.getStringAttribute('base_volume_id');
  }
  public set baseVolumeId(value: string) {
    this._baseVolumeId = value;
  }
  public resetBaseVolumeId() {
    this._baseVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseVolumeIdInput() {
    return this._baseVolumeId;
  }

  // base_volume_name - computed: false, optional: true, required: false
  private _baseVolumeName?: string; 
  public get baseVolumeName() {
    return this.getStringAttribute('base_volume_name');
  }
  public set baseVolumeName(value: string) {
    this._baseVolumeName = value;
  }
  public resetBaseVolumeName() {
    this._baseVolumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseVolumeNameInput() {
    return this._baseVolumeName;
  }

  // base_volume_pool - computed: false, optional: true, required: false
  private _baseVolumePool?: string; 
  public get baseVolumePool() {
    return this.getStringAttribute('base_volume_pool');
  }
  public set baseVolumePool(value: string) {
    this._baseVolumePool = value;
  }
  public resetBaseVolumePool() {
    this._baseVolumePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseVolumePoolInput() {
    return this._baseVolumePool;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // xml - computed: false, optional: true, required: false
  private _xml = new VolumeXmlOutputReference(this, "xml");
  public get xml() {
    return this._xml;
  }
  public putXml(value: VolumeXml) {
    this._xml.internalValue = value;
  }
  public resetXml() {
    this._xml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlInput() {
    return this._xml.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_volume_id: cdktf.stringToTerraform(this._baseVolumeId),
      base_volume_name: cdktf.stringToTerraform(this._baseVolumeName),
      base_volume_pool: cdktf.stringToTerraform(this._baseVolumePool),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pool: cdktf.stringToTerraform(this._pool),
      size: cdktf.numberToTerraform(this._size),
      source: cdktf.stringToTerraform(this._source),
      xml: volumeXmlToTerraform(this._xml.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_volume_id: {
        value: cdktf.stringToHclTerraform(this._baseVolumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_volume_name: {
        value: cdktf.stringToHclTerraform(this._baseVolumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_volume_pool: {
        value: cdktf.stringToHclTerraform(this._baseVolumePool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xml: {
        value: volumeXmlToHclTerraform(this._xml.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeXmlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
