// https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/const_fingerprints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistConstFingerprintsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/const_fingerprints mist_const_fingerprints}
*/
export class DataMistConstFingerprints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_const_fingerprints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistConstFingerprints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistConstFingerprints to import
  * @param importFromId The id of the existing DataMistConstFingerprints that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/const_fingerprints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistConstFingerprints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_const_fingerprints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/const_fingerprints mist_const_fingerprints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistConstFingerprintsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMistConstFingerprintsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mist_const_fingerprints',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.1',
        providerVersionConstraint: '0.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getListAttribute('family');
  }

  // mfg - computed: true, optional: false, required: false
  public get mfg() {
    return this.getListAttribute('mfg');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getListAttribute('model');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getListAttribute('os');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
